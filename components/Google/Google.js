import { useState, useEffect } from 'react'
import { useKeyPress } from '../../hooks/useKeyPress'

function Google() {

  const [term, setTerm] = useState('')

  function search() {
    const url = 'https://www.google.com/search?q='
    window.location.href = url + term
  }

  const enterPress = useKeyPress('Enter')
  useEffect(() => {
    if (term !== '') search()
  }, [enterPress])

  return <div className="bg-gray-900 bg-opacity-50  p-4 relative mb-6 rounded-xl">

    <input type="text"
      className="bg-gray-800 text-white bg-opacity-50 hover:bg-opacity-75 placeholder-gray-50 w-full
        rounded-lg outline-none pr-20 py-4 pl-4 border border-solid border-gray-500"
      style={{textIndent: '0.5rem'}}
      placeholder="Enter Search Query"
      onChange={(e) => setTerm(e.target.value.split(' ').join('+'))}
      onSubmit={search}
      />

    <button className="absolute right-0 mr-6 py-4 px-6
      text-gray-100 font-medium"
      onClick={search}>Search</button>
  </div>
}

export default Google
