import { Link } from "react-router-dom";
import { Bike } from "../../types";

const MountCategory = ({ item }: { item: Bike }) => {
  return (
    <Link to={`/details/${item._id}`}>
            <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src={item.img}
        alt={item.brand}
        className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* Glass-like price tag */}
      <div className="absolute top-3 left-3 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-primary shadow-sm">
        ${item.price}
      </div>

      {/* Overlay info on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-semibold text-lg text-center px-2">{item.brand}</p>
      </div>
    </div>
    </Link>

  );
};

export default MountCategory;
