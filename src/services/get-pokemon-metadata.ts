const METADATA_API_URL = 'https://pokeapi.co/api/v2/pokemon-species'

export const getMetadata = async ({ id }: { id: number }) => {
  try {
    const request = await fetch(`${METADATA_API_URL}/${id}`)

    if (!request.ok) {
      throw new Error('Request could not be processed')
    }
    const response = await request.json()

    return response
  } catch (error) {
    console.error('Error detected: ' + error)
    return []
  }
}

export const getEvolutionChain = async ({ url }: { url: string }) => {
  try {
    const request = await fetch(`${url}`)

    if (!request.ok) {
      throw new Error('Could not get the evolution chain')
    }

    const response = await request.json()
    return response
  } catch (error) {
    console.error(error)
    return []
  }
}
