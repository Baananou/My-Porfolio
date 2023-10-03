//Components
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
	return (
		<div className="bg-primary/60 h-full ">
			<ParticlesContainer />
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
				<div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
					<motion.div
						variants={fadeIn("down", 0, 2)}
						initial="hidden"
						animate="show"
						exit="hidden">
						<div className="flex flex-col items-center justify-center xl:justify-start xl:items-start overflow-y-auto">
							<h6 className="text-xl mt-20">Bonjour ! Je suis</h6>

							<div className="my-4 block xl:hidden">
								<Avatar width={150} height={150} />
							</div>

							<div className="text-center xl:text-start mx-8 xl:mx-0">
								<h1 className="my-4 text-2xl">MOHAMED YESSINE BAANANOU</h1>
								<div className="text-accent font-bold">
									Développeur Fullstack
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn("down", 0, 3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
						<p className="text-xl text-center xl:text-justify my-4">
							Etudiant en génie informatique à l&apos;École Polytechnique de
							Sousse.
						</p>
						<p className="text-xl text-justify my-4 xl:block hidden">
							Passionné par le développement web et mobile, je suis aussi
							secouriste et engagé dans des projets associatifs. Mon expérience
							en développement et en leadership en fait un atout polyvalent.
						</p>
					</motion.div>
					{/* <motion.div
						variants={fadeIn("down", 0, 4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="xl:flex gap-10 justify-center hidden xl:absolute xl:bottom-80 bottom-72">
						<a href={""} download="resume" target="_blank" rel="noreferrer">
							<button
								className="sm:w-[180px] text-accent 
                                        rounded-[30px] no-underline	w-36 text-base 
                                        font-medium h-12 border-[3px] border-accent 
                                        transition duration-100 ease-out 
                                        hover:bg-lightprime hover:text-[#15202B]
                                         hover:border-lightprime ">
								Télécharger CV
							</button>
						</a>
						<Link href="/#contacts">
							<button
								className="sm:w-[180px] bg-accent 
                                text-[#15202B] rounded-[30px] no-underline	
                                w-36 text-base font-medium h-12 border-[3px]
                                 border-accent transition duration-100 
                                 ease-out hover:bg-lightprime hover:text-[#15202B]
                                  hover:border-lightprime ">
								Contact
							</button>
						</Link>
					</motion.div> */}
				</div>
			</div>

			<div className="hidden xl:block w-[1200px] h-full absolute right-0 bottom-0">
				<motion.div
					variants={fadeIn("up", 0, 5)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 1, ease: "easeInOut" }}
					className="w-full h-full max-w-[50%] max-h-[70%] absolute lg:bottom-0 lg:right-0">
					<Avatar width={350} height={350} />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;