export const getFromLocalStorage = (key: string) => {
  const data = window.localStorage.getItem(key)
  return data == null ? null : JSON.parse(data)
}

export const setFromLocalStorage = (key: string, data: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(data))
}
