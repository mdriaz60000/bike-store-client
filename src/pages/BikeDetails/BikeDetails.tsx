import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BikeDetailsCard from "./BikeDetailsCard";
import { Bike } from "../../types";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import RelatedBikeCard from "./RelatedBikeCard";
import Container from "../../components/shared/Containeer/Containeer";

const BikeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductQuery(undefined);
  const [bike, setBike] = useState<Bike | null>(null);
  const [relatedBikes, setRelatedBikes] = useState<Bike[]>([]);
  const [sortBy, setSortBy] = useState("priceLowToHigh");

  useEffect(() => {
    if (data && id) {
      const foundBike = data.data.find((bike: Bike) => bike._id === id);
      setBike(foundBike || null);
    }
  }, [data, id]);

  useEffect(() => {
    if (bike && data?.data) {
      let related = data.data.filter(
        (item: Bike) => item._id !== bike._id && item.brand === bike.brand
      );

      if (sortBy === "priceLowToHigh") {
        related = related.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
      } else if (sortBy === "priceHighToLow") {
        related = related.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
      } else if (sortBy === "ratingHighToLow") {
        related = related.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
      }

      setRelatedBikes(related);
    }
  }, [bike, data, sortBy]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bike details</div>;
  if (!bike) return <div>Bike not found</div>;

  return (
    <Container>
      {/* Layout grid */}
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mt-6">
        {/* Sidebar */}
        <aside className="lg:col-span-2 bg-secondary border border-primary rounded-lg p-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Bike Brands</h2>
            <ul className="flex flex-wrap gap-2 lg:flex-col text-gray-600 text-sm">
              {[
                "Sony",
                "Hero",
                "Bajaj",
                "Platina",
                "Honda",
                "TVS",
                "Yamaha",
                "Runner",
              ].map((brand) => (
                <li
                  key={brand}
                  className="px-3 py-1 bg-secondary rounded-md hover:bg-primary hover:text-secondary-foreground cursor-pointer transition text-center"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Sort Dropdown */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Sort By</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border text-primary px-3 py-2 rounded-md text-sm"
            >
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Bike Details */}
        <section className="lg:col-span-6 w-full">
          <BikeDetailsCard bike={bike} />
        </section>
      </div>

      {/* Related Bikes */}
      {relatedBikes.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-12 mb-4">Related Bikes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBikes.map((bike: Bike) => (
              <RelatedBikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default BikeDetails;
