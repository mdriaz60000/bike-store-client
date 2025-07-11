import { Link } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Bike, Users, Shield, Globe } from "lucide-react"; 
import Container from "../../components/shared/Containeer/Containeer";
const AboutUs = () => {
  const stats = [
    { value: "10,000+", label: "Bikes Sold", icon: <Bike className="h-8 w-8" /> },
    { value: "50+", label: "Cities Served", icon: <Globe className="h-8 w-8" /> },
    { value: "98%", label: "Happy Customers", icon: <Users className="h-8 w-8" /> },
    { value: "5 Years", label: "Warranty", icon: <Shield className="h-8 w-8" /> },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former professional cyclist with a passion for quality bikes",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1584261188.1697473840&semt=ais_hybrid&w=740"
    },
    {
      name: "Jamie Rivera",
      role: "Head Mechanic",
      bio: "20 years experience in bike assembly and maintenance",
      img: "https://img.freepik.com/free-photo/closeup-portrait-attractive-woman-stands-smiling-isolated-yellow_176532-7914.jpg?ga=GA1.1.1584261188.1697473840&semt=ais_hybrid&w=740"
    },
    {
      name: "Taylor Smith",
      role: "Customer Support",
      bio: "Ensures every customer gets the perfect bike",
      img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?ga=GA1.1.1584261188.1697473840&semt=ais_hybrid&w=740"
    }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <section className=" mt-5 relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-primary">
        <div className=" text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From a small garage workshop to becoming your trusted bike specialists
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-500 mb-6">Why We Started</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, BikeHub began with a simple mission: to make quality bicycles 
              accessible to everyone without compromising on performance or durability.
            </p>
            <p className="text-gray-600">
              What started as a passion project between cycling enthusiasts has grown into 
              a trusted destination for riders of all levels across the country.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://img.freepik.com/premium-photo/smiling-mechanic-woman-looking-camera-while-holding-digital-tablet-sitting-platform_1048944-6115268.jpg?ga=GA1.1.1584261188.1697473840&semt=ais_hybrid&w=740" 
              alt="Our first workshop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <img 
                src={member.img} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4  bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Bike?</h2>
          <p className="text-xl mb-8">
            Our team is here to help you choose the ideal bicycle for your needs.
          </p>
          <Link to="/contact"><button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contact Us
          </button></Link>
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;