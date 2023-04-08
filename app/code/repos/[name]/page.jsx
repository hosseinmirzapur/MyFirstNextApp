import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import LoadingPage from "@/app/loading"
import Link from "next/link"
import { Suspense } from "react"

const RepoPage = ({ params: { name } }) => {
	return (
		<div className="card">
			<Link href={"/code/repos"} className="btn btn-back">
				Back To Repositories
			</Link>
			<Suspense fallback={<LoadingPage />}>
				<Repo name={name} /> {/* This Component is Suspended for 2 Seconds */}
			</Suspense>
			<Suspense fallback={"Loading Repository Directories..."}>
				<RepoDirs name={name} />
				{/* This Component is Suspended for 3 Seconds */}
			</Suspense>
		</div>
	)
}

export default RepoPage
