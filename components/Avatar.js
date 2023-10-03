//next
import Image from "next/image";
const Avatar = ({ width, height }) => {
	return (
		<div className="max-w-none">
			<Image
				priority
				src={
					"https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/me4_apbzty_mfexrs.webp"
				}
				alt=""
				width={width}
				height={height}
				className={`border-2 rounded-full w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-black object-cover`}
			/>
		</div>
	);
};

export default Avatar;
