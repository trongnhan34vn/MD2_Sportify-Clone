import React, { useCallback } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Footer from '../Footer/Footer';
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../icon';
import Navbar from '../Navbar/Navbar';
import { actPlayAudio, actToggleNav } from '../../redux/actions';
import { controlSelector } from '../../redux/selector';
import { Link } from 'react-router-dom';

export default function HomePageLogin() {
    const dispatch = useDispatch()
    const toggleStatus = useSelector(controlSelector)
    let toggle = toggleStatus.toggleNav

    // Play Audio
    let isPlayAudio = toggleStatus.isPlay
    const [isPlay, setIsPlay] = useState(isPlayAudio)
    const handlePlay = () => {
        setIsPlay(!isPlay)
        dispatch(actPlayAudio())
    }

    const elementIconPlayingItem = (isPlay) ? iconPlayTrackItem : iconPauseTrackItem
    const handleMenuToggle = () => {
        dispatch(actToggleNav())
    }
    return (
        <div onClick={toggle ? handleMenuToggle : undefined}>
            <div>
                {/* Home Page - Log in*/}
                <div className='relative home-page mb-[66px] flex'>
                    {/* Direction Menu */}
                    <DirectionMenu />
                    {/* Direction Menu */}
                    {/* Nav */}
                    {/* <nav className={`fixed z-[60] right-0 left-[241px] navbar-menu h-16 px-8 flex justify-between duration-[0.3s] ${stickyClass}`}>
                        <div className='nav-direction-page flex items-center gap-4 z-[60]'>
                            <button className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                                <i className="ti-angle-left text-[#fff] font-bold" />
                            </button>
                            <button className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                                <i className="ti-angle-right text-[#fff] font-bold" />
                            </button>
                        </div>
                        <div className='nav-list flex items-center gap-4 z-[70]'>
                            <ul className='text-[#fff] flex gap-4 relative font-CircularBook'>
                                <li className='inline-block'>
                                    <a href='' className='border-[1px] border-[#B3B3B3] rounded-[500px] text-sm inline-block py-[3px] px-[15px] leading-6 hover:scale-105 hover:border-[#fff] transition-all duration-200'>Khám phá Premium</a>
                                </li>
                                <li className='inline-block'>
                                    <button onClick={handleMenuToggle} className='h-8 items-center justify-between gap-2 rounded-[500px] text-sm flex bg-black hover:bg-[#282828] py-[3px] leading-6 hover:opacity-100 transition-all duration-200'>
                                        <span className=''>
                                            <img className='w-7 h-7 rounded-[50%]' src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg" alt="" />
                                        </span>
                                        <span className='users'>
                                            Nhân Nguyễn
                                        </span>
                                        <span className='pr-3'>
                                            {elementIconToggle}
                                        </span>
                                    </button>
                                    {elementMenuToggle}
                                </li>
                            </ul>
                        </div>
                    </nav> */}
                    <Navbar />
                    {/* Nav */}
                    {/* Content */}
                    <div className='content'>
                        {/* List Playlists - Log Out */}
                        <div className='list-playlists pt-[64px] ml-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                            {/* Playlists - Your Playlist */}
                            <div className='list-playlists-item px-8 mb-4'>
                                {/* Playlist Title */}
                                <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                    <a href="" className=''>
                                        <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Your Playlist</h3>
                                    </a>
                                    <a href="" className=''>
                                        <p className="text-[#B3B3B3] font-CircularMedium text-sm hover:underline">Show all</p>
                                    </a>
                                </div>
                                {/* Playlist Title */}
                                <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4  l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                                    {/* Playlist Item */}
                                    <div className='group z-20 relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
                                        <Link to={"/playlist"} className='block album-wrap p-4 group'>
                                            <div className='album-img mb-4 relative'>
                                                <img className='rounded drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]' src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                                                <button onClick={handlePlay} className='group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                                                    {elementIconPlayingItem}
                                                </button>
                                            </div>
                                            <div className='album-content text-[#fff]'>
                                                <h3 className='font-CircularMedium text-base mb-1'>Peaceful Piano</h3>
                                                <p className='font-CircularLight text-sm text-[#6a6a6a]'>Relax and indulge with beautiful piano pieces</p>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Playlist Item */}
                                    <div className='group z-20 relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='group z-20 relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='group z-20 relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='group z-20 relative album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                            {/* Playlists - Your Playlist*/}
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
                                <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                                    <div className='album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                    <div className='album-item bg-[#181818] rounded hover:bg-[#282828] transition-all duration-300'>
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
                                <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
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
                    <Footer />
                    {/* Footer */}
                </div>
                {/* Home Page - Log in*/}
            </div>
        </div>
    )
}
