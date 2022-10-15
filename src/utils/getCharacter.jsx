export async function getCharacter(value) {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character/?name=${value}`
	)
	const result = await data.json()
	if (result === undefined || result.error) {
		new Error('Could not find character ' + value)
	}
	return result
}

