import { useState } from 'react'
import Spinner from '../components/custom/Spinner'
const useLoading = () => {
  const [isLoading, setLoading] = useState(false)

  return { isLoading, setLoading, Spinner }
}

export default useLoading
