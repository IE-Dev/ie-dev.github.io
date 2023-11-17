"use client"

import React, { useState, useEffect } from "react"
import {dateFormatToString} from "@/helpers"

function timeString(hour: number) {
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

export default function Welcome() {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000)
  }, [])

  let hour = parseInt(dateFormatToString(dateState.toISOString(), "H"))

  return <h2 className="text-7xl mb-8">{timeString(hour)}</h2>
}
