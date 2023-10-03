//next
import Image from "next/image";

const Circles = () => {
	return (
		<div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
			<Image
				priority
				src={
					"https://res.cloudinary.com/duaagiskm/image/upload/v1692305493/cv%20webp/circles_mkgu5a_if8ili.webp"
				}
				width={260}
				height={200}
				alt="logo"
				className="w-full h-full"
			/>
		</div>
	);
};

export default Circles;
