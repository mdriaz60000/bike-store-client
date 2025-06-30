
export type Bike = {
    "brand": string,
    "productName": string,
        "model": string,
        "price": number,
        "category": string,
        "description" : string,
        "img" : string,
        "id": number,
        "_id": string,
        "user": string,
      "userEmail": string,
      "rating"?: number,
      "offer": number

}

 export type IUser = {
  _id: string; 
  name: string;
  email: string;
  role: string;
}

export type Imessage = {
  UserName: string;
  email: string;
  message: string;
  isDeleted?: boolean;
  _id: string ;
};
