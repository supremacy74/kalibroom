import { MutableRefObject, useEffect } from 'react'

export const useOnClickOutside = (
  ref: MutableRefObject<any>,
  handler: CallableFunction,
  containsNotClose: boolean = true
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || (containsNotClose && ref.current.contains(event.target))) {
        return
      }
      handler(event)
    }
    window.addEventListener('mouseup', listener)
    window.addEventListener('touchstart', listener)
    return () => {
      window.removeEventListener('mouseup', listener)
      window.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}