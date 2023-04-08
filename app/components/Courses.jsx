import Link from "next/link"
import courses from "../api/courses/data.json"

const Courses = async (data) => {
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
