const SearchForm = ({ onHandleSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const form = new FormData(evt.target)
    const search = form.get('search')

    onHandleSubmit(search)
  }

  return (
    <form onSubmit={handleSubmit} className=' bg-white flex items-center justify-center lg:w-2/4 w-11/12 rounded-full mt-5 shadow-lg'>
      <input
        name='search'
        className='border-none outline-none w-full p-2 rounded-full font-semibold text-slate-600'
        type='text'
        placeholder='Search Pokemon, Moves, Abilities etc'
      />
      <button
        type='submit'
        className='bg-red-400 text-white md:hover:bg-white md:hover:text-red-400 transition-colors font-bold h-full p-2 rounded-tr-3xl rounded-br-3xl text-center'
        name='search-types'
      >
        Submit
      </button>

    </form>
  )
}

export default SearchForm
