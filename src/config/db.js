import mongoose from 'mongoose';

const connectDB = async (url) => {
    await mongoose
        .connect(url)
        .then(() => console.log('Base de datos conectada'));
};

export default connectDB;
