import { Link } from "react-router-dom";
import { Bike } from "../../types";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";

const RelatedBikeCard = ({ bike }: { bike: Bike }) => {
  return (
    <Card className="group overflow-hidden rounded-xl shadow hover:shadow-lg transition-all duration-300">
      <Link to={`/bike/${bike._id}`}>
        <CardHeader className="p-0">
          <img
            src={bike.img}
            alt={bike.model}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </CardHeader>
        <CardContent className="p-4 space-y-1">
          <h3 className="text-lg font-semibold">{bike.model}</h3>
          <p className="text-sm text-gray-500">{bike.brand}</p>
          <p className="text-primary font-bold">${bike.price}</p>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star className="w-4 h-4 fill-yellow-400" />
            <span>{bike.rating?.toFixed(1) || "N/A"}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default RelatedBikeCard;
