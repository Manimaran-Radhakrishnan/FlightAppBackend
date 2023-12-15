import mongoose from "mongoose";

export const ConnectDb = async () => {
  const mongoDbURL = process.env.MONGODBCONNECTIONSTRING;

  try {
    const connection = await mongoose.connect(mongoDbURL);

    console.log("-----🎈 Mongodb connected 🎈-----");

    return connection;
  } catch (error) {
    console.log("Error in Mongodb connection", error);
  }
};
