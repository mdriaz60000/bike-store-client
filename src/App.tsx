import { useEffect, useState } from "react";
import { Banner } from "./pages/bannar/Bannar"
import LatestBike from "./pages/LatestBike/LatestBike"



function App() {
   const [bikes, setBikes] = useState([]);
  
    useEffect(() => {
      fetch("bike.json")
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    

  return (
    <>
    <div className=' w-[90%] mx-auto'>
    <Banner/>
    <LatestBike bikes={bikes}  />
    </div>
    
     
    </>
  )
}

export default App
