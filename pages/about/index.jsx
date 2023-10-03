//  data

//components
import Circles from "../../components/Circles";

//react
import { useState } from "react";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//next
import Link from "next/link";
import Image from "next/image";

// counter
import CountUp from "react-countup";
import { aboutData } from "../../data/aboutdata";

const About = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			{/* <motion.div
				variants={fadeIn("right", 0, 2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="hidden xl:flex absolute bottom-0 -left-[370px]">
				<Avatar />
			</motion.div> */}
			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto scrollbar-track-current xl:scrollbar-none">
				<div className="flex-1 flex flex-col justify-center">
					<motion.div
						variants={fadeIn("right", 0, 2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-5xl mb-4">
						Transformer{" "}
						<span className="text-accent font-bold"> les rêves</span> en réalité
						numérique.
					</motion.div>
					<motion.p
						variants={fadeIn("right", 0, 2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
						Explorateur digital dévoué, je m&apos;immerge dans le monde du
						développement avec une passion inextinguible, cherchant constamment
						à transformer des idées en réalité.
					</motion.p>
					<div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
						<div className="flex flex-1 xl:gap-x-6 ">
							{/* Experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									années d&apos;expérience professionnelle
								</div>
							</div>
							{/* Experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={5} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									années d&apos;expérience associative
								</div>
							</div>
							{/* Experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={30} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									projets de travail et d&apos;étude réalisés
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full xl:max-w-[50%] h-[650px] pt-10 ">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:mt-20">
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={`${
										index === itemIndex &&
										" text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
									}  flex  justify-center items-center gap-1 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 group`}
									onClick={() => {
										setIndex(itemIndex);
									}}>
									<div className="hidden xl:block">{item.titleIcon}</div>
									{item.title}
									<div className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs text-center px-2 py-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
										{item.title}
									</div>
								</div>
							);
						})}
					</div>
					<div className="py-6 flex flex-col gap-y-4 xl:gap-y-4 mx-4 xl:overflow-y-auto xl:scrollbar-track-current">
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div key={itemIndex}>
									{aboutData[index].show === true ? (
										<div className="py-2">
											<div className="text-start ">
												{item?.company && (
													<Link passHref legacyBehavior href={item?.link}>
														<a
															target="_blank"
															rel="noopener noreferrer"
															className="text-accent font-bold">
															{item?.company}
														</a>
													</Link>
												)}
												{item?.school && (
													<Link passHref legacyBehavior href={item?.link}>
														<a
															aria-label="School"
															target="_blank"
															rel="noopener noreferrer"
															className="text-accent font-bold">
															{item?.school}
														</a>
													</Link>
												)}
												{item?.club && (
													<Link passHref legacyBehavior href={item?.link}>
														<a
															aria-label="Club"
															target="_blank"
															rel="noopener noreferrer"
															className="text-accent font-bold">
															{item?.club}
														</a>
													</Link>
												)}
											</div>
											<div className="flex gap-4">
												{item.logo && (
													<Image
														priority
														alt="logo"
														src={item.logo}
														height={120}
														width={120}
														className=" rounded-full bg-white h-16 w-16 flex justify-center items-center "
													/>
												)}

												<div className="flex flex-col max-w-max gap-x-4 items-start text-white/60 justify-center">
													<div className="font-light mb-2 md:mb-0 flex flex-col text-start">
														<div
															className={`text-white font-bold ${
																item.tasks ? "my-4" : ""
															}`}>
															{item.title}
														</div>

														{item.tasks && (
															<ul style={{ listStyleType: "disc" }}>
																{item.tasks.map((task, Index) => {
																	return (
																		<li key={Index} className="py-2">
																			{task}
																		</li>
																	);
																})}
															</ul>
														)}
														<div className="flex gap-4">
															{item.stage && (
																<div className="text-accent font-bold">
																	{item?.stage}
																</div>
															)}
															{item.certif && (
																<Link
																	passHref
																	legacyBehavior
																	href={item?.certif}>
																	<a
																		aria-label="Certificat"
																		target="_blank"
																		rel="noopener noreferrer"
																		className="text-accent font-bold">
																		Certificat
																	</a>
																</Link>
															)}
														</div>
													</div>
													<div className="flex gap-x-4">
														{item.icons?.map((icon, itemIndex) => (
															<div key={itemIndex} className="relative group">
																<div className="text-2xl text-white mb-1">
																	{icon.icon}
																</div>
																<div className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs text-center px-2 py-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
																	{icon.title}
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									) : (
										<div className="text-5xl text-accent font-bold">
											Coming Soon
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
