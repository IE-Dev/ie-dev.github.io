"use client"

import React, { useState, useEffect } from "react"
import {dateFormatToString} from "@/helpers"

export default function DateClock() {
  const [dateState, setDateState] = useState('')
  useEffect(() => {
    setInterval(() => setDateState(new Date().toISOString()), 1000)
  }, [])

	return <>{dateState ? dateFormatToString(dateState, "iiii, do 'of' LLLL, yyyy HH:mm:ss") : ''}</>
}
