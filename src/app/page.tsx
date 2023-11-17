import Welcome from "@/components/Welcome";
import DateClock from "@/components/DateClock";
import Search from "@/components/Search";
import Images from "@/components/Images";
import Year from "@/components/Year";
import { promises as fs } from 'fs';

import React from "react";
import {Data, Section} from "@/types";

async function getData() {
	const file = await fs.readFile(process.cwd() + '/data.json', 'utf8')
	return JSON.parse(file)
}

export default async function Home() {
	const {title, images, sections, network}: Data = await getData()

	const chunkSize = Math.ceil(sections.length / 3);
	let columns = [];

	for (let i = 0; i < sections.length; i += chunkSize) {
		const chunk: Section[] = sections.slice(i, i + chunkSize);
		columns.push(chunk);
	}

  return (
    <main className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

	    <div className="md:relative max-h-screen overflow-y-scroll no-scrollbar overflow-x-hidden lg:overflow-hidden">
		    <div className="md:absolute md:inset-0 p-4 md:p-8">
			    <header>
				    <h1 className="hidden">{title}</h1>
				    <Welcome />
			    </header>
			    <Search engines={['google','duckduckgo','reddit']} />

			    {columns && (
				    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
				    {columns?.map((column, column_index) => {
							return (
								<div key={'col'+column_index} className="grid gap-4">
									{column?.map(({title, links}, section_index) => {
										return (
											<div key={'sec'+section_index} className="mx-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
												<h3 className="text-xl">{title}</h3>
												{links && (
													<ul>
														{links?.map(({name, url}, link_index) => {
															return (
																<li key={'link'+link_index} className="bg-violet-500 rounded px-4 py-2 mb-2 last:mb-0 md:rounded-none md:bg-opacity-0 md:p-0 md:mb-0"><a href={url} title={name} className="text-violet-300 underline hover:text-violet-500">{name}</a></li>
															)
														})}
													</ul>
												)}
											</div>
										)
									})}
								</div>
							)
				    })}
				    </div>
			    )}

			    <footer className="lg:absolute lg:bottom-8 w-full lg:pr-16 pb-8 lg:pb-0">
				    <>
					    {network.length > 0 && (
								<div className="lg:flex lg:text-sm mb-2">
									<p className="p-2 lg:p-0 lg:mr-2 text-center lg:text-left">Network Quick Links:</p>
									{network?.map(({name, url}, link_index) => {
										return (
											<a key={'net'+link_index} href={url} title={name} className="text-violet-300 underline hover:text-violet-500 text-center lg:text-left block lg:inline p-2 lg:p-0 lg:mr-2">{name}</a>
										)
									})}
								</div>
					    )}
						</>
				    <div className="text-center lg:text-left lg:flex justify-between">
					    <DateClock />
					    <div id="copyright"><a href="https://github.com/IE-Dev/ie-dev.github.io/fork" className="text-violet-300 underline hover:text-violet-500">Fork on GitHub</a> | &copy; Ian Everall 2022 - <Year /></div>
				    </div>
				  </footer>
		    </div>
	    </div>

	    <div className="relative invisible lg:visible">
		    <div className="z-50 absolute left-0 right-0 top-0 h-full w-full bg-violet-500 opacity-70"></div>
		    <Images images={images} />
	    </div>

    </main>
  )
}
