import {
	SiDart,
	SiExpo,
	SiFirebase,
	SiFlask,
	SiFlutter,
	SiGithub,
	SiNetlify,
	SiNextdotjs,
	SiPython,
	SiTailwindcss,
} from "react-icons/si";
import { TbBrandFirebase, TbBrandReactNative } from "react-icons/tb";

// data
export const workSlides = {
	slides: [
		{
			images: [
				{
					title: "React NAtive ToDo App",
					path: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305497/cv%20webp/thumb1_tjrbba_odwa6o.webp",
					icons: [
						<TbBrandReactNative key={1} size={20} />,
						<TbBrandFirebase key={1} size={20} />,
						<SiExpo key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/React-Native-TODO-APP-EXPO-Firebase-",
				},
				{
					title: "flutter_weatherapp",
					path: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305498/cv%20webp/thumb2_wsavkq_p5osrg.webp",
					icons: [
						<SiFlutter key={1} size={20} />,
						<SiDart key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/flutter_weatherapp",
				},
				{
					title: "title",
					path: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/thumb3_vuzu9x_iyu81y.webp",
					icons: [
						<SiNextdotjs key={1} size={20} />,
						<SiTailwindcss key={1} size={20} />,
						<SiFirebase key={1} size={20} />,
						<SiFlask key={1} size={20} />,
						<SiPython key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/cv",
				},

				{
					title: "Personal website",
					path: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305502/cv%20webp/thumb4_zlbuym_lxjzcy.webp",
					icons: [
						<SiNextdotjs key={1} size={20} />,
						<SiTailwindcss key={1} size={20} />,
						<SiGithub key={1} size={20} />,
						<SiNetlify key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/Personal-Website",
				},
			],
		},
		// {
		// 	images: [
		// 		{
		// 			title: "title",
		// 			path: "/thumb4.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 		{
		// 			title: "title",
		// 			path: "/thumb1.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 		{
		// 			title: "title",
		// 			path: "/thumb1.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 		{
		// 			title: "title",
		// 			path: "/thumb1.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 	],
		// },
	],
};
