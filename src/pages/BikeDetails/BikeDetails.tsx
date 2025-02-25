import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BikeDetailsCard from "./BikeDetailsCard";
import { Bike } from "../../types";


const BikeDetails = () => {
    const { id } = useParams<{ id: string }>();
    const allBikes = useLoaderData() as Bike[]; // Assuming useLoaderData returns an array of Bike objects
    const [bike, setBike] = useState<Bike | null>(null);

    useEffect(() => {
        if (allBikes && id) {
            const foundBike = allBikes.find(item => item.id === id);
            setBike(foundBike || null);
        }
    }, [allBikes, id]);

    if (!bike) {
        return <div>Bike not found</div>;
    }

    return (
        <div>
            <p>Details page for bike</p>
            <div>
                <BikeDetailsCard bike={bike} />
            </div>
        </div>
    );
};

export default BikeDetails;