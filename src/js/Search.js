import React, { useState, useEffect } from "react"
import { useDebouncedCallback } from 'use-debounce'
import axios from 'axios'
import { createRoot } from 'react-dom/client'
import SearchEngine from './SearchEngine'

function Search(props) {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    debounced(search)
  }, [search]);

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setSelected(0)
      axios.get(AUTOCOMPELETE_URL + `?query=${value}&lang=uk-en`)
        .then(function (res) {
          setResults(res.data)
        })
        .catch(function(res) {
          if(res instanceof Error) {
            setResults([])
          } else {
            setResults(res.data)
          }
        });
    },
    // delay in ms
    200
  );

  let handleSelect = (event) => {
    if(event.key === 'ArrowDown'){
      setSelected( selected + 1 )
    } else if (event.key === 'ArrowUp') {
      if( selected > 0 ) {
        setSelected(selected - 1)
      }
    } else if (event.key === 'Enter') {
      setSearch(results[selected].phrase)
      setResults([])
    }
  }

  let result_picker = results.map((data, idx) => {
    return <p key={idx} className={idx === selected ? 'selected': ''} onClick={() => {
      setSearch(data.phrase)
      setResults([])
    }}>{data.phrase}</p>
  })

  let buttons = props.engines.split(',').map((data, idx) => {
    return <SearchEngine key={idx} engine={data} search={search} />
  })

  return (<React.Fragment>
      <label htmlFor="search">Search</label>
      <input id="search" type='text' name="search" defaultValue={search} value={search} onKeyDown={handleSelect} onChange={(e) => {
        setSearch(e.target.value)
        debounced(e.target.value)
      }} placeholder="Search..." />
      {buttons}
      {results && results.length !== 0 ? (
        <div className="autocomplete">
          {result_picker}
        </div>
      ) : null }
    </React.Fragment>
  )
}

const container = document.getElementById('dynamic-search')
const root = createRoot(container)
let engines = container.getAttribute('data-engines')
root.render(<Search engines={engines}/>)
