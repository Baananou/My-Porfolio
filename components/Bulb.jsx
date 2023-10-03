import Image from "next/image";

const Bulb = () => {
	return (
		<div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
			<Image
				src={
					"https://res.cloudinary.com/duaagiskm/image/upload/v1692305493/cv%20webp/bulb_gnfpm6_zrit9z.webp"
				}
				alt="bulb"
				width={260}
				height={200}
				className="w-full h-full"
			/>
		</div>
	);
};

export default Bulb;
