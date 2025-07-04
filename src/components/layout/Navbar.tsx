import { useEffect, useRef, useState } from "react";
import {  LayoutDashboard, Search } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { OrderCart } from "../shared/Dialog/Dalog";
import Container from "../shared/Containeer/Containeer";
import { Link, useNavigate } from "react-router-dom";
import { useGetSearchQuery } from "@/redux/features/search/search";
import useDebounce from "@/Hook/useDebounce";
import { Bike } from "@/types";
import { FaMotorcycle } from "react-icons/fa6";


export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedTerm = useDebounce(searchTerm, 300);
     const navigate = useNavigate();

  const { data, isLoading } = useGetSearchQuery(debouncedTerm, {
    skip: !debouncedTerm,
  });

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // hide dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSearchTerm(value);
    setShowSuggestions(false);
    navigate(`/search?searchTerm=${encodeURIComponent(value)}`);
  };

  return (
    <header className="bg-secondary shadow-md sticky z-50">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaMotorcycle className="w-7 h-7 " />
            <span className="text-primary">Bike Store</span>
          </div>

          {/* searchbar */}
          <div ref={wrapperRef} className="relative sm:flex items-center w-full max-w-md mx-4">
            <div className="w-full">
              <input
                type="search"
                placeholder="Search bikes..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                }}
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search />
              </div>

              {/* dropdown suggestion */}
              {showSuggestions && debouncedTerm && (
                <div className="absolute mt-2 w-full bg-white border rounded-md shadow z-50 max-h-64 overflow-auto">
                  {isLoading ? (
                    <p className="p-2 text-sm text-gray-400">Searching...</p>
                  ) : data?.data?.length ? (
                    data.data.map((item: Bike) => (
                      <p
                        key={item._id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => handleSelect(item.brand)}
                      >
                        {item.brand} - {item.model}
                      </p>
                    ))
                  ) : (
                    <p className="p-2 text-sm text-gray-400">No results found</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* right icons */}
          <div className="flex items-center gap-3 lg:gap-6">
            <OrderCart />
            <ModeToggle />
            <Link to="/dashboard/allUsers">
              <LayoutDashboard />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
