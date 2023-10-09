import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBnRZno-K-0hvf_RE4KThGvic2ekyf4Irw",
  authDomain: "next-ecommerce-392403.firebaseapp.com",
  projectId: "next-ecommerce-392403",
  storageBucket: "next-ecommerce-392403.appspot.com",
  messagingSenderId: "325604433018",
  appId: "1:325604433018:web:a5fb3ed1d0fa0d2fcbafc3",
  measurementId: "G-HDLYMZ4W92"
};

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);
// Tạo một tham chiếu đến Firebase Storage -> Thực hiện các hoạt động liên quan đến lưu trữ tệp tin và dữ liệu
export const storage = getStorage(app,"gs://next-ecommerce-392403.appspot.com");
