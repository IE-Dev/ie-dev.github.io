"use client"

import {dateFormatToString} from "@/helpers";
import React from "react";

export default function Year() {
	let currentYear: string = dateFormatToString(new Date().toISOString(), "yyyy")

	return <>{currentYear}</>
}
