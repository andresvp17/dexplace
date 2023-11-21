import { useState, useEffect } from 'react'

export const useTitle = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    document.title = `Dexplace | ${title}`
  }, [title])

  const updateTitle = (newTitle) => {
    setTitle(newTitle)
  }

  return { updateTitle }
}
