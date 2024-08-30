import { useEffect, useState } from 'react'

export const useDebounceCallback = (func, delay) => {
	const [args, setArgs] = useState(null)
	useEffect(() => {
		if (args === null) return
		const timeout = setTimeout(() => func(...args), delay)
		return () => clearTimeout(timeout)
	}, [args]) // DO NOT add func and delay to deps
	return (...args) => setArgs(args)
}