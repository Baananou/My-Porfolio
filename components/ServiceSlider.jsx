import {
	RxCrop,
	RxPencil2,
	RxDesktop,
	RxReader,
	RxRocket,
	RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
	{
		icon: <RxCrop />,
		title: "L'image de marque ",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
	},
	{
		icon: <RxPencil2 />,
		title: "Conception",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
	},
	{
		icon: <RxDesktop />,
		title: "Développement",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
	},
	{
		icon: <RxReader />,
		title: "Rédaction",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
	},
	{
		icon: <RxRocket />,
		title: "RÉFÉRENCEMENT",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
	},
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
const ServiceSlider = () =>
{
	return (
		<div>
			<div className="xl:block hidden">
				<Swiper
					spaceBetween={15}
					slidesPerView={2}
					freeMode={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					modules={[FreeMode, Pagination]}
					className="h-[240px] sm:h-[340px]">
					{serviceData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
									<div className="text-4xl text-accent mb-4">{item.icon}</div>
									<div className="mb-8">
										<div className="mb-2 text-lg">{item.title}</div>
										<p className="max-w-[350px] leading-normal">
											{item.description}
										</p>
									</div>
									<div className="text-3xl">
										<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="xl:hidden block ">
				<Swiper
					spaceBetween={15}
					slidesPerView={1}
					freeMode={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					modules={[FreeMode, Pagination]}
					className="h-[240px] sm:h-[340px]">
					{serviceData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
									<div className="text-4xl text-accent mb-4">{item.icon}</div>
									<div className="mb-8">
										<div className="mb-2 text-lg">{item.title}</div>
										<p className="max-w-[350px] leading-normal">
											{item.description}
										</p>
									</div>
									<div className="text-3xl">
										<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default ServiceSlider;
