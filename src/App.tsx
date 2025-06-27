
import Bannar from "./pages/bannar/Bannar";
import LatestBike from "./pages/LatestBike/LatestBike";
import Offers from "./pages/Offers/Offers";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import Promotion from "./pages/Promotion/Promotion";
import Reviews from "./pages/Reveiw/Reveiw";
import Service from "./pages/service/Service";



function App() {
  
 
  return (
    <>
      <div className=''>
        <Bannar/>
        <ProductCategory/>
         <LatestBike  ></LatestBike>
        <Service/>
        <Offers></Offers>
        <Reviews/>
      </div>
    </>
  );
}

export default App;