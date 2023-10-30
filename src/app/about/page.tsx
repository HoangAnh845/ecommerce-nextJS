import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <header className=" bg-white">
        <Navbar />
        <div className="w-full h-80 relative">
          <Image
            src={"/about/about_banner.png"}
            alt="about_banner"
            fill={true}
          />
        </div>
      </header>
      <>
        <main className="container m-auto">
          <div className="text-center my-10">
            <h1 className="font-bold text-2xl">
              Ecommere là nền tảng thương mại điện tử hàng đầu tại Đông Nam Á và
              Đài Loan.
            </h1>
            <p className="my-3 text-sm leading-6 text-gray-500 px-5">
              Ra mắt năm 2015, nền tảng thương mại Shopee được xây dựng nhằm
              cung cấp cho người dùng những trải nghiệm dễ dàng, an toàn và
              nhanh chóng khi mua sắm trực tuyến thông qua hệ thống hỗ trợ thanh
              toán và vận hành vững mạnh. Chúng tôi có niềm tin mạnh mẽ rằng
              trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng và mang đến
              cảm xúc vui thích. Niềm tin này truyền cảm hứng và thúc đẩy chúng
              tôi mỗi ngày tại Shopee.
            </p>
            <button
              type="button"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg"
            >
              Tìm hiểu
            </button>
          </div>
          <div className="flex justify-between w-full mb-10">
            <div className="text-center p-5 me-5 border rounded-lg shadow-lg">
              <h2 className="font-bold text-xl me-2">Mục tiêu của chúng tôi</h2>
              <p className="my-3 text-sm leading-6 text-gray-500">
                Chúng tôi tin tưởng vào sức mạnh khai triển của công nghệ và
                mong muốn góp phần làm cho thế giới trở nên tốt đẹp hơn bằng
                việc kết nối cộng đồng người mua và người bán thông qua việc
                cung cấp một nền tảng thương mại điện tử
              </p>
            </div>
            <div className="text-center p-5 border rounded-lg shadow-lg">
              <h2 className="font-bold text-xl me-2">Định vị của chúng tôi</h2>
              <p className="my-3 text-sm leading-6 text-gray-500">
                Đối với người dùng trên toàn khu vực, Shopee mang đến trải
                nghiệm mua sắm trực tuyến tích hợp với vô số sản phẩm đa dạng
                chủng loại, cộng đồng người dùng năng động và chuỗi dịch vụ liền
                mạch.
              </p>
            </div>
          </div>
          <div className="mb-10 p-5 border rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="font-bold text-xl me-2">
                Đặc điểm về con người của chúng tôi
              </h2>
              <p className="my-3 text-sm leading-6 text-gray-500 px-5">
                Để định nghĩa chúng tôi là ai - thông qua lời nói hay cách ứng
                xử trong nhiều trường hợp khác nhau - thì thực chất, chúng tôi
                Gần gũi, Vui vẻ và Đồng lòng. Đây là những đặc tính chính và nổi
                bật trong từng bước đường phát triển của Shopee.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div>
                <div className="w-full h-40 relative">
                  <Image
                    src={"/about/Illustration_1.png"}
                    alt="Illustration_1"
                    fill={true}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl">Gần Gũi</h2>
                  <p className="text-sm text-gray-500 px-2">
                    Chúng tôi có niềm tin vào tính gần gũi mà thanh liêm, nền
                    tảng vững chắc cho một cuộc sống trung thực, bình dân và
                    thành thật với bản thân.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-full h-40 relative">
                  <Image
                    src={"/about/Illustration_2.png"}
                    alt="Illustration_2"
                    fill={true}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl">Vui Vẻ</h2>
                  <p className="text-sm text-gray-500 px-2">
                    Chúng tôi dễ gần, đáng yêu và tràn đầy năng lượng, luôn mang
                    đến niềm vui cho những người xung quanh.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-full h-40 relative">
                  <Image
                    src={"/about/Illustration_3.png"}
                    alt="Illustration_3"
                    fill={true}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl">Đồng Lòng</h2>
                  <p className="text-sm text-gray-500 px-2">
                    Chúng tôi thích tận hưởng thời gian bên nhau giống như tận
                    hưởng việc mua sắm trực tuyến với người thân và bạn bè - làm
                    những việc yêu thích cùng nhau như một đại gia đình lớn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="font-bold text-2xl text-center mb-3">
              Giá trị cốt lõi
            </h1>
            <div className="w-full h-80 relative">
              <Image
                src={"/about/about_values.png"}
                alt="about_values"
                fill={true}
              />
            </div>
          </div>
        </main>
      </>
      <footer className="bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default About;
