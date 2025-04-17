import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BikeDetailsCard from "./BikeDetailsCard";
import { Bike } from "../../types";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";

const BikeDetails = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    const { data, error, isLoading } = useGetProductQuery(undefined);
    const [bike, setBike] = useState<Bike | null>(null);

    useEffect(() => {
        if (data && id) {
            const foundBike = data.data.find((bike: Bike) => bike._id === id);
            setBike(foundBike || null);
        }
    }, [data, id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading bike details</div>;
    if (!bike) return <div>Bike not found</div>;

    return (
       
            <div >
                <br />
                <BikeDetailsCard bike={bike} />
            </div>
        
    );
};

export default BikeDetails;