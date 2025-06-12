// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try {
//         mongoose.connection.on('connected', ()=> console.log("Database Connected")
//         );
//         await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
//     } catch (error) {
//         console.error(error.message);
//     }
// }


// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

export default connectDB;
