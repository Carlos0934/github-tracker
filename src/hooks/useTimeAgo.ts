
import { useMemo, useRef } from 'react'

export type TimeUnit = [number, Intl.RelativeTimeFormatUnit]

export const TIME_UNITS : TimeUnit[] = [
  [3.154e+7, 'year'],
  [2.628e+6, 'month'],
  [604800, 'week'],
  [86400, 'day'],
  [3600, 'hour'],
  [60, 'minute'],
  [1, 'second']

]
export type ValidDate = string | number | Date

const getDateDiff = (date : ValidDate, dateToCompare : ValidDate) : TimeUnit => {
  const dateValue = +new Date(date)
  const dateToCompareValue = +new Date(dateToCompare)
  if (Number.isNaN(dateToCompareValue) || Number.isNaN(dateValue)) {
    return [1, 'second']
  }

  // parse date substraction from milliseconds to seconds
  const elapsed = (dateValue - dateToCompareValue) / 1000

  for (const [secondsInUnit, unit] of TIME_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)
      return [value, unit]
    }
  }

  throw new Error('Invalid unit')
}

const useTimeAgo = (date : ValidDate) : string => {
  const now = new Date()
  const rtfref = useRef(
    new Intl.RelativeTimeFormat('en', {
      style: 'long'

    })
  )

  const [value, unit] = useMemo(
    () => getDateDiff(date, now),
    [date]
  )

  return rtfref.current.format(value, unit)
}
export default useTimeAgo
