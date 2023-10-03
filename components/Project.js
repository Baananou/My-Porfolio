import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { GiStrikingArrows } from "react-icons/gi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Project({ title, description, tags, imageUrl, repo }) {
	return (
		<motion.div className="group mb-3 sm:mb-8 last:mb-0">
			<section className="bg-secondary/70 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-secondary/95 transition sm:group-even:pl-8 ">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-white/70">{description}</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-primary px-3 py-2 text-[0.7rem] uppercase tracking-wider rounded-full text-white/70 flex justify-center items-center gap-2"
								key={index}>
								{tag.icon}
								{tag.title}
							</li>
						))}

						<div className="w-auto bg-gray-900 px-3 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 xl:flex justify-center items-center gap-2">
							<Link
								href={repo}
								className="flex justify-center items-center gap-2 text-white font-bold">
								{/* <SiGithub size={20} /> */}
								Consulter Code
								<BsArrowRight size={20} />
							</Link>
						</div>
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt="Project I worked on"
					quality={95}
					width={1500}
					height={1500}
					className="absolute hidden sm:block top-8 -right-40 w-[25rem] rounded-lg shadow-2xl
                                transition
                                group-hover:scale-[1.04]
                                group-hover:-translate-x-3
                                group-hover:translate-y-3
                                group-hover:-rotate-2
                                group-even:group-hover:translate-x-3
                                group-even:group-hover:translate-y-3
                                group-even:group-hover:rotate-2
                                group-even:right-[initial] group-even:-left-40"
				/>
			</section>
		</motion.div>
	);
}
