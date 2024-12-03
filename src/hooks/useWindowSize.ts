import { useEffect, useState } from "react";
import { throttle } from "lodash"

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)
  function handleResize() {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", throttle(handleResize, 300))
    return () => {
      window.removeEventListener("resize", throttle(handleResize, 300))
    }
  }, [])
  return windowSize
}