 import { useEffect, useState } from "react";
import { Banner } from "./pages/bannar/Bannar"
import LatestBike from "./pages/LatestBike/LatestBike"
// import { useGetBikeQuery } from "./redux/api/baseApi";



function App() {
   const [bikes, setBikes] = useState([]);
  
    useEffect(() => {
      fetch("bike.json")
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
  // const { data :bikes , error, isLoading } = useGetBikeQuery([]);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>

 console.log(bikes)
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
