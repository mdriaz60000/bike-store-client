import { Link } from "react-router-dom";
import { Bike } from "../../types";
import { BikeIcon, Star } from "lucide-react";

const MountCategory = ({ item }: { item: Bike }) => {
  
  return (
    <Link to={`/details/${item._id}`} aria-label={`View details of ${item.brand}`}>
      <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900">
        <img
          src={item.img}
          alt={item.brand}
          className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Price Tag */}
        <div className="absolute top-3 left-3 bg-white/40 dark:bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-primary shadow-md border border-white/50">
          ${item.price}
        </div>

        {/* Category Tag */}
        <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 text-xs rounded-full shadow-sm flex items-center gap-1">
          <BikeIcon size={14} /> Bike
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-md">
                
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                item.rating && item.rating >= i + 1
                  ? "text-yellow-400 fill-yellow-400"
                  : item.rating && item.rating >= i + 0.5
                  ? "text-yellow-400 fill-yellow-400"
                  : "stroke-yellow-400"
              }`}
            />
          ))}
          <span className="text-gray-500 ml-2 text-xs">
            {item.rating || "0.0"}
          </span>
        
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div>
            <h3 className="text-white text-lg font-semibold">{item.brand}</h3>
            <p className="text-white text-sm opacity-80">{item.productName || "Model Info"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MountCategory;
