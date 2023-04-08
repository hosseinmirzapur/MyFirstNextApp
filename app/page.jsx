import Courses from "./components/Courses"

export const metadata = {
	title: "Home Page to my test project",
}

const HomePage = () => {
	return (
		<div>
			<h1>Welcome to my first next v13 playground...</h1>
			<Courses />
		</div>
	)
}

export default HomePage
