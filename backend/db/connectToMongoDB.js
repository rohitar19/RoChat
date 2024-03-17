import mongoose from "mongoose";


const connectionString=`mongodb+srv://rohit960211:Rohit@cluster0.qfbl9nq.mongodb.net/Chat?retryWrites=true&w=majority&appName=Cluster0`

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
