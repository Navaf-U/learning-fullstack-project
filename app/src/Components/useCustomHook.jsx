import  { useState } from 'react'

function useCustomHook(i=false) {
  const [value ,setValue]= useState(i)

  const toggle = () => setValue((p)=> !p )
    return ([value,toggle])
}

export default useCustomHook
