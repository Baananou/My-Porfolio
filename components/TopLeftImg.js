import Image from "next/image";

const TopLeftImg = () => {
	return (
		<div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
			<Image
				priority
				src={
					"https://res.cloudinary.com/duaagiskm/image/upload/v1692305497/cv%20webp/top-left-img_fy47x2_bhwgdp.webp"
				}
				width={400}
				height={400}
				alt=""
			/>
		</div>
	);
};

export default TopLeftImg;
