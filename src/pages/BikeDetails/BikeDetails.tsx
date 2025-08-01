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


  useEffect(() => {
    if (data && id) {
      const foundBike = data?.data?.find((bike: Bike) => bike._id === id);
      setBike(foundBike || null);
    }
  }, [data, id]);

   useEffect(() => {
    if (bike && data?.data) {
      const related = data.data.filter(
        (item: Bike) => item._id !== bike._id && item.brand === bike.brand
      );
      setRelatedBikes(related);
    }
  }, [bike, data, ]);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error loading bike details</div>;
  if (!bike) return <div className="text-center text-muted-foreground py-10">Bike not found</div>;

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mt-6">
        {/* Sidebar */}
        <aside className="lg:col-span-2 bg-secondary text-secondary-foreground border border-border rounded-lg p-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Bike Brands</h2>
            <ul className="flex flex-wrap gap-2 lg:flex-col text-sm">
              {["Sony", "Hero", "Bajaj", "Platina", "Honda", "TVS", "Yamaha", "Runner"].map((brand) => (
                <li
                  key={brand}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-md hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors text-center"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

   
        </aside>

        {/* Bike Details Section */}
        <section className="lg:col-span-6 w-full">
          <BikeDetailsCard bike={bike} />
        </section>
      </div>

      {/* Related Bikes Section */}
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
