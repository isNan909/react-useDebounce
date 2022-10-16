export async function getCharacter(value, signal) {
	const response = await (await fetch(
		`https://rickandmortyapi.com/api/character/?name=${value}`, signal
	)).json()
	if (response === undefined || response.error || response.status === 404) {
		throw new Error(`HTTP error! status: ${response.error}`)
	}
	return response
}

