import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthenFailed() {
    return (
        <div>
            {/* Nav */}
            <div className='fixed z-50 right-0 left-[241px] navbar-menu bg-[#101010] px-8 flex justify-between'>
                <div className='nav-direction-page flex gap-4'>
                    <button className='px-2 py-1 opacity-75 hover:opacity-100 transition-all duration-200'>
                        <i className="ti-angle-left text-[#fff] font-bold" />
                    </button>
                    <button className='px-2 py-1 opacity-75 hover:opacity-100 transition-all duration-200'>
                        <i className="ti-angle-right text-[#fff] font-bold" />
                    </button>
                </div>
                <div className='nav-list flex items-center gap-4'>
                    <ul className='text-[#fff] font-CircularBook'>
                        <li className='inline-block'>
                            <a href='' className='inline-block tracking-[0.105em] opacity-60 py-4 px-2 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Premium</a>
                        </li>
                        <li className='inline-block'>
                            <a href='' className='inline-block tracking-[0.105em] opacity-60 py-4 px-2 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Hỗ trợ</a>
                        </li>
                        <li className='inline-block'>
                            <a href='' className='inline-block tracking-[0.105em] opacity-60 py-4 pl-2 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Tải xuống</a>
                        </li>
                    </ul>
                    <div className='m-4 bg-[#fff] h-6 w-[1px]'></div>
                    <ul className='text-[#fff] font-CircularBook'>
                        <li className='inline-block'>
                            <Link to={"/sign-up"} className='tracking-widest inline-block opacity-60 py-4 pl-2 pr-8 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Đăng kí</Link>
                        </li>
                        <li className='inline-block'>
                            <Link to={'/login'} className='font-CircularMedium tracking-normal bg-[#fff] rounded-[500px] text-[#000] inline-block py-2 px-8 leading-8 hover:scale-105 transition-all duration-200'>Đăng nhập</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Nav */}
        </div>
    )
}
