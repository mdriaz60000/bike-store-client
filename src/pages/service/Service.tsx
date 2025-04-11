import { Card, CardContent } from "../../components/ui/card";

const Service = () => {
    return (
        <div className=" text-center">
            <p className=" text-4xl">Our service</p>
            <p className="mb-2  md:mb-4 lg:mb-8">Our company best quality service provide</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">

            <CardContent className="p-4">               
                <h3 className="text-xl text-center font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600 text-sm">Enjoy free shipping on all orders over $500. We deliver to your doorstep with care and precision.</p>   
                 <div >
                 <p>✓ Secure packaging</p> 
                 <p>✓ No hidden fees</p>       
           <p>✓ Fast delivery</p>            
                    </div>  
            </CardContent>
        </Card>
                 <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <CardContent className="p-4">
                <h3 className="text-xl text-center font-semibold mb-2">2-Year Warranty</h3>
                <p className="text-gray-600 text-sm">Rest easy with our comprehensive 2-year warranty on all bike frames. We stand behind our quality.</p> 
                <div >
                 <p>✓ Easy claims process</p> 
                 <p>✓ Expert support</p>       
                  <p>✓ Full coverage</p>            
                    </div>               
            </CardContent>
        </Card>
                 <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600 text-sm">Enjoy free shipping on all orders over $500. We deliver to your doorstep with care and precision.</p>  
                <div >
                 <p>✓ Free return shipping</p> 
                 <p>✓ No questions asked</p>       
                 <p>✓ Quick refunds</p>            
                    </div>              
            </CardContent>
        </Card>
        </div>
        </div>
    );
};

export default Service;