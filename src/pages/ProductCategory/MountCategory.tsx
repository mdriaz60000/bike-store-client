import { Bike } from "../../types";


const MountCategory = ({item} : {item: Bike}) => {

    return (
        <div>
            <img src={item.img} alt="n/a" />
        </div>
    );
};

export default MountCategory;