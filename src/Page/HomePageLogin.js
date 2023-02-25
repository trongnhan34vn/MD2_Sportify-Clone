import React, { useCallback } from 'react'

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import myMusic from '../audio/audio1.mp3'
import myMusic2 from '../audio/điều cha chưa nói final.mp3'
import myMusic3 from '../audio/Hơn em chỗ nào Final Final 2.mp3'


const songArr = [
    {
        name: 'Khoa Pug',
        link: myMusic
    },
    {
        name: 'Anh Nhân đẹp zai',
        link: myMusic2
    },
    {
        name: 'Anh Tấn đz',
        link: myMusic3
    }
]

export default function HomePageLogin() {
    const [songIndex, setSongIndex] = useState(0)
    const [menuToggle, setMenuToggle] = useState(false)
    const [stickyClass, setStickyClass] = useState('')
    const [isPlay, setIsPlay] = useState(false)
    const [playLength, setPlayLength] = useState(0)
    const audioRef = useRef()
    const progress = useRef(0)
    const [progressBarPercent, setProgressBarPercent] = useState(0)
    const [timeProgress, setTimeProgress] = useState(
        {
            minutes: 0,
            seconds: 0,
        }
    )
    const [currentTime, setCurrentTime] = useState(
        {
            minutes: 0,
            seconds: 0
        }
    )
    // Lấy time progress 
    const onLoadedMetadata = () => {
        if (audioRef.current) {
            let minutes = Math.floor(audioRef.current.duration / 60)
            let seconds = Math.floor(audioRef.current.duration % 60)
            setTimeProgress({ minutes: minutes, seconds: seconds })
        }
    }
    // Lấy time progress

    // Hiệu ứng navbar
    const stickNav = () => {
        let windowHeight = window.scrollY;
        (windowHeight > 64) ? setStickyClass('bg-show') : setStickyClass('')
    }
    useEffect(() => {
        window.addEventListener('scroll', stickNav)
    }, [])
    // Hiệu ứng navbar

    // Toggle menu navbar thò thụt
    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }
    const elementIconToggle = (menuToggle) ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>
    const elementMenuToggle = (menuToggle) ? <ul className='right-0 top-10 p-1 direction-account absolute bg-[#282828] font-CircularLight text-sm rounded shadow-[0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%)] max-w-[350px] min-w-[160px]'>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' href="">Profile</a></li>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' href="">Account</a></li>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' href="">Log Out</a></li>
    </ul> : ""
    // Toggle menu navbar thò thụt

    // Handle Play Audio
    const handlePlay = () => {
        setIsPlay(!isPlay)
    }

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play()
            progress.current = setInterval(() => {
                setPlayLength(pre => pre + 100 / audioRef.current.duration)
                if (currentTime.seconds === 59) {
                    setCurrentTime(pre => ({ minutes: pre.minutes + 1, seconds: 0 }))
                } else {
                    setCurrentTime(pre => ({ ...pre, seconds: pre.seconds + 1 }))
                }
            }, 1000)
        } else {
            audioRef.current.pause()
            clearInterval(progress.current)
        }
        return () => clearInterval(progress.current)
    }, [isPlay, currentTime])

    useEffect(() => {
        if (playLength >= 100) {
            setIsPlay(false)
            setPlayLength(0)
            setCurrentTime(pre => ({ minutes: 0, seconds: 0 }))
            setTimeout(() => {
                if (songIndex === songArr.length - 1) {
                    setSongIndex(0)
                } else {
                    setSongIndex(prev => prev + 1)
                }
                setIsPlay(true)
            }, 3000)
        }
    }, [playLength])

    const styles = {
        transform: `translate(${playLength - 100}%)`
    }

    const dotStyles = {
        transform: `translateX(${playLength}%)`
    }

    const elementIconPlayingFooter = (isPlay) ? <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className="Svg-sc-ytk21e-0 uPxdw">
        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg> : <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className="Svg-sc-ytk21e-0 uPxdw">
        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>

    const elementIconPlayingItem = (isPlay) ? <svg
        role="img"
        height="24"
        width="24"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-encore-id="icon"
        className="Svg-sc-ytk21e-0 uPxdw">
        <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg> : <svg
        role="img"
        height="24"
        width="24"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-encore-id="icon"
        className="Svg-sc-ytk21e-0 uPxdw">
        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
    </svg>
    // Handle Play Audio

    // Handle Prev Track
    const handlePrevTrack = () => {
        clearInterval(progress.current)
        setIsPlay(false)
        setCurrentTime(
            {
                minutes: 0,
                seconds: 0,
            }
        )
        setPlayLength(0)
        if (songIndex === 0) {
            setSongIndex(songArr.length - 1)
        } else {
            setSongIndex(prev => prev - 1)
        }
        if (isPlay) {
            setTimeout(() => {
                setIsPlay(true)
            }, 3000)
        }
    }
    // Handle Prev Track

    // Handle Next Track
    const handleNextTrack = () => {
        clearInterval(progress.current)
        setIsPlay(false)
        setCurrentTime(
            {
                minutes: 0,
                seconds: 0,
            }
        )
        setPlayLength(0)
        if (songIndex === songArr.length - 1) {
            setSongIndex(0)
        } else {
            setSongIndex(prev => prev + 1)
        }
        if (isPlay) {
            setTimeout(() => {
                setIsPlay(true)
            }, 3000)
        }
    }
    // Handle Next Track

    // Handle Progress Bar
    const progressBar = useRef()
    const slideBar = useRef()

    const handleProgressBar = (event) => {
        let bounds = event.target.getBoundingClientRect().left
        let clickPosProgBar = event.clientX - bounds
        let widthProgBar = progressBar.current.offsetWidth;
        let percent = clickPosProgBar / widthProgBar
        setProgressBarPercent(percent)
        setPlayLength(clickPosProgBar / widthProgBar * 100)
        let currentSeconds = percent * audioRef.current.duration
        let currentTime = {
            minutes: Math.floor(currentSeconds / 60),
            seconds: Math.floor(currentSeconds % 60)
        }
        setCurrentTime(pre => pre = currentTime)
        audioRef.current.currentTime = currentSeconds
    }

    // Handle Progress Bar
    return (
        <div>
            <div onClick={menuToggle ? handleMenuToggle : undefined}>
                {/* Home Page - Log in*/}
                <div className='relative home-page mb-[66px] flex'>
                    {/* Direction Menu */}
                    <div id='direction-menu' className='h-auto pt-6 w-[241px] bg-[#000] fixed z-10 bottom-0 top-0'>
                        {/* Logo */}
                        <div className='direction-menu-logo mb-7 px-6'>
                            <svg
                                role="img"
                                viewBox="0 0 78 24"
                                height="100%"
                                fill='#fff'
                                className="w-[130px] h-[40px] mb-8]"
                            >
                                <path d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.59-1.388a1.077 1.077 0 0 1-1.164-.363 1.14 1.14 0 0 1-.119-1.237c.136-.262.37-.46.648-.548 4.132-1.287 11-1.038 15.342 1.605a1.138 1.138 0 0 1 .099 1.863 1.081 1.081 0 0 1-.813.213c-.142-.02-.28-.07-.403-.145Zm-.124 3.402a.915.915 0 0 1-.563.42.894.894 0 0 1-.69-.112c-3.144-1.983-7.937-2.557-11.657-1.398a.898.898 0 0 1-.971-.303.952.952 0 0 1-.098-1.03.929.929 0 0 1 .54-.458c4.248-1.323 9.53-.682 13.14 1.595a.95.95 0 0 1 .3 1.286Zm-1.43 3.267a.73.73 0 0 1-.45.338.712.712 0 0 1-.553-.089c-2.748-1.722-6.204-2.111-10.276-1.156a.718.718 0 0 1-.758-.298.745.745 0 0 1-.115-.265.757.757 0 0 1 .092-.563.737.737 0 0 1 .457-.333c4.455-1.045 8.277-.595 11.361 1.338a.762.762 0 0 1 .241 1.028ZM11.696 0C5.237 0 0 5.373 0 12c0 6.628 5.236 12 11.697 12 6.46 0 11.698-5.372 11.698-12 0-6.627-5.238-12-11.699-12h.001Zm20.126 11.078c-2.019-.494-2.379-.84-2.379-1.57 0-.688.633-1.151 1.572-1.151.91 0 1.814.352 2.76 1.076a.131.131 0 0 0 .187-.03l.987-1.426a.139.139 0 0 0-.025-.185c-1.127-.928-2.396-1.378-3.88-1.378-2.18 0-3.703 1.342-3.703 3.263 0 2.06 1.315 2.788 3.585 3.352 1.932.457 2.258.84 2.258 1.524 0 .757-.659 1.229-1.72 1.229-1.18 0-2.141-.408-3.216-1.364a.13.13 0 0 0-.188.016l-1.106 1.35a.137.137 0 0 0 .013.188c1.252 1.147 2.79 1.752 4.451 1.752 2.35 0 3.869-1.317 3.869-3.356 0-1.723-1.003-2.676-3.465-3.29Zm10.487 2.31c0 1.454-.874 2.47-2.125 2.47-1.235 0-2.169-1.061-2.169-2.47 0-1.41.933-2.47 2.17-2.47 1.23 0 2.124 1.038 2.124 2.47Zm-1.706-4.354c-1.018 0-1.854.412-2.543 1.256v-.95a.136.136 0 0 0-.038-.095.132.132 0 0 0-.093-.04h-1.81a.131.131 0 0 0-.093.04.136.136 0 0 0-.039.096v10.546c0 .076.06.137.133.137h1.809a.132.132 0 0 0 .093-.041.136.136 0 0 0 .038-.096v-3.329c.69.794 1.525 1.18 2.543 1.18 1.893 0 3.808-1.494 3.808-4.35 0-2.858-1.915-4.354-3.808-4.354Zm8.72 6.839c-1.297 0-2.274-1.068-2.274-2.486 0-1.422.943-2.455 2.244-2.455 1.305 0 2.288 1.069 2.288 2.487 0 1.422-.949 2.454-2.258 2.454Zm0-6.838c-2.438 0-4.347 1.926-4.347 4.383 0 2.432 1.896 4.338 4.317 4.338 2.445 0 4.36-1.92 4.36-4.369 0-2.44-1.901-4.353-4.33-4.353Zm9.535.17h-1.99V7.117a.136.136 0 0 0-.08-.126.13.13 0 0 0-.052-.01h-1.809a.133.133 0 0 0-.093.04.136.136 0 0 0-.038.095v2.087h-.87a.131.131 0 0 0-.122.085.139.139 0 0 0-.01.052v1.595c0 .074.06.135.132.135h.87v4.126c0 1.667.809 2.513 2.404 2.513.648 0 1.186-.138 1.694-.434a.135.135 0 0 0 .067-.117V15.64a.137.137 0 0 0-.063-.115.13.13 0 0 0-.129-.006c-.349.18-.685.263-1.061.263-.58 0-.84-.271-.84-.876V11.07h1.99a.13.13 0 0 0 .094-.04.136.136 0 0 0 .039-.096V9.339a.137.137 0 0 0-.039-.096.132.132 0 0 0-.094-.04v.001Zm6.934.007v-.255c0-.755.281-1.092.914-1.092.376 0 .68.077 1.019.194a.13.13 0 0 0 .118-.02.135.135 0 0 0 .056-.11V6.365a.137.137 0 0 0-.026-.081.133.133 0 0 0-.068-.05 4.852 4.852 0 0 0-1.502-.22c-1.67 0-2.554.965-2.554 2.788v.393h-.87a.132.132 0 0 0-.093.04.136.136 0 0 0-.038.096v1.603c0 .075.059.136.132.136h.87v6.364c0 .075.058.135.131.135h1.809c.072 0 .131-.06.131-.135V11.07h1.69l2.586 6.362c-.294.669-.583.802-.977.802-.319 0-.654-.098-.998-.29a.133.133 0 0 0-.105-.01.135.135 0 0 0-.078.072l-.612 1.38a.137.137 0 0 0 .056.175 3.733 3.733 0 0 0 1.932.508c1.334 0 2.073-.638 2.724-2.355l3.137-8.317a.14.14 0 0 0-.014-.126.131.131 0 0 0-.108-.06h-1.883a.132.132 0 0 0-.126.092l-1.928 5.651L69.006 9.3a.133.133 0 0 0-.124-.088h-3.09v.001Zm-4.02-.008h-1.809a.132.132 0 0 0-.093.041.136.136 0 0 0-.038.096v8.094c0 .075.06.135.132.135h1.809c.072 0 .131-.06.131-.135V9.34a.136.136 0 0 0-.038-.096.133.133 0 0 0-.094-.04Zm-.896-3.685a1.295 1.295 0 0 0-.919.393c-.243.25-.379.586-.377.937a1.342 1.342 0 0 0 .377.938 1.304 1.304 0 0 0 .92.393c.346-.002.677-.143.92-.393s.379-.587.377-.938c0-.735-.581-1.33-1.296-1.33h-.002Zm15.918 4.49h-.331v.434h.331c.165 0 .264-.083.264-.216 0-.142-.099-.217-.264-.217Zm.215.619.36.517h-.304l-.323-.474h-.279v.474h-.254v-1.37h.595c.31 0 .515.163.515.436a.412.412 0 0 1-.31.417Zm-.282-1.31c-.652 0-1.146.532-1.146 1.183 0 .65.49 1.175 1.139 1.175.652 0 1.147-.532 1.147-1.183 0-.65-.492-1.174-1.14-1.174Zm-.007 2.488a1.259 1.259 0 0 1-.904-.384 1.296 1.296 0 0 1-.368-.92c0-.717.563-1.314 1.279-1.314a1.259 1.259 0 0 1 .903.384 1.295 1.295 0 0 1 .369.921c0 .717-.563 1.314-1.279 1.314Z" />
                            </svg>
                        </div>
                        {/* Logo */}
                        {/* Menu Items */}
                        <ul className='dircet-menu-list text-[#fff] mb-7 px-2'>
                            <a href='#' className='px-4 flex opacity-75 transition-all duration-200 gap-4 items-center hover:opacity-100'>
                                <svg
                                    role="img"
                                    height="24"
                                    width="24"
                                    aria-hidden="true"
                                    // fill='#fff'
                                    className=" stroke-[#fff] stroke-[2px] " viewBox="0 0 24 24" data-encore-id="icon">
                                    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                                </svg>
                                <span className='font-CircularMedium text-sm leading-10'>Trang chủ</span>
                            </a>
                            <a href='#' className='px-4 flex opacity-75 transition-all duration-200 gap-4 items-center hover:opacity-100'>
                                <svg
                                    role="img"
                                    height="24"
                                    width="24"
                                    fill='#B3B3B3'
                                    aria-hidden="true"
                                    className="Svg-sc-ytk21e-0 uPxdw search-icon"
                                    viewBox="0 0 24 24" data-encore-id="icon">
                                    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                                </svg>
                                <span className='font-CircularMedium text-sm leading-10'>Tìm kiếm</span>
                            </a>
                            <a href='#' className='px-4 flex opacity-75 transition-all duration-200 gap-4 items-center hover:opacity-100'>
                                <svg
                                    role="img"
                                    height="24"
                                    width="24"
                                    aria-hidden="true"
                                    fill='#B3B3B3'
                                    className="Svg-sc-ytk21e-0 uPxdw collection-icon"
                                    viewBox="0 0 24 24"
                                    data-encore-id="icon">
                                    <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
                                </svg>
                                <span className='font-CircularMedium text-sm leading-10'>Thư viện</span>
                            </a>
                        </ul>
                        {/* Menu Items */}
                        <ul className='dircet-menu-list text-[#fff] mb-7 px-2'>
                            <a href='#' className='px-4 flex opacity-75 transition-all duration-200 gap-4 items-center hover:opacity-100'>
                                <div className='w-6 h-6 bg-[#fff] rounded flex items-center justify-center'>
                                    <svg
                                        role="img"
                                        height="12"
                                        width="12"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        data-encore-id="icon"
                                        className="Svg-sc-ytk21e-0 uPxdw">
                                        <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                                    </svg>
                                </div>
                                <span className='font-CircularMedium text-sm leading-10'>Tạo playlist</span>
                            </a>
                            <a href='#' className='px-4 flex opacity-75 transition-all duration-200 gap-4 items-center hover:opacity-100'>
                                <div className='w-6 h-6 bg-[linear-gradient(135deg,#450af5,#c4efd9)] rounded flex items-center justify-center'>
                                    <svg
                                        role="img"
                                        height="12"
                                        width="12"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        data-encore-id="icon"
                                        className="Svg-sc-ytk21e-0 uPxdw fill-[#fff]">
                                        <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                                    </svg>
                                </div>

                                <span className='font-CircularMedium text-sm leading-10'>Bài hát đã thích</span>
                            </a>
                        </ul>
                    </div>
                    {/* Direction Menu */}
                    {/* Nav */}
                    <nav className={`fixed z-[60] right-0 left-[241px] navbar-menu h-16 px-8 flex justify-between duration-[0.3s] ${stickyClass}`}>
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
                    </nav>
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
                                        <a className='block album-wrap p-4 group'>
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
                                        </a>
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
                    <footer className='fixed z-10 bottom-0 right-0 left-0'>
                        <div className='grid grid-cols-3 items-center bg-[#181818] h-[90px] pt-[11px] pr-[24px] pb-[7px] pl-[15px] '>
                            <div className='footer-content song-info flex items-center'>
                                <div className='song-img w-14 h-14 overflow-hidden'>
                                    <img src="https://scontent.fhan5-9.fna.fbcdn.net/v/t1.6435-9/54728173_1977886592321967_7318146998438199296_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5SRgtbXjGLcAX8WTQoy&_nc_ht=scontent.fhan5-9.fna&oh=00_AfC54L_ELn9nxTIB5SDiS4ZcVpWyLvE7Y6auo5eysNhZUA&oe=64197CBF" alt="" />
                                </div>
                                <div className='song-name mx-[14px] pl-[6px] pr-3'>
                                    <a className='font-CircularLight hover:underline cursor-pointer block leading-6 text-sm text-[#fff]'>{songArr[songIndex].name}</a>
                                    <a className='font-CircularLight hover:underline cursor-pointer text-[11px] text-[#B3B3B3]'>Nhân Tic</a>
                                </div>
                                <div className='vote flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='song-control flex flex-col'>
                                <audio ref={audioRef} webkit-playsinline="true" playsInline={true} autoPlay={true} onLoadedMetadata={onLoadedMetadata} src={songArr[songIndex].link}></audio>
                                <div className='song-control-btn justify-center mb-1 flex gap-4'>
                                    <button className='w-8 h-8 flex justify-center items-center fill-[#fff] opacity-60 hover:opacity-100'>
                                        <svg
                                            role="img"
                                            height="16"
                                            width="16"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16"
                                            data-encore-id="icon"
                                            className="">
                                            <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                                            <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                                        </svg>
                                    </button>
                                    <button onClick={handlePrevTrack} className='w-8 h-8 flex justify-center items-center fill-[#fff] opacity-60 hover:opacity-100'>
                                        <svg
                                            role="img"
                                            height="16" width="16"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16"
                                            data-encore-id="icon"
                                            className="">
                                            <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                                        </svg>
                                    </button>
                                    <button onClick={handlePlay} className='w-8 h-8 flex justify-center items-center bg-[#fff] rounded-[50%] hover:scale-105'>
                                        {elementIconPlayingFooter}
                                    </button>
                                    <button onClick={handleNextTrack} className='w-8 h-8 flex justify-center items-center fill-[#fff] opacity-60 hover:opacity-100'>
                                        <svg
                                            role="img"
                                            height="16"
                                            width="16"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16"
                                            data-encore-id="icon"
                                            className="">
                                            <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
                                    </button>
                                    <button className='w-8 h-8 flex justify-center items-center fill-[#fff] opacity-60 hover:opacity-100'>
                                        <svg
                                            role="img"
                                            height="16"
                                            width="16"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16"
                                            data-encore-id="icon"
                                            className="">
                                            <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
                                    </button>
                                </div>
                                <div className='song-run flex gap-2 items-center max-w-3xl'>
                                    <p className='font-CircularLight text-[11px] w-7 text-[#B3B3B3]'>
                                        {currentTime.minutes}:{currentTime.seconds < 10 && "0"}{currentTime.seconds}
                                    </p>
                                    <div className='w-full h-3 relative group'>
                                        <div onClick={handleProgressBar} ref={progressBar} className='bg-transparent cursor-pointer w-full absolute z-50 h-1 rounded top-[50%] translate-y-[-50%]'></div>
                                        <div className='cursor-pointer flex group absolute top-[50%] translate-y-[-50%] w-full h-1 rounded bg-[hsla(0,0%,100%,.3)] overflow-hidden'>
                                            <div className='overflow-hidden w-full h-full rounded'>
                                                <div style={styles} className={`transition-all duration-200 group-hover:bg-primaryColor group-focus:bg-primaryColor w-full h-full rounded bg-[#fff]`}>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={dotStyles} className="group-hover:opacity-100 opacity-0 cursor-pointer transition-all duration-200">
                                            <div className='absolute left-[-6px] bg-[#fff] w-3 h-3 rounded-[50%]'></div>
                                        </div>
                                    </div>
                                    <p className='font-CircularLight text-[11px] w-7 text-[#B3B3B3]'>{timeProgress.minutes}:{timeProgress.seconds}{timeProgress.seconds < 10 && "0"}</p>
                                </div>
                            </div>
                            <div className=''>

                            </div>
                        </div>
                    </footer>
                    {/* Footer */}
                </div>
                {/* Home Page - Log in*/}
            </div>
        </div>
    )
}
