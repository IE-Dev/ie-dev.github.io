import React from "react"
import Image from "next/image";

interface Props {
	engine: string;
	search: string;
}
export default function SearchEngine({engine, search}: Props) {

  const handleGoogle = (search: string) => {
    let baseUrl = 'https://www.google.co.uk/search?q='
	  window.location.assign(baseUrl + encodeURIComponent(search))
  }

  const handleDuckDuckGo = (search: string) => {
    let baseUrl = 'https://duckduckgo.com/?q='
	  window.location.assign(baseUrl + encodeURIComponent(search))
  }

  const handleReddit = (search: string) => {
    let baseUrl = 'https://www.reddit.com/search/?q='
	  window.location.assign(baseUrl + encodeURIComponent(search))
  }

  let button = null;

	let buttonStyle = "inline-flex items-center px-3 text-sm text-gray-900 hover:text-violet-500 bg-gray-200 border rounded-none border-gray-300 last:rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
	let iconStyle = "text-gray-900 hover:text-violet-500 dark:text-gray-400"

  switch(engine) {

    case "google":
      button = <button className={buttonStyle} title="Google" onClick={() => {
        handleGoogle(search)
      }}>
	      <svg
		      xmlns="http://www.w3.org/2000/svg"
		      fill="currentColor"
		      viewBox="0 0 16 16"
		      height="2em"
		      width="2em"
	      >
		      <path d="M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 118 0a7.689 7.689 0 015.352 2.082l-2.284 2.284A4.347 4.347 0 008 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 000 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 001.599-2.431H8v-3.08h7.545z" />
	      </svg>
			</button>
      break

    case "duckduckgo":
      button = <button className={buttonStyle} title="DuckDuckGo" onClick={() => {
        handleDuckDuckGo(search)
      }}>
	      <svg
		      xmlns="http://www.w3.org/2000/svg"
		      viewBox="0 0 24 24"
		      fill="currentColor"
		      height="2em"
		      width="2em"
	      >
		      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23C5.925 23 1 18.074 1 12S5.926 1 12 1s11 4.925 11 11-4.925 11-11 11zm10.219-11c0 4.805-3.317 8.833-7.786 9.925-.27-.521-.53-1.017-.749-1.438.645.249 1.93.718 2.208.615.376-.144.282-3.149-.14-3.245-.338-.075-1.632.837-2.141 1.209l.034.156c.078.397.144.993.03 1.247-.001.004-.002.01-.004.013a.218.218 0 01-.068.088c-.284.188-1.081.284-1.503.188a.516.516 0 01-.064-.02c-.694.396-2.01 1.109-2.25.971-.329-.188-.377-2.676-.329-3.288.035-.46 1.653.286 2.442.679.174-.163.602-.272.98-.31-.57-1.389-.99-2.977-.733-4.105 0 .002.002.002.002.002.356.248 2.73 1.05 3.91 1.027 1.18-.024 3.114-.743 2.903-1.323-.212-.58-2.135.51-4.142.324-1.486-.138-1.748-.804-1.42-1.29.414-.611 1.168.116 2.411-.256 1.245-.371 2.987-1.035 3.632-1.397 1.494-.833-.625-1.177-1.125-.947-.474.22-2.123.637-2.889.82.428-1.516-.603-4.149-1.757-5.3-.376-.376-.951-.612-1.603-.736-.25-.344-.654-.671-1.225-.977a5.772 5.772 0 00-3.595-.584l-.024.004-.034.004.004.002c-.148.028-.237.08-.357.098.148.016.705.276 1.057.418-.174.068-.412.108-.596.184a.828.828 0 00-.204.056c-.173.08-.303.375-.3.515.84-.086 2.082-.026 2.991.246-.644.09-1.235.258-1.661.482-.016.008-.03.018-.048.028-.054.02-.106.042-.152.066-1.367.72-1.971 2.405-1.611 4.424.323 1.824 1.665 8.088 2.29 11.064-3.973-1.4-6.822-5.186-6.822-9.639C1.781 6.356 6.356 1.781 12 1.781S22.219 6.356 22.219 12zM9.095 9.581a.758.758 0 100 1.516.758.758 0 000-1.516zm.338.702a.196.196 0 110-.392.196.196 0 010 .392zm4.724-1.043a.65.65 0 100 1.299.65.65 0 000-1.3zm.29.601a.168.168 0 110-.336.168.168 0 010 .336zM9.313 8.146s-.571-.26-1.125.09c-.554.348-.534.704-.534.704s-.294-.656.49-.978c.786-.32 1.17.184 1.17.184zm5.236-.052s-.41-.234-.73-.23c-.654.008-.831.296-.831.296s.11-.688.945-.55a.84.84 0 01.616.484z" />
	      </svg>
			</button>
      break

	  case "reddit":
      button = <button className={buttonStyle} title="Reddit" onClick={() => {
        handleReddit(search)
      }}>
	      <svg
		      xmlns="http://www.w3.org/2000/svg"
		      viewBox="0 0 1024 1024"
		      fill="currentColor"
		      height="2em"
		      width="2em"
	      >
		      <path d="M288 568a56 56 0 10112 0 56 56 0 10-112 0zm338.7 119.7c-23.1 18.2-68.9 37.8-114.7 37.8s-91.6-19.6-114.7-37.8c-14.4-11.3-35.3-8.9-46.7 5.5s-8.9 35.3 5.5 46.7C396.3 771.6 457.5 792 512 792s115.7-20.4 155.9-52.1a33.25 33.25 0 10-41.2-52.2zM960 456c0-61.9-50.1-112-112-112-42.1 0-78.7 23.2-97.9 57.6-57.6-31.5-127.7-51.8-204.1-56.5L612.9 195l127.9 36.9c11.5 32.6 42.6 56.1 79.2 56.1 46.4 0 84-37.6 84-84s-37.6-84-84-84c-32 0-59.8 17.9-74 44.2L603.5 123a33.2 33.2 0 00-39.6 18.4l-90.8 203.9c-74.5 5.2-142.9 25.4-199.2 56.2A111.94 111.94 0 00176 344c-61.9 0-112 50.1-112 112 0 45.8 27.5 85.1 66.8 102.5-7.1 21-10.8 43-10.8 65.5 0 154.6 175.5 280 392 280s392-125.4 392-280c0-22.6-3.8-44.5-10.8-65.5C932.5 541.1 960 501.8 960 456zM820 172.5a31.5 31.5 0 110 63 31.5 31.5 0 010-63zM120 456c0-30.9 25.1-56 56-56a56 56 0 0150.6 32.1c-29.3 22.2-53.5 47.8-71.5 75.9a56.23 56.23 0 01-35.1-52zm392 381.5c-179.8 0-325.5-95.6-325.5-213.5S332.2 410.5 512 410.5 837.5 506.1 837.5 624 691.8 837.5 512 837.5zM868.8 508c-17.9-28.1-42.2-53.7-71.5-75.9 9-18.9 28.3-32.1 50.6-32.1 30.9 0 56 25.1 56 56 .1 23.5-14.5 43.7-35.1 52zM624 568a56 56 0 10112 0 56 56 0 10-112 0z" />
	      </svg>
      </button>
      break

    default:
  }

  return button
}