import { NextResponse } from "next/server"
import courses from "./data.json"

export const GET = async () => {
	return NextResponse.json(courses)
}

export const POST = async (request) => {
	const course = await request.json()

	courses.push(course)

	return NextResponse.json(courses)
}
