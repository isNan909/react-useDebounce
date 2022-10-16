import { useState, useEffect } from 'react'
import { ChakraProvider, Heading, Text, Box } from '@chakra-ui/react'
import Inputfield from './components/input-field'
import { useDebounce } from './hooks/useDebounce'
import { getCharacter } from './utils/getCharacter'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [listing, setListing] = useState('')
  const [loading, setLoading] = useState(false)

  const searchQuery = useDebounce(query, 2000)

  useEffect(() => {
    setListing('')
    const controller = new AbortController();
    if (searchQuery || query.trim().length === 0) searchCharacter();
    async function searchCharacter() {
      setListing('')
      setLoading(true)
      const data = await getCharacter(searchQuery, controller.signal)
      setListing(data.results)
      setLoading(false)
    }
    return controller.abort();
  }, [searchQuery])

  return (
    <div className="App">
      <ChakraProvider>
        <Heading mb={4}>Search Ricky and Morty Character</Heading>
        <Text fontSize='md' textAlign="left" mb={10}>
          With a debouce hook implemented
        </Text>
        <Inputfield mb={10} onChange={(event) => setQuery(event.target.value)} value={query} />
        {loading && <Text mb={10} mt={10} textAlign="left">Loading...</Text>}
        {listing && <Box mt={10} display={'block'}>{listing.map(character => (
          <Box key={character.id} mb={10}>
            <img src={character.image} alt={character.name} />
            {character.name}
          </Box>
        ))}</Box>}
      </ChakraProvider>
    </div>
  )
}

export default App
