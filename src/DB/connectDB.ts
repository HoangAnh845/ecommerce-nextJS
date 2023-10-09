import mongoose, { ConnectOptions } from 'mongoose';


interface connectedOptions extends ConnectOptions{
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
}

const options: connectedOptions = {
    useNewUrlParser: true, // Phân tích cú pháp URL
    useUnifiedTopology: true, // Cơ chế quản lý kết nối thống nhất
};

// connecting to database
const connectDB = async () => {
    const connectionUrl: string = process.env.DB_URI as string;
    mongoose.connect(connectionUrl , options )
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false); // thực hiện các truy vấn không nghiêm ngặt.
};

export default connectDB;   