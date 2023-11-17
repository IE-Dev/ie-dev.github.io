"use client"

import React, { useState, useEffect } from "react"
import { useDebouncedCallback } from 'use-debounce'
import axios from 'axios'

import SearchEngine from './SearchEngine'

interface Props {
	engines: string[];
}

interface SearchResults {
	phrase: string;
}

export default function Search({engines}: Props) {
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
      axios.get(process.env.NEXT_PUBLIC_AUTOCOMPELETE_URL + `?query=${value}&lang=uk-en`)
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

  let handleSelect = (event: { key: string }) => {
    if(event.key === 'ArrowDown'){
      setSelected( selected + 1 )
    } else if (event.key === 'ArrowUp') {
      if( selected > 0 ) {
        setSelected(selected - 1)
      }
    } else if (event.key === 'Enter') {
	    let res: SearchResults = results[selected]
      setSearch(res.phrase)
      setResults([])
    } else if (event.key === 'Escape') {
	    setResults([])
    }
  }

  let result_picker = results.map((data: SearchResults, idx) => {
		let active = idx === selected ? ' bg-purple-500 ': '';
    return <p key={idx} className={active + " rounded px-2 py-1 mb-2 hover:bg-purple-500"} onClick={() => {
      setSearch(data.phrase)
      setResults([])
    }}>{data.phrase}</p>
  })

  let buttons = engines.map((data, idx) => {
    return <SearchEngine
	    key={idx}
	    engine={data}
	    search={search}
    />
  })

  return (<div className="relative">
      <label htmlFor="search" className="hidden">Search</label>
	  <div className="flex">
		  <div className="relative w-full">
			  <input id="search"
			         className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:outline-none focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
			         type='text' name="search" value={search} onKeyDown={handleSelect} onChange={(e) => {
				  setSearch(e.target.value)
				  debounced(e.target.value)
			  }} placeholder="Search..." />
			  {results.length > 0 && (
				  <div className="absolute inset-y-0 right-0 mr-2 flex items-center text-gray-400">
					  <p className="text-xs py-0 pl-2 pr-0">ESC to cancel search</p>
				  </div>
			  )}
		  </div>
		  {buttons}
		</div>
      {results && results.length !== 0 ? (
        <div className="absolute mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:outline-none focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
          {result_picker}
        </div>
      ) : null }
    </div>
  )
}
