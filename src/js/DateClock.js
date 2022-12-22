import React, { useState, useEffect } from "react"
import { createRoot } from 'react-dom/client'
import { DateTime } from 'luxon'

function dateFormatToString(date, string) {
  return date.setLocale('en-GB').toFormat(string)
}
function suffix(day) {
  switch (day)
  {
    case 1:
    case 21:
    case 31:
      return "st"
    case 2:
    case 22:
      return "nd"
    case 3:
    case 23:
      return "rd"
    default:
      return "th"
  }
}

function DateClock() {
  const [dateState, setDateState] = useState(DateTime.now())
  useEffect(() => {
    setInterval(() => setDateState(DateTime.now()), 1000)
  }, [])

  let start = dateFormatToString(dateState, "cccc, d")
  let s = suffix(parseInt(dateFormatToString(dateState, 'd')))
  let end = dateFormatToString(dateState, " 'of' LLLL, y TT")

  return start + s + end
}

const container = document.getElementById('dynamic-time')
const root = createRoot(container)
root.render(<DateClock />)
