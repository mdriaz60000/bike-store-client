
import { Banner } from "./pages/bannar/Bannar";
import LatestBike from "./pages/LatestBike/LatestBike";
import Reviews from "./pages/Reveiw/Reveiw";
import Service from "./pages/service/Service";



function App() {
  
 
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Banner/>
        {/* {
          data?.data?.map( bike => <LatestBike bike={bike} ></LatestBike>)
        }
         */}
         <LatestBike  ></LatestBike>
        <Service/>
        <Reviews/>
      </div>
    </>
  );
}

export default App;