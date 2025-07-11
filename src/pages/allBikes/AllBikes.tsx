import { useState } from "react";
import Container from "@/components/shared/Containeer/Containeer";
import { Bike } from "../../types";
import AllBikesCard from "./AllBikesCard";
import { useGetAllProductQuery } from "@/redux/features/AdminApi/ProductApi";
import { Skeleton } from '@/components/ui/skeleton';

const AllBikes = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, isLoading } = useGetAllProductQuery({ page, limit });

  const totalPages = data?.data?.meta?.totalPages || 1;

  return (
    <Container>
      <div className="text-center m-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">All Bike</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get Your Desired Product from Smart Collection
        </p>
      </div>

      {isLoading ? (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="border rounded-lg p-4 shadow-sm space-y-3 animate-pulse"
      >
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-8 w-full rounded-md" />
      </div>
    ))}
  </div>
): (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data?.data?.bikes?.map((bike: Bike) => (
              <AllBikesCard key={bike._id} bike={bike} />
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={`px-4 py-2 rounded ${
                  page === idx + 1 ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default AllBikes;
