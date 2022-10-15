import { Input } from '@chakra-ui/react'

export default function Inputfield({onChange, value}) {
	return (
		<div>
			<Input onChange={onChange} value={value} placeholder='Search your character' size='md' />
		</div>
	)
}

