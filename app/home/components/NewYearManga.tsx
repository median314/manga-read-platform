/* eslint-disable @next/next/no-img-element */
import { newYearManga } from '@/app/components/dataManga'
import Image from 'next/image'
import React from 'react'
import '../styles.css'
import Link from 'next/link'

const NewYearManga = () => {
  return (
    <div className='my-10 w-full'>
      <div className='text-center py-3 font-bold uppercase text-2xl'>
        2023 Popular Manga Collection
      </div>

      <div className='flex justify-center py-3'>
        {/* <div className='manga-carousel flex overflow-x-auto gap-5 py-2'> */}
        <div className='grid grid-cols-6 gap-5 '>
          {newYearManga?.map((x) => (
            <Link key={x?.id} href={"/manga/detail/13"}>
              <div key={x?.id} className='cursor-pointer p-1 rounded-md transition duration-0 hover:duration-500 hover:bg-slate-100'>
                <div className='w-52 h-80'>
                  <img
                    className='w-52 h-80 object-cover' // Set your desired width and height here
                    src={x?.cover}
                    alt={`cover-${x?.title}`}
                  />
                </div>
                <div className='text-center py-2 font-semibold text-xs'>{x?.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewYearManga