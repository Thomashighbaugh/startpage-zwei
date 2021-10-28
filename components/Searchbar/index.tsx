import { useState, useEffect } from 'react'
import useKeyPress from "../../hooks/useKeyPress.hook";


function Searchbar() {

  const [term, setTerm] = useState('')

  function search() {
    const url = 'https://www.Searchbar.com/search?q='
    window.location.href = url + term
  }

  const enterPress = useKeyPress('Enter')
  useEffect(() => {
    if (term !== '') search()
  }, [enterPress])

  return <div className=" bg-gray-900 border border-solid border-blue-500 bg-opacity-50 flex flex-row align-middle justify-center h-full w-full content-center p-12 relative  rounded-xl">

    <input type="text"
      className="bg-gray-700 bg-opacity-50 hover:bg-opacity-75 align-middle placeholder-gray-200 w-full
        rounded-lg outline-none  border border-solid border-gray-200 max-h-12 my-6 border-4 border-solid border-blue-500 focus:border-blue-500"
      style={{textIndent: '0.5rem'}}
      placeholder="Enter Search Query"
      onChange={(e) => setTerm(e.target.value.split(' ').join('+'))}
      onSubmit={search}
      />

    <button className=" my-6 mx-3 p-1 border-2 border-solid border-pink-300 text-center align-middle rounded-lg
      text-pink-300 font-medium"
      onClick={search}>Search</button>
  </div>
}

export default Searchbar
