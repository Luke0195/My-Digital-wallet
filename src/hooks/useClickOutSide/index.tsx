import { useEffect, useRef } from 'react'

const clickOutSide = (handler: any) => {
  // vai criar uma referência para o valor
  const ref = useRef(null) as any

  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])

  return ref
}

export default clickOutSide
