import { useState, useEffect } from 'react'

export const useDebounce = (value, milliSeconds) => {
	const [debouncedValue, setDebouncedValue] = useState(value)
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), milliSeconds || 1000)

		return () => {
			clearTimeout(timer)
		};

	}, [value, milliSeconds])

	return debouncedValue
};