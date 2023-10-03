import React from "react";
import Project from "./Project";
import { TbBrandFirebase, TbBrandReactNative } from "react-icons/tb";
import {
	SiBootstrap,
	SiDart,
	SiDotnet,
	SiExpo,
	SiFirebase,
	SiFlask,
	SiFlutter,
	SiGithub,
	SiHtml5,
	SiNetlify,
	SiNextdotjs,
	SiPython,
	SiTailwindcss,
} from "react-icons/si";

export default function Projects() {
	const projectsData = [
		{
			title: "G. des Tâches",
			description:
				"Conception et développement d'une application mobile pour gérer les tâches.",
			tags: [
				{
					icon: <TbBrandReactNative key={1} size={20} />,
					title: "React Native",
				},
				{ icon: <TbBrandFirebase key={2} size={20} />, title: "Firebase" },
				{ icon: <SiExpo key={3} size={20} />, title: "Expo" },
			],
			imageUrl:
				"https://res.cloudinary.com/duaagiskm/image/upload/v1692305497/cv%20webp/thumb1_tjrbba_odwa6o.webp",
			repo: "https://github.com/Baananou/React-Native-TODO-APP-EXPO-Firebase-",
		},
		{
			title: "Suivie Météo",
			description:
				"Développement d'une application mobile pour consulter la météo en utilisant open Weather Api.",
			tags: [
				{ icon: <SiFlutter key={1} size={20} />, title: "Flutter" },
				{ icon: <SiDart key={2} size={20} />, title: "Dart" },
			],
			imageUrl:
				"https://res.cloudinary.com/duaagiskm/image/upload/v1692305498/cv%20webp/thumb2_wsavkq_p5osrg.webp",
			repo: "https://github.com/Baananou/flutter_weatherapp",
		},
		{
			title: "Interface de contrôle",
			description:
				'Conception et développement d\'interface "Contrôle avancé de teinture du bois"',
			tags: [
				{ icon: <SiNextdotjs key={1} size={20} />, title: "Next.js" },
				{ icon: <SiTailwindcss key={1} size={20} />, title: "Tailwind CSS" },
				{ icon: <SiFirebase key={2} size={20} />, title: "Firebase" },
				{
					icon: (
						<>
							<SiFlask key={3} size={20} /> <SiPython key={4} size={20} />
						</>
					),
					title: "Flask(PY)",
				},
			],
			imageUrl:
				"https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/thumb3_vuzu9x_iyu81y.webp",
			repo: "https://github.com/Baananou/Processus-industriel-de-contr-le-et-de-commande-avanc-de-teinture-du-bois-FRONT",
		},
		{
			title: "Site Porfolio",
			description:
				"Conception et développement d'un site Porfolio, montrant mon expertise en développement web.",
			tags: [
				{ icon: <SiNextdotjs key={1} size={20} />, title: "Next.js" },
				{ icon: <SiTailwindcss key={2} size={20} />, title: "Tailwind CSS" },
				{ icon: <SiGithub key={3} size={20} />, title: "GitHub" },
				{ icon: <SiNetlify key={4} size={20} />, title: "Netlify" },
			],
			imageUrl:
				"https://res.cloudinary.com/duaagiskm/image/upload/v1692305502/cv%20webp/thumb4_zlbuym_lxjzcy.webp",
			repo: "https://github.com/Baananou/cv",
		},
	];
	return (
		<section className="container mx-auto h-full scrollbar-track-current overflow-y-auto ">
			<div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-4">
				{projectsData.map((project, index) => (
					<div key={index} className="flex justify-center">
						<Project {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
