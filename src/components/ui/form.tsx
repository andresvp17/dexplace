import { Button } from '../buttons/button'

type props = {
  onParam: ({ query, type }: { query: string; type?: string }) => void
}

export const Form = ({ onParam }: props) => {
  const search = new URLSearchParams()

  const isPokemonSearch = search.get('type') === 'pokemon' ? 'pokemon' : 'move'

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)
    const search = formData.get('search') as string
    const typeOfSearch = formData.get('search-type') as string

    if (!typeOfSearch.trim()) {
      onParam({ query: search.toLowerCase() })
      return
    }

    onParam({ query: search.toLowerCase(), type: typeOfSearch.toLowerCase() })
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <select defaultValue={isPokemonSearch} name="search-type">
          <option value="pokemon">Pokemon</option>
          <option value="move">Move</option>
        </select>
        <input
          className="border-2 border-gray-400 rounded-sm px-1 py-1.5 focus:outline-blue-400"
          type="text"
          name="search"
          placeholder="Search pokemon by name..."
        />
        <Button>Search</Button>
      </fieldset>
    </form>
  )
}
