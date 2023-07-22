import mongoose from "mongoose";


const Connection = async(username,password)=>{
   const URL = `mongodb://${username}:${password}@ac-sj7dpva-shard-00-00.tni1p4a.mongodb.net:27017,ac-sj7dpva-shard-00-01.tni1p4a.mongodb.net:27017,ac-sj7dpva-shard-00-02.tni1p4a.mongodb.net:27017/?ssl=true&replicaSet=atlas-my36af-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log("Database connnected successfully");
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }

}
export default Connection;