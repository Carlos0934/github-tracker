import { useEffect, useRef, useState } from 'react'

const useNumberFormat = (value : number) : string => {
  const formatterRef = useRef(new Intl.NumberFormat('es'))
  const [format, setFormat] = useState('')
  useEffect(() => {
    setFormat(formatterRef.current.format(value))
  }, [value])
  return format
}

export default useNumberFormat
