import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import product1 from '../../../assets/product-1.png'
import product2 from '../../../assets/product-2.png'
import product3 from '../../../assets/product-3.png'
import product4 from '../../../assets/product-4.png'

const SwiperCard = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
        >
            <SwiperSlide className="">
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md relative">
                    <img style={{height: '100%', width: '100%'}} src={product1} alt="Chocolate Truffles" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Chocolate Truffles</h4>
                    <p className="text-pink font-semibold"><span className="line-through mr-2 font-normal text-t-secondary">$30.00</span> $23.00</p>
                    <p className="absolute top-5 right-5 bg-pink px-2 text-white rounded text-sm font-semibold">SALE</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md">
                    <img style={{height: '100%', width: '100%'}} src={product2} alt="Chocolate Puding" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Chocolate Puding</h4>
                    <p className="text-pink font-semibold"> $25.00</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md relative">
                    <img style={{height: '100%', width: '100%'}} src={product3} alt="Dark Chocolate Cake" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Dark Chocolate Cake</h4>
                    <p className="text-pink font-semibold"> $15.00</p>
                    <p className="absolute top-5 right-5 bg-black px-2 text-white rounded text-sm font-semibold">NEW</p>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md">
                    <img style={{height: '100%', width: '100%'}} src={product4} alt="Chocolate Cookies" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Chocolate Cookies</h4>
                    <p className="text-pink font-semibold"> $12.00</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md relative">
                    <img style={{height: '100%', width: '100%'}} src={product1} alt="Chocolate Truffles" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Chocolate Truffles</h4>
                    <p className="text-pink font-semibold"><span className="line-through mr-2 font-normal text-t-secondary">$30.00</span> $23.00</p>
                    <p className="absolute top-5 right-5 bg-pink px-2 text-white rounded text-sm font-semibold">SALE</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md">
                    <img style={{height: '100%', width: '100%'}} src={product2} alt="Chocolate Puding" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Chocolate Puding</h4>
                    <p className="text-pink font-semibold"> $25.00</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md relative">
                    <img style={{height: '100%', width: '100%'}} src={product3} alt="Dark Chocolate Cake" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Dark Chocolate Cake</h4>
                    <p className="text-pink font-semibold"> $15.00</p>
                    <p className="absolute top-5 right-5 bg-black px-2 text-white rounded text-sm font-semibold">NEW</p>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow-2xl w-[270px] h-[350px] flex flex-col justify-center items-center bg-white rounded-md">
                    <img style={{height: '100%', width: '100%'}} src={product4} alt="Chocolate Cookies" />
                    <h4 className="text-lg pt-5 font-semibold uppercase">Chocolate Cookies</h4>
                    <p className="text-pink font-semibold"> $12.00</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperCard;