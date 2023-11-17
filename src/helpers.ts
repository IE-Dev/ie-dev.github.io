import {setDefaultOptions, parseISO, format} from 'date-fns'
import { enGB } from 'date-fns/locale'
setDefaultOptions({ locale: enGB })

const locales: Record<string, Locale> = {enGB}

const locale: string = Intl.DateTimeFormat().resolvedOptions().locale;

const formatOptions: {locale: Locale} = {locale: locales[locale]}
export function dateFormatToString(time: string, format_string: string): string {
	let parsedTime = parseISO(time)
	return format(parsedTime, format_string, formatOptions);
}
