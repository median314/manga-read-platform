import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Image from 'next/image'
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { newManga, weeklyManga } from '../components/dataManga';
import NewYearManga from './components/NewYearManga';
import MangaByGenre from './components/MangaByGenre';
import WeeklyCard from '../components/Card/WeeklyCard';
import Link from 'next/link';
import NewTrendingCard from '../components/Card/NewTrendingCard';

interface Manga {
    id: number,
    title: string,
    cover: string,
    views: number,
    likes: number,
    tags: string[]
}

const HomePage = () => {
    return (
        <div className='py-3 px-10'>
            <div className='flex rounded-xl overflow-hidden justify-center'>
                <Image
                    width={900}
                    height={350}
                    alt='banner'
                    src={"https://t4.ftcdn.net/jpg/04/46/93/93/360_F_446939375_83iP0UYTg5F9vHl6icZwgrEBHXeXMVaU.jpg"}
                />
            </div>

            <div className='flex py-10 px-20 justify-evenly'>
                <div>
                    <h1 className='font-semibold border-b-2 p-2'>Weekly Spotlight</h1>
                    <div className='grid grid-cols-3 gap-5 py-5'>
                        {weeklyManga?.map((x) => (
                            <Link key={x?.id} href={"/manga/detail/12"}>
                                <WeeklyCard
                                    id={x?.id}
                                    title={x?.title}
                                    cover={x?.cover}
                                    likes={x?.likes}
                                    views={x?.views}
                                    tags={x?.tags}
                                />
                            </Link>
                        ))}

                    </div>
                </div>
                <div className=''>
                    <h1 className='font-semibold border-b-2 p-2'>New & Trending</h1>
                    <div className='flex flex-col gap-5 py-5'>
                        {newManga?.map((x, i) => (
                            <Link key={x?.id} href={"/manga/detail/12"}>
                                <div key={x?.id} className='flex flex-row gap-4 items-center'>
                                    <div className='font-bold text-md'>{i + 1}</div>
                                    <NewTrendingCard
                                        id={x?.id}
                                        title={x?.title}
                                        cover={x?.cover}
                                        likes={x?.likes}
                                        views={x?.views}
                                        tags={x?.tags}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='rounded-xl overflow-hidden'>
                <Image
                    width={2000}
                    height={900}
                    alt='banner'
                    src={"https://anitrendz.net/news/wp-content/uploads/2023/04/You-Should-Read-This-Manga-Banner.png"}
                />
                {/* </div> */}
            </div>

            <NewYearManga />
            <MangaByGenre />

        </div>
    )
}

export default HomePage