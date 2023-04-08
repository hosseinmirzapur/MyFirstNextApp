import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
})

export const metadata = {
	title: "Traversy Media",
	description: "Web development tutorials and courses",
	keywords:
		"web development, web design, javascript, react, node, next, html, css, bootstrap, sass, webpack",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header key={"header"} />
				<main className="container">{children}</main>
			</body>
		</html>
	)
}
