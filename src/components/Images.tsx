"use client"

import Image from "next/image";
import React, {useEffect, useState} from "react";
import {ImageObj} from "@/types";

interface Props {
	images: ImageObj[]
}

export default function Images({images}: Props) {

	const [currentImage, setCurrentImage] = useState(0)

	useEffect(() => {
		const next = (currentImage + 1) % images.length;
		const id = setTimeout(() => setCurrentImage(next), 10000);
		return () => clearTimeout(id);
	}, [currentImage])

	const next = (currentImage + 1) % images.length;

	return (
		<>
			{images?.map(({file, alt}, img_index) => {

				let class_var = "z-0 ease-in-out w-full opacity-0";
				if ( img_index === currentImage ) {
					class_var = "z-10 ease-in-out w-full opacity-100"
				} else if(img_index === next) {
					class_var = "z-20 ease-in-out w-full opacity-0"
				}

				return (
					<Image
						key={img_index}
						src={"/" + file}
						alt={alt}
						className={" absolute transition transition-opacity duration-1000 " + class_var}
						width={0}
						height={0}
						sizes="100vw"
						priority
					/>
				)
			})}
		</>
	)
}
