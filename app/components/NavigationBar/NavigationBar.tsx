/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NavigationBar = () => {
    return (
        <nav className='flex justify-evenly gap-10 border py-3'>
            <div className='flex gap-5 items-center'>
                <a href={'/'}>
                    <img src='https://mangadex.org/img/brand/mangadex-logo.svg' alt='logo' />
                </a>
                <ul className='flex gap-5 justify-between'>
                    <li>Originals</li>
                    <li>
                        <a href='/manga/trending'>Trending</a>
                    </li>
                    <li>
                        <a href='/manga/discover'>Discover</a>
                    </li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <div className='px-1 py-1'>Login</div>
                <div className='bg-red-500 px-3 py-1 text-white rounded-full cursor-pointer'>Sign Up</div>
            </div>
        </nav>
    )
}

export default NavigationBar