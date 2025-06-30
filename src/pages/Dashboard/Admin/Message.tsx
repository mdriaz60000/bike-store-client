import Container from "@/components/shared/Containeer/Containeer";
import { useGetMessageQuery } from "@/redux/features/message/message";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Imessage } from "@/types";

const Message = () => {
  const { data } = useGetMessageQuery(undefined);
  const messages = data?.data || [];

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6 text-center">User Messages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.map((msg: Imessage) => (
          <Card key={msg._id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarFallback>{msg.UserName?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{msg.UserName}</CardTitle>
                <p className="text-sm text-muted-foreground">{msg.email}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{msg.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Message;
