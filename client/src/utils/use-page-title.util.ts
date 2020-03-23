import { useEffect } from 'react'

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title

    document.title = title

    return () => {
      document.title = prevTitle
    }
  }, [title])
}
