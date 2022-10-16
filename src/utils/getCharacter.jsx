export async function getCharacter(value) {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character/?name=${value}`
	)
	const response = await data.json()
	if (response === undefined || response.error) {
		throw new Error(`HTTP error! status: ${response.error}`);
	}
	return response
}

