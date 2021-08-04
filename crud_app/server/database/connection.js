const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        // async -> khai bao ham bat dong bo, tu dong bien ham thong thuong thanh promise, xu ly va tra ve kq trong ham cua no
        // await-> tam dung viec thuc hien cua cac ham async
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
// module de don gian hoa cac ung dung phuc tap, giong nhu thu vien trong c# c, java
module.exports = connectDB