import React from 'react'
import { useGetExample } from '@hooks/Articles/useGetUserExample'
import Loader from '@components/General/Loader';
export default function Example() {
    const { data, isLoading } = useGetExample();

    console.log(data && data?.message)

    isLoading && <Loader />

  return (
    <div className='bg-red-500 text-center justify-center  items-center flex flex-1 h-full'>
      <h2 className='font-bold text-6xl'>Info del backend : {data?.message}</h2>
    </div>
  )
}
