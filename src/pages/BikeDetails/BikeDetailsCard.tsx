import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Bike } from "../../types";


const BikeDetailsCard = ({bike} : {bike : Bike} ) => {

    return (
        <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            
        <CardHeader className="p-0">
            <img
                src={bike.img}
                alt={bike.brand}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
            />
        </CardHeader>

        {/* Card Content */}
        <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">{bike.brand}</h3>
            <p className="text-gray-600 text-sm">{bike.details}</p>
            <div className="mt-4">
                <span className="text-lg font-bold">${bike.price}</span>
            </div>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="p-4 border-t">
            <Link to={`/details/${bike.id}`}> <Button className="w-full">View Details</Button></Link>
            
        </CardFooter>
    </Card>
    );
};

export default BikeDetailsCard;