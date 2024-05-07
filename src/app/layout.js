import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Elevate Home Designs",
	description:
		"'Elevate Home Designs' specializes in curated collections of high-quality home decor items, meticulously selected to enhance the ambiance and style of any living space. From modern minimalist pieces to timeless classics, our inventory encompasses a diverse range of furnishings, accessories, and accents to suit every taste and aesthetic preference.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
