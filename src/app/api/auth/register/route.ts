import connectDB from '@/DB/connectDB';
import User from '@/model/User';
import Joi from 'joi';
import { NextResponse } from 'next/server'; // Điề hướng response từ một page
import { hash } from 'bcryptjs';

// Tính hợp lệ dữ liệu
const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().required()
});


export  async function POST (req : Request)  {
    await connectDB();
    const { email, password, name } = await req.json();
    const { error } = schema.validate({ email, password, name });

    // If erro => trả về response JSON
    if (error) return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    try {
        const ifExist = await User.findOne({ email });
        
        if (ifExist) {
            return NextResponse.json({ success: false, message: "User Already Exist" });
        }
        else {
            // 12 số vòng lặp 
            const hashedPassword = await hash(password, 12)
            const createUser = await User.create({ email, name, password: hashedPassword , role : 'user' });
            if(createUser) return NextResponse.json({ success: true, message: "Account created successfully" });
        }
    } catch (error) {
        console.log('Error in register (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}

