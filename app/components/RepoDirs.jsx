import Link from "next/link"

const fetchRepoContents = async (name) => {
	const response = await fetch(
		`https://api.github.com/repos/hosseinmirzapur/${name}/contents`,
		{
			next: {
				revalidate: 60,
			},
		},
	)

	const contents = await response.json()

	return contents
}

const RepoDirs = async ({ name }) => {
	const contents = await fetchRepoContents(name)

	const dirs = contents.filter((content) => content.type === "dir")

	return (
		<>
			<h3>Directories</h3>
			<ul>
				{dirs.map((dir) => {
					return (
						<li key={dir.path}>
							<Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default RepoDirs
