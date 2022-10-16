export async function getCharacter(value, signal) {
	try {
		const response = await (await fetch(
			`https://rickandmortyapi.com/api/character/?name=${value}`, signal
		)).json()
		return response
	} catch (e) {
		throw new Error(`Error fetching the data: ${e}`)
	}
}

