"use client";

import { useState } from "react";
import Container from "@/components/shared/Containeer/Containeer";
import { Bike } from "../../types";
import AllBikesCard from "./AllBikesCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetPaginationQuery } from "@/redux/features/pagination/pagination";

const AllBikes = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  // Fetch data using RTK Query
  const { data, isLoading } = useGetPaginationQuery({ page, limit });

  // Proper destructuring based on actual API structure
  const bikes: Bike[] = data?.data?.data || [];
  const meta = data?.data?.meta;
  const totalPages = Math.ceil((meta?.total || 0) / limit);

  return (
    <Container>
      <div className="text-center m-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">All Bikes</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get Your Desired Product from Smart Collection
        </p>
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm space-y-3 animate-pulse">
              <Skeleton className="h-40 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Bikes grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {bikes.map((bike: Bike) => (
              <AllBikesCard key={bike._id} bike={bike} />
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
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
