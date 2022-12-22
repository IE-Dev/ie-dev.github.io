import React, { useState, useEffect } from "react"
import { createRoot } from 'react-dom/client'
import { DateTime } from 'luxon'

function dateFormatToString(date, string) {
  return date.setLocale('en-GB').toFormat(string)
}

function timeString(hour) {
  if( hour >= 0 && hour < 6 ) {
    return 'Night'
  } else if (hour >= 6 && hour < 12) {
    return 'Morning'
  } else if (hour >= 12 && hour < 18) {
    return 'Afternoon'
  } else {
    return 'Evening'
  }
}

function Welcome() {
  const [dateState, setDateState] = useState(DateTime.now())
  useEffect(() => {
    setInterval(() => setDateState(DateTime.now()), 60000)
  }, [])

  let hour = parseInt(dateFormatToString(dateState, "H"))

  return <h1>{timeString(hour)}</h1>
}

const container = document.getElementById('dynamic-welcome')
const root = createRoot(container)
root.render(<Welcome />)
