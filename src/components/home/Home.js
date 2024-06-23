import React from 'react'
import Wrapper from "./../wrapper/Wrapper";
//hình ảnh phần về chúng tôi
import about from "./../../assest/image/content/about.webp";
//icon phần dịch vụ accounting 
import home from "./../../assest/icon/home.svg";
import group from "./../../assest/icon/group.svg";
import law from "./../../assest/icon/law.svg";
import audit from "./../../assest/icon/audit.svg";
import math from "./../../assest/icon/math.svg";
import flag from "./../../assest/icon/flag.svg";
//hình ảnh phần slide thứ 2
import img1 from "./../../assest/image/content/img2.jpg.webp";
import img2 from "./../../assest/image/content/businessmen-with-rocket_1133-282.jpg.webp";
import img3 from "./../../assest/image/content/img4.jpg.webp";
import img4 from "./../../assest/image/content/img5.jpg.webp";
import img5 from "./../../assest/image/content/img6.jpg.webp";
// Hình ảnh phần khách hàng nói gì về chúng tôi
import person from "./../../assest/icon/Person.svg"
import errow from "./../../assest/image/slider/testinomial_errow_bf.png"

import { Carousel } from 'flowbite';



const Home = () => {
  return (
    <div className=''>
      <div className=" top-[170px] w-full z-[1]">
        <Wrapper />
      </div>
      {/* phần dịch vụ tại DN accounting */}
      <div className='bg-[#f3f5fa] pb-[100px]'>
        <div className=' flex justify-center py-[110px]'>
          <div className=' w-[485px] mr-[20px]'>
            <h1 className='text-[36px] font-sans mb-[20px]'>Về chúng tôi</h1>
            <p className='text-[18px] pb-[20px]'>DN Accounting - Dịch Vụ Kế Toán Tại Đà Nẵng đã hoạt động trong lĩnh vực kế toán với 10 năm kinh nghiệm, nhờ đó chúng tôi khẳng định được vị thế là công ty cung cấp các dịch vụ kế toán toàn diện ở Đà Nẵng và có chỗ đứng bền vững tại Việt Nam. Chúng tôi không chỉ tập trung vào phần kinh doanh mà sự hài lòng của khách hàng mới là tôn chỉ hoạt động của công ty.</p>
            <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>
              <span>xem thêm</span></button>
          </div>
          <div className=''>
            <img src={about} className='w-[555px] h-[370px] shadow-lg' />
          </div>
        </div>
        <div className=''>
          <div className='text-center mb-[60px]'>
            <span className='text-[#09A223] font-bold text-[36px]'>DỊCH VỤ TẠI DN ACCOUNTING</span>
          </div>
          <div className='grid  grid-cols-3 gap-[30px] text-center ml-[170px] w-[75%]'>
            <div className='bg-white w-[360px] h-[377px]'>
              <i className='mb-[10px] inline-block mt-[40px]'>
                <img src={audit} className='w-[78px] h-[97px]' />
              </i>
              <h4 className='mb-[15px] text-[24px]'>Kế toán trưởng</h4>
              <p className='mb-[15px] text-[18px]'>Thực thi tất cả các công việc như phòng kế toán của doanh nghiệp. Tiết kiệm chi phí tối đa.</p>
              <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>xem</button>
            </div>
            <div className='bg-white w-[360px] h-[377px]'><div>
              <i className='mb-[10px] inline-block mt-[40px]'>
                <img src={group} className='w-[78px] h-[97px]' />
              </i>
              <h4 className='mb-[15px] text-[24px]'>Thành Lập Công Ty</h4>
              <p className='mb-[15px] text-[18px]'>Chúng tôi tư vấn và thực hiện mọi thủ tục pháp lý, sau 3 ngày Bạn sẽ nhận được giấy phép.</p>
              <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>xem</button>
            </div>
            </div>
            <div className='bg-white w-[360px] h-[377px]'>
              <i className='mb-[10px] inline-block mt-[40px]'>
                <img src={math} className='w-[78px] h-[97px]' />
              </i>
              <h4 className='mb-[15px] text-[24px]'>Kế Toán Thuế</h4>
              <p className='mb-[15px] text-[18px]'>Đảm bảo nghĩa vụ nộp thuế theo qui định của nhà nước. Giảm thiểu tối đa thời gian và chi phí.</p>
              <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>xem</button>
            </div>
            <div className='bg-white w-[360px] h-[377px]'><div>
              <i className='mb-[10px] inline-block mt-[40px]'>
                <img src={home} className='w-[78px] h-[97px]' />
              </i>
              <h4 className='mb-[15px] text-[24px]'>Cho Thuê Văn Phòng</h4>
              <p className='mb-[15px] text-[18px]'>Văn phòng được đặt ở những vị trí đắc địa, đáp ứng và đem đến sự hài lòng.</p>
              <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>xem</button>
            </div>
            </div>
            <div className='bg-white w-[360px] h-[377px]'>
              <div>
                <i className='mb-[10px] inline-block mt-[40px]'>
                  <img src={flag} className='w-[78px] h-[97px]' />
                </i>
                <h4 className='mb-[15px] text-[24px]'>Đăng Ký Thương Hiệu</h4>
                <p className='mb-[15px] text-[18px]'>Gửi đến Quý khách hàng những quy định liên quan đến đăng ký độc quyền thương hiệu.</p>
                <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>xem</button>
              </div>
            </div>
            <div className='bg-white w-[360px] h-[377px]'>
              <div>
                <i className='mb-[10px] inline-block mt-[40px] '>
                  <img src={law} className='w-[78px] h-[97px] ' />
                </i>
                <h4 className='mb-[15px] text-[24px]'>Tư Vấn Pháp Lý</h4>
                <p className='mb-[15px] text-[18px]'>Luật sư & C.E.O sẽ tư vấn các vấn đề Bạn đang gặp phải trong hoạt động kinh doanh.</p>
                <button className='rounded-[30px] bg-[#09A223] py-[5px] px-[15px]'>xem</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="indicators-carousel"
        className="relative w-full h-[700px] pt-[90px] bg-white"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative  w-[1140px] overflow-hidden rounded-lg h-full ml-[185px]">
          {/* Item 1 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <div className='flex h-full  justify-around'>
              <div className='w-[450px] h-[333px] px-[10px] py-[20px] text-center'>
                <img
                  src={img1}
                  className=" block w-full h-[333px] mb-[20px]"
                />
                <h2 className='font-sans text-[28px] mb-[15px]' >CHUYÊN NGHIỆP</h2>
                <p className='text-[18px] font-sans font-normal'>Nhân viên thực hiện công việc của bạn là các kế toán trưởng, Luật sư, Kiểm toán viên... có kinh nghiệm và chuyên nghiệp</p>
              </div>
              <div className='w-[450px] h-[333px] px-[10px] py-[20px] text-center'>
                <img
                  src={img2}
                  className='block w-full h-[333px] mb-[20px]'
                />
                <h2 className='font-sans text-[28px] mb-[15px]' >CẠNH TRANH</h2>
                <p className='text-[18px] font-sans font-normal'>Cam kết giá cạnh tranh,linh hoạt và phù hợp với từng nhu cầu của bạn. Không có phí "ẩn" trong suốt hợp đồng.</p>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out"
            data-carousel-item='active'>
            <div className='flex h-full  justify-around'>
              <div className='w-[450px] h-[333px] px-[10px] py-[20px] text-center'>
                <img
                  src={img3}
                  className=" block w-full h-[333px] mb-[20px]"
                />
                <h2 className='font-sans text-[28px] mb-[15px]' >24/7</h2>
                <p className='text-[18px] font-sans font-normal'>Mọi vấn đề bạn gặp phải sẽ nhanh chóng được giải đáp, chúng tôi luôn sẵn sàng đồng hành cùng bạn 24/7.</p>
              </div>
              <div className='w-[450px] h-[333px] px-[10px] py-[20px] text-center'>
                <img
                  src={img4}
                  className='block w-full h-[333px] mb-[20px]'
                />
                <h2 className='font-sans text-[28px] mb-[15px]' >HẬU MÃI CHU ĐÁO</h2>
                <p className='text-[18px] font-sans font-normal'>Với đội ngũ nhân viên chuyên nghiệp, DN Accounting sẽ hỗ trợ và chăm sóc khách hàng ngay cả khi thủ tục hoàn tất.</p>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out"
            data-carousel-item='active'>
            <div className='flex h-full  justify-around'>
              <div className='w-[450px] h-[333px] px-[10px] py-[20px] text-center'>
                <img
                  src={img5}
                  className='block w-full h-[333px] mb-[20px]'
                />
                <h2 className='font-sans text-[28px] mb-[15px]'  >MIỄN PHÍ & NHANH CHÓNG</h2>
                <p className='text-[18px] font-sans font-normal'>Khi đến với DN Accounting khách hàng sẽ được miễn phí dịch vụ tư vấn thành lập doanh nghiệp và kế toán</p>
              </div>
              <div className='w-[450px] h-[333px] px-[10px] py-[20px] text-center'>
                <img
                  src={img1}
                  className=" block w-full h-[333px] mb-[20px]"
                />
                <h2 className='font-sans text-[28px] mb-[15px]' >CHUYÊN NGHIỆP</h2>
                <p className='text-[18px] font-sans font-normal'>Nhân viên thực hiện công việc của bạn là các kế toán trưởng, Luật sư, Kiểm toán viên... có kinh nghiệm và chuyên nghiệp</p>
              </div>

            </div>
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2 group ">
          <button
            type="button"
            className="w-3 h-3 rounded-full  group-focus:ring-green-600 "
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full "
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full "
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className=" hidden absolute top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className='text-center bg-[#f3f5fa] pt-[100px]'>
        <div>
          <h1 className='text-[#05871f] text-[36px] font-bold'>KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</h1>
        </div>
        <div
          id="animation-carousel"
          className="relative w-full"
          data-carousel="static"

        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Mr. Trần Hoàng Long</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>“Với hơn 2000 công ty đã sử dụng dịch vụ kế toán, tôi không có lý do nào để phải lo ngại về chất lượng dịch vụ khi chọn công ty làm dịch vụ kế toán cho công ty tôi.”</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Ms. Nguyễn Ngọc Linh</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>“Tôi có thể truy cập các báo cáo, sổ sách rất nhanh chóng và thuận tiện qua cổng giao tiếp của dịch vụ kế toán ĐN, mọi trao đổi mới tôi đề được dịch vụ kế toán ĐN thông báo qua tin nhắn và email.”</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Ms. Võ Khánh Nhi</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>"Giờ đây, mặc dù đã có 3 nhân sự phụ trách sổ sách nhưng tôi với tiếp tục ký hợp đồng với công ty vì những lợi ích không thể đong đếm được".</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Mr. Bùi Huy Tiến</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>"Thủ tục hành chính trở nên đơn giản từ khi có công ty. Các bạn đã tư vấn tận tình và thực hiện dịch vụ thật chuyên nghiệp".</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Phan Thanh Tài</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>“Tôi đã sử dụng dịch vụ thành lập công ty tại DN ACCOUNTING, thời gian thực hiện nhanh chóng, giá cả hợp lý”</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
            {/* Item 6 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Mr. Nguyễn Tấn Lộc</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>“Giờ đây, mặc dù đã có 3 nhân sự phụ trách sổ sách nhưng tôi với tiếp tục ký hợp đồng với công ty vì những lợi ích không thể đong đếm được.”</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
            {/* Item 7 */}
            <div className="hidden duration-200 ease-linear" data-carousel-item="">
              <img
                src={person}
                className="absolute block w-[78px] h-[75px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100px]"
              />
              <div className='absolute top-[150px] left-[225px] w-[1060px]'>
              <h2 className='text-[28px]'>Ms. Đặng Huyền Trang</h2>
              <h4 className='text-[18px]'>CEO</h4>
              <div className='flex'>
                <img src={errow} className='h-[30px]'/>
                <p className='text-[18px]'>“Thủ tục hành chính trở nên đơn giản từ khi có công ty. Các bạn đã tư vấn tận tình và thực hiện dịch vụ thật chuyên nghiệp.”</p>
                <img src={errow} className='h-[30px] transform rotate-180'/>
              </div>
              </div>
            </div>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home