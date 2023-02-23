import mongoose from "mongoose";

mongoose.set('strictQuery', false);

export const Connection = async () => {
    const DB = process.env.MONGO_URL
    await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log(`Database Connection Successful...!`);
    }).catch((err) => {
        console.log(`No Connection...!`);
    })
}

export default Connection



