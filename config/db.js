const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            ssl:true,
            tlsAllowInvalidCertificates:false,
            tlsInsecure:false,
        };
        console.log("MongoDB connected");
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};
module.exports=connectDB;