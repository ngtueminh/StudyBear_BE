import mongoose from "mongoose";

const adminUsername = "admin";
const adminPassword = "admin";

let dbName;
if (process.env.NODE_ENV === "production") dbName = "fullstackdb";
else dbName = "fullstackdbdev";

// const dbUrl = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.rwglkg0.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// const dbUrl = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.xyq0dsw.mongodb.net/${dbName}?retryWrites=true&w=majority`
const dbUrl = `mongodb+srv://${adminUsername}:${adminPassword}@webggapi.qkfks.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=WebGGAPI`
async function connectDb() {
	try {
		await mongoose.connect(dbUrl, {
			connectTimeoutMS: 2000, // Throw exception if can't connect to database within 2 minutes
		});
	} catch (error) {
		console.log(error);
	}
}

export { connectDb };
