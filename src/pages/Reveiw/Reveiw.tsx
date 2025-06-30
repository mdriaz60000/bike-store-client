
import Container from "../../components/shared/Containeer/Containeer";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  bikeModel?: string; 
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      userName: "Alex Johnson",
      rating: 5,
      date: "2023-10-15",
      bikeModel: "Mountain Pro X9",
      comment: "Absolutely love my new bike! The delivery was super fast and the assembly instructions were crystal clear. Rides like a dream on mountain trails."
    },
    {
      id: 2,
      userName: "Sarah Miller",
      rating: 4,
      date: "2023-09-28",
      bikeModel: "Urban Commuter S3",
      comment: "Great bike for city commuting. Only gave 4 stars because the seat could be more comfortable for long rides. Otherwise perfect!"
    },
    {
      id: 3,
      userName: "James Wilson",
      rating: 5,
      date: "2023-11-02",
      comment: "Excellent customer service when I had questions about sizing. The bike arrived perfectly tuned and ready to ride. Will buy again!"
    }
  ];

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "text-secondary"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <Container>
    <section className="py-12 ">
      <div className="">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Customer Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our customers say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{review.userName}</h3>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                {review.bikeModel && (
                  <p className="text-sm text-gray-600">Bike: {review.bikeModel}</p>
                )}
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </Container>

  );
};

export default Reviews;