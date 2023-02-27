import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function HomePage() {
    return (
        <div>
            {/* Home Page - Log out*/}
            <div className='home-page mb-[66px] flex'>
                {/* Direction Menu */}
                <DirectionMenu />
                {/* Direction Menu */}
                {/* Content */}
                <div className='content'>
                    {/* Nav */}
                    {/* <div className='fixed z-50 right-0 left-[241px] navbar-menu bg-[#101010] px-8 flex justify-between'>
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
                                    <a href='' className='tracking-widest inline-block opacity-60 py-4 pl-2 pr-8 leading-8 hover:scale-105 hover:opacity-100 transition-all duration-200'>Đăng kí</a>
                                </li>
                                <li className='inline-block'>
                                    <a href='' className='font-CircularMedium tracking-normal bg-[#fff] rounded-[500px] text-[#000] inline-block py-2 px-8 leading-8 hover:scale-105 transition-all duration-200'>Đăng nhập</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <Navbar />
                    {/* Nav */}
                    {/* List Playlists - Log Out */}
                    <div className='list-playlists mt-[64px] ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                        {/* Playlists - Focus */}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Focus</h3>
                                </a>
                                <a href="" className=''>
                                    <p className="text-[#B3B3B3] font-CircularMedium text-sm hover:underline">Show all</p>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px]'>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Playlists - Focus*/}
                        {/* Playlists - Spotify Playlists*/}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Spotify Playlists</h3>
                                </a>
                                <a href="" className=''>
                                    <p className="text-[#B3B3B3] font-CircularMedium text-sm hover:underline">Show all</p>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px]'>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Playlists - Spotify Playlists*/}
                        {/* Playlists - Sleep*/}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Sleep</h3>
                                </a>
                                <a href="" className=''>
                                    <p className="text-[#B3B3B3] font-CircularMedium text-sm hover:underline">Show all</p>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px]'>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                                <div className='relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                    <a href='#' className='block album-wrap p-4 group'>
                                        <div className='album-img mb-4 relative'>
                                            <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                            <button className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                <svg
                                                    role="img"
                                                    height="24"
                                                    width="24"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    data-encore-id="icon"
                                                    className="Svg-sc-ytk21e-0 uPxdw">
                                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='album-content text-[#fff]'>
                                            <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                            <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Playlists - Sleep*/}
                        {/* End */}
                        <div className='mt-8'>
                            <div className='px-8 pb-10'>
                                <hr className='border-l-0 border-b-0 border-r-0 border-t-[#292929] border-t-[0.5px] mb-10' />
                            </div>
                        </div>
                        {/* End */}
                    </div>
                    {/* List Playlists - Log Out */}
                </div>
                {/* Content */}
                {/* Footer */}
                {/* <footer className='fixed z-10 bottom-0 right-0 left-0'>
                    <a href="" className='flex items-center justify-between pt-[11px] pr-[24px] pb-[7px] pl-[15px] bg-[linear-gradient(90deg,#af2896,#509bf5)] '>
                        <div className='footer-content text-[#fff]'>
                            <p className='text-xs uppercase font-CircularLight tracking-widest leading-5'>Xem trước Spotify</p>
                            <p className='font-CircularBook text-base'>Đăng kí để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên. Không cần thẻ tín dụng.</p>
                        </div>
                        <div className=''>
                            <button className='bg-[#fff] py-2 px-8 rounded-[500px] hover:scale-105 transition-all duration-200 text-base leading-8 font-CircularMedium'>Đăng kí miễn phí</button>
                        </div>
                    </a>
                </footer> */}
                <Footer />
                {/* Footer */}
            </div>
            {/* Home Page - Log out*/}
        </div>
    )
}
