
import Bannar from "./pages/bannar/Bannar";
import BlogPage from "./pages/Blog/Blog";
import LatestBike from "./pages/LatestBike/LatestBike";
import Offers from "./pages/Offers/Offers";
import ProductCategory from "./pages/ProductCategory/ProductCategory";

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
        <BlogPage></BlogPage>
        <Reviews/>
      </div>
    </>
  );
}

export default App;