//fonts
import { Sora } from "next/font/google";

//font Settings
const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//Components
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import Header from "../components/Header";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<div
			className={`page bg-site text-white bg-cover bg-no-repea ${sora.variable} font-sora relative`}>
			<NextSeo
				titleTemplate={`%s | Mohamed Yessine Baananou`}
				title={"Baananou"}
				description={"Baananou"}
				canonical={"https://baananou.netlify.app/" + `${router.pathname}`}
				openGraph={{
					title: "Portfolio",
					description: "Portfolio de Mohamed Yessine Baananou",
					images: [
						{
							url: "https://res.cloudinary.com/duaagiskm/image/upload/v1692305501/cv%20webp/me4_apbzty_mfexrs.webp",
							width: 1200,
							height: 630,
							alt: "Image Alt Text",
						},
					],
					url: "https://baananou.netlify.app/",
					type: "website",
				}}
			/>
			<TopLeftImg />
			<Nav />
			<Header />
			{children}
		</div>
	);
};

export default Layout;
