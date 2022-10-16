import { Input } from '@chakra-ui/react'

export default function Inputfield({onChange, value}) {
	return (
		<div>
			<Input onChange={onChange} value={value} placeholder='Type to search your character' size='md' />
		</div>
	)
}

