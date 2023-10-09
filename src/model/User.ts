import mongoose from 'mongoose';

// Định nghĩa Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password : String ,
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
});

// `Model User` đã tồn tại trong MongoDB thì sẽ sử dụng 
// Không có sẽ tạo ra `Model User`
const User = mongoose.models.User  || mongoose.model('User', UserSchema);

export default User;