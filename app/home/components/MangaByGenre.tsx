/* eslint-disable @next/next/no-img-element */
import { newYearManga } from '@/app/components/dataManga'
import Image from 'next/image'
import React from 'react'
import '../styles.css'
import Link from 'next/link'

const MangaByGenre = () => {
    return (
        <div className='my-10 w-full'>
            <div className='flex justify-center rounded-xl w-full'>
                <Image
                    width={1200}
                    height={400}
                    alt='banner'
                    src={"https://pbs.twimg.com/media/Eh2XiOXWkAA0Mqb.jpg"}
                />
                {/* </div> */}
            </div>
            <div className='text-center my-10 font-bold uppercase text-2xl'>
                Manga By Genre
            </div>

            <div className=''>
                <div className='uppercase font-semibold border-b-2 my-5'>Action Manga</div>
                <div className='manga-carousel flex overflow-x-auto gap-5 py-2'>
                    {newYearManga?.map((x) => (
                        <Link key={x?.id} href={"/manga/detail/12"}>
                            <div key={x?.id} className='cursor-pointer p-1 rounded-md transition duration-0 hover:duration-500 hover:bg-slate-100'>
                                <div className='w-52 h-80'>
                                    <img
                                        className=' w-52 h-80 object-cover' // Set your desired width and height here
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

            <div className='my-16'>
                <div className='uppercase font-semibold border-b-2 my-5'>Adventure Manga</div>
                <div className='manga-carousel flex overflow-x-auto gap-5 py-2'>
                    {newYearManga?.map((x) => (
                        <Link key={x?.id} href={"/manga/detail/12"}>
                            <div key={x?.id} className='cursor-pointer p-1 rounded-md transition duration-0 hover:duration-500 hover:bg-slate-100'>
                                <div className='w-52 h-80'>
                                    <img
                                        className=' w-52 h-80 object-cover' // Set your desired width and height here
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
            <div className=''>
                <div className='uppercase font-semibold border-b-2 my-5'>Comedy Manga</div>
                <div className='manga-carousel flex overflow-x-auto gap-5 py-2'>
                    {newYearManga?.map((x) => (
                        <Link key={x?.id} href={"/manga/detail/12"}>
                            <div key={x?.id} className='cursor-pointer p-1 rounded-md transition duration-0 hover:duration-500 hover:bg-slate-100'>
                                <div className='w-52 h-80'>
                                    <img
                                        className=' w-52 h-80 object-cover' // Set your desired width and height here
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

export default MangaByGenre