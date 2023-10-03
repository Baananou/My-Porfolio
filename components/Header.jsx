//next
import Link from "next/link";

//components
import Socials from "./Socials";

const Header = () => {
	return (
		<header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[100px] ">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 my-6">
					<Link href={"/"}>
						<div className={"text-accent font-semibold text-xl text-center"}>
							Mohamed Yessine Baananou
						</div>
					</Link>
					<Socials />
				</div>
			</div>
		</header>
	);
};

export default Header;
