import Link from "next/link"

const fetchCourses = async () => {
	const response = await fetch("http://0.0.0.0:3000/api/courses")
	const courses = await response.json()
	return courses
}

const Courses = async () => {
	const courses = await fetchCourses()

	return (
		<div className="courses">
			{courses.map((course) => {
				return (
					<div key={course.id} className="card">
						<h2>{course.title}</h2>
						<small>Level: {course.level}</small>
						<p>{course.description}</p>
						<Link href={course.link || "#"} target="_blank" className="btn">
							Go To Course
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Courses
