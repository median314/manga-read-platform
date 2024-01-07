/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaDiscord, FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='w-full h-56 bg-slate-100 flex flex-row justify-center p-10'>
            <div className='flex flex-col gap-4 justify-center'>
                <div className=' flex flex-row gap-2 items-center'>
                    <img src='https://mangadex.org/img/brand/mangadex-logo.svg' alt="logo" />
                    <div className='font-bold text-xl text-slate-800'>Yomimashou</div>
                </div>
                <div className='justify-center flex flex-row gap-3'>
                    <FaFacebookSquare size={20} />
                    <FaInstagram size={20} />
                    <FaDiscord size={20} />
                    <FaGithub size={20} />
                </div>
                <div className='text-sm text-slate-800'>All rights reserved, 2023</div>
            </div>
        </footer>
    )
}

export default Footer