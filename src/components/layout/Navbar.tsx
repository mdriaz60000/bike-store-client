import { useEffect, useRef, useState } from "react";
import { LayoutDashboard, Search } from "lucide-react";
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
    <header className="bg-secondary text-secondary-foreground shadow-md sticky  z-50">
      <Container>
        <div className="flex items-center justify-between py-2">
         
          <div className=" flex items-center gap-2  font-bold">
            <FaMotorcycle className="w-7 h-7 text-primary hidden md:inline" />
            
            <span className="text-primary md:text-2xl">
              <Link to="/">Bike Store</Link></span>
          </div>

          {/* Searchbar */}
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
                className="w-full pl-10 pr-4 py-2 text-sm bg-background text-foreground border border-border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary">
                <Search />
              </div>

              {/* Dropdown Suggestion */}
              {showSuggestions && debouncedTerm && (
                <div className="absolute mt-2 w-full bg-popover text-popover-foreground border border-border rounded-md shadow z-50 max-h-64 overflow-auto">
                  {isLoading ? (
                    <p className="p-2 text-sm text-muted-foreground">Searching...</p>
                  ) : data?.data?.length ? (
                    data.data.map((item: Bike) => (
                      <p
                        key={item._id}
                        className="px-4 py-2 hover:bg-muted hover:text-muted-foreground cursor-pointer text-sm"
                        onClick={() => handleSelect(item.brand)}
                      >
                        {item.brand} - {item.model}
                      </p>
                    ))
                  ) : (
                    <p className="p-2 text-sm text-muted-foreground">No results found</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 lg:gap-6">
            <OrderCart />
            <ModeToggle />
            <Link to="/dashboard/allUsers" className="text-primary hover:opacity-80">
              <LayoutDashboard />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
