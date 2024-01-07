import Image from 'next/image'
import React from 'react'
import { FaRegEye, FaRegHeart } from 'react-icons/fa'

interface MangaCardProps {
    id: number,
    title: string,
    views: number,
    likes: number,
    cover: string,
    tags: string[],
}

const NewTrendingCard: React.FC<MangaCardProps> = ({ id, title, views, likes, tags, cover }) => {
    return (
        <div className=' flex flex-row gap-4 border rounded-md p-2'>
            <Image
                width={90}
                height={60}
                alt='manga1'
                src={cover}
            />
            <div>
                <div className=' w-48 py-2 font-semibold text-sm'>{title}</div>
                <div className='flex gap-4'>
                    <div className='flex gap-1 items-center'>
                        <FaRegEye size={15} />
                        <div className='text-xs'>{views}</div>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaRegHeart size={15} />
                        <div className='text-xs'>{likes}</div>
                    </div>
                </div>
                <div>
                    {tags?.length > 0 && (
                        <div className='flex flex-row flex-wrap gap-1 uppercase w-52 py-2'>
                            {tags?.map((y, i) => (
                                <div className='w-fit  border rounded-sm px-1 text-xs' key={i}>
                                    {y}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewTrendingCard