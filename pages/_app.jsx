import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
// next
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

//seo
import SEO from "../seo/next-seo.config";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
			</Head>
			<DefaultSeo {...SEO} />

			<AnimatePresence mode="wait">
				<motion.div key={router.route} className="h-full">
					<Transition />
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
