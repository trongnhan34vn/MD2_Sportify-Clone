import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import myMusic from '../../../audio/audio1.mp3'
import myMusic2 from '../../../audio/điều cha chưa nói final.mp3'
import myMusic3 from '../../../audio/Hơn em chỗ nào Final Final 2.mp3'
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../../icon';
import { controlAudio } from '../../../redux/selector';
import { playlists } from '../../../redux/selector';
import { actGetPlaylists, actPlayAudio } from '../../../redux/actions';


const AuthenSuccess = () => {
    const [songArr, setSongArr] = useState(
        [
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
    )

    const [songIndex, setSongIndex] = useState(0)
    const [playLength, setPlayLength] = useState(0)
    const audioRef = useRef()
    const progress = useRef(0)
    const dispatch = useDispatch()
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

    // Handle Play Audio
    useEffect(() => {
        dispatch(actGetPlaylists())
    }, [])

    const playAudio = useSelector(controlAudio)
    const listTrack = playAudio.currentTrack
    const audio = playAudio.audio
    useEffect(() => {
        playAudio.playlistId && setSongArr(listTrack)
    }, [playAudio.playlistId])

    let isPlayAudio = (playAudio.isPlay)

    useEffect(() => {
        isPlayAudio ? setIsPlay(true) : setIsPlay(false)
    }, [isPlayAudio])

    const [isPlay, setIsPlay] = useState(false)
    const handlePlay = () => {
        setIsPlay(!isPlay)
        dispatch(actPlayAudio())
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

    const elementIconPlayingFooter = (isPlay) ? iconPlayTrackBtnFooter : iconPauseTrackBtnFooter
    let reset = playAudio.reset

    useEffect(() => {
        if (reset) {
            setPlayLength(0)
            setCurrentTime(
                pre => ({ minutes: 0, seconds: 0 })
            )
        }
    }, [reset])
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
        setTimeout(() => {
            setIsPlay(true)
        }, 3000)
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
        if (isPlayAudio) {
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

    // Handle Volumn
    const [audioVol, setAudioVol] = useState(100)
    const [isMuted, setIsMuted] = useState(false)
    const handleChangeVolume = (event) => {
        let volume = event.target.value
        setAudioVol(volume)
        audioRef.current.volume = volume / 100;
        if (audioRef.current.volume === 0) {
            setIsMuted(true)
        } else {
            setIsMuted(false)
        }
        localStorage.setItem('volume', volume)
    }
    let getVol = localStorage.getItem('volume')
    
    const handleMuted = () => {
        setIsMuted(!isMuted)
    }

    const elementIconMute = (isMuted) ? iconMute : iconUnMute

    useEffect(() => {
        if (isMuted) {
            audioRef.current.volume = 0
            setAudioVol(pre => pre = 0)
        } else {
            audioRef.current.volume = 1
            setAudioVol(pre => pre = 100)
        }
    }, [isMuted])

    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(getVol * 100) / 100}% 100%`
        }
    }
    useEffect(() => {
        audioRef.current.volume = getVol / 100
    }, [])
    // Handle Volumn
    return (
        <div>
            {/* Footer */}
            <footer className='fixed z-50 bottom-0 right-0 left-0'>
                <div className='grid grid-cols-3 items-center bg-[#181818] h-[90px] pt-[11px] pr-[24px] pb-[7px] pl-[15px] '>
                    <div className='footer-content song-info flex items-center'>
                        <div className='song-img w-14 h-14 overflow-hidden'>
                            <img className='object-cover' src={songArr[songIndex].audioImg} alt="" />
                        </div>
                        <div className='song-name mx-[14px] pl-[6px] pr-3'>
                            <a className='font-CircularLight hover:underline cursor-pointer block leading-6 text-sm text-[#fff]'>{songArr[songIndex].audioName}</a>
                            <a className='font-CircularLight hover:underline cursor-pointer text-[11px] text-[#B3B3B3]'>{songArr[songIndex].artist}</a>
                        </div>
                        <div className='vote flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className='song-control flex flex-col'>
                        <audio ref={audioRef} autoPlay={true} onLoadedMetadata={onLoadedMetadata} src={songArr[songIndex].audioUrl}></audio>
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
                    {/* Song Volume */}
                    <div className='song-volumn'>
                        <div className='flex justify-end gap-2 items-center'>
                            <button onClick={handleMuted} className='opacity-75 hover:opacity-100'>
                                {elementIconMute}
                            </button>
                            <div className='h-3 flex items-center relative group'>
                                <input style={getBackgroundSize()} onChange={handleChangeVolume} value={audioVol} className='block h-1 rounded' max={100} min={0} type="range" />
                            </div>
                        </div>
                    </div>
                    {/* Song Volume */}
                </div>
            </footer>
            {/* Footer */}
        </div>
    )
}

export default memo(AuthenSuccess)
