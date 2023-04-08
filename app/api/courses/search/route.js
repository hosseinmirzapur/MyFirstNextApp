import { NextResponse } from "next/server"
import courses from "../data.json"

const searchData = async (query) => {
	const data = courses.filter((course) =>
		course.title.toLowerCase().includes(query.toLowerCase()),
	)

	return await data
}

export const GET = async (request) => {
	const { searchParams } = new URL(request.url)
	const query = searchParams.get("query")
	const data = await searchData(query)

	return NextResponse.json(data)
}
