import jwt, { JwtPayload } from "jsonwebtoken";


export const dynamic  = 'force-dynamic'

const AuthCheck = async (req: Request) => {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return false;
    }
    try {
      // Giải mã token
      // `as JwtPayload`: chỉ định kiểu dữ liệu của biến decoded là JwtPayload. 
      // Điều này giúp TypeScript biết rằng biến decoded chứa thông tin giải mã từ token và sẽ có cấu trúc của một JwtPayload. 
      // JwtPayload thường là một giao diện (interface) hoặc kiểu dữ liệu mô tả cấu trúc của thông tin trong token JWT.
      const decoded = await jwt.verify(token, process.env.JWT_SECREAT ?? 'default_secret_dumbScret') as JwtPayload;
      if(decoded) return decoded?.role
    } catch (error) {
      return false
    }
  }
  


export default AuthCheck;