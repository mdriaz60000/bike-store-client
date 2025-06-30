import Container from "../../components/shared/Containeer/Containeer";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle } from "lucide-react"; 

const Service = () => {
    const services = [
        {
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders over $500. We deliver to your doorstep with care and precision.",
            features: [
                "Secure packaging",
                "No hidden fees",
                "Fast delivery"
            ],
            icon: "🚚" 
        },
        {
            title: "2-Year Warranty",
            description: "Rest easy with our comprehensive 2-year warranty on all bike frames. We stand behind our quality.",
            features: [
                "Easy claims process",
                "Expert support",
                "Full coverage"
            ],
            icon: "🛡️"
        },
        {
            title: "Easy Returns",
            description: "Not satisfied? Return within 30 days for a full refund. Hassle-free process guaranteed.",
            features: [
                "Free return shipping",
                "No questions asked",
                "Quick refunds"
            ],
            icon: "🔄"
        }
    ];

    return (

        <Container>      
             <section className="py-12  ">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
                    We provide the best quality services to ensure your complete satisfaction
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <Card 
                            key={index}
                            className="group overflow-hidden border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                
                                <ul className="space-y-2 text-left">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section></Container>
 
    );
};

export default Service;