import React, { useCallback } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Footer from '../Footer/Footer';
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../icon';
import Navbar from '../Navbar/Navbar';
import { actPlayAudio, actToggleNav, recievePlaylists, resetCurrentTime, setIsPlay } from '../../redux/actions';
import { controlAudio, currentUser, playlists, toggleSelector } from '../../redux/selector';
import { Link, useNavigate } from 'react-router-dom';
import { act } from '@testing-library/react';

export default function HomePageLogin() {
    const navigate = useNavigate()
    //  Return playlists
    const listPlaylists = useSelector(playlists)
    const list1 = listPlaylists.filter(playlist => playlist.id <= 5)
    const list2 = listPlaylists.filter(playlist => playlist.id > 5 && playlist.id <= 10)
    const list3 = listPlaylists.filter(playlist => playlist.id > 10 && playlist.id <= 12)
    const dispatch = useDispatch()
    const toggleStatus = useSelector(toggleSelector)
    const playingStatus = useSelector(controlAudio)
    let toggle = toggleStatus

    let playlistId = useSelector(controlAudio)
    // Play Audio
    let isPlayAudio = playingStatus.isPlay
    // const [isPlay, setIsPlay] = useState(isPlayAudio)
    let playlistLocal = JSON.parse(localStorage.getItem('playlist'))
    useEffect(() => {
        if (playlistLocal !== null) {
            let listTrack = playlistLocal.list.filter(item => item.id)
            let listTrackItem = listTrack[0].listTracks
            console.log(listTrackItem);
            dispatch(actPlayAudio(playlistLocal.id, listTrackItem))
        }
    }, [])

    const handleReset = useRef(0)
    const [changeStateButton, setChangeStateButton] = useState()
    const handlePlay = (id, playlist) => {
        if (id !== changeStateButton) {
            setChangeStateButton(id)
            dispatch(setIsPlay(true))
        } else {
            setChangeStateButton()
            dispatch(setIsPlay(!isPlayAudio))
        }
        if (playlistId.playlistId !== id) {
            if (handleReset === 0) {
                handleReset.current += 1
            } else {
                dispatch(resetCurrentTime(true))
                setTimeout(() => { dispatch(resetCurrentTime(false)) }, 100)
            }
            dispatch(actPlayAudio(id, playlist))
            if (playlistLocal !== null) {
                let listTrack
                if (id <= 5) { listTrack = list1 }
                if (id > 5 && id <= 10) { listTrack = list2 }
                if (id > 10 && id <= 12) { listTrack = list3 }
                if (id !== playlistLocal.idTrackList) {
                    localStorage.removeItem('playlist')
                    localStorage.setItem('playlist', JSON.stringify({idTrackList: id, list: listTrack}))
                }
            }
        }
    }

    useEffect(() => {
        isPlayAudio ? setIsPlay(true) : setIsPlay(false)
    }, [isPlayAudio])

    const handleMenuToggle = () => {
        dispatch(actToggleNav())
    }

    const handleToPlayList = (id) => {
        if (id <= 5) {
            navigate("/playlist")
            let idTrackList = id
            let toPlaylist = { idTrackList, list: list1 }
            localStorage.removeItem("playlist")
            localStorage.setItem("playlist", JSON.stringify(toPlaylist))
        }
        if (id <= 10 && id > 5) {
            navigate("/playlist")
            let idTrackList = id
            let toPlaylist = { idTrackList, list: list2 }
            localStorage.removeItem("playlist")
            localStorage.setItem("playlist", JSON.stringify(toPlaylist))
        }
        if (id <= 12 && id > 10) {
            navigate("/playlist")
            let idTrackList = id
            let toPlaylist = { idTrackList, list: list3 }
            localStorage.removeItem("playlist")
            localStorage.setItem("playlist", JSON.stringify(toPlaylist))
        }
    }

    const elementFirstPlaylist = list1.map((playlist, index) => {
        return <div key={playlist.id} className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handlePlay(playlist.id, playlist.listTracks)} id={playlist.id} className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {changeStateButton === playlist.id ? iconPlayTrackItem : iconPauseTrackItem}
            </button>
            <button onClick={() => handleToPlayList(playlist.id)} className='w-full inline-block text-left album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 '>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={playlist.imgSrc} alt="" />
                </div>
                <div className='album-content w-full text-[#fff]'>
                    <h3 className='font-CircularMedium w-full text-base mb-1 truncate'>{playlist.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{playlist.artist}</p>
                </div>
            </button>
        </div>
    })

    const elementSecondPlaylist = list2.map((playlist, index) => {
        return <div key={playlist.id} className='group z-20 relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handlePlay(playlist.id, playlist.listTracks)} id={playlist.id} className='z-50 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {changeStateButton === playlist.id ? iconPlayTrackItem : iconPauseTrackItem}
            </button>
            <button onClick={() => handleToPlayList(playlist.id)} className='w-full inline-block text-left album-wrap p-4'>
                <div className='album-img flex flex-col mb-4'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={playlist.imgSrc} alt="" />
                </div>
                <div className='album-content text-[#fff]'>
                    <h3 className='font-CircularMedium w-full text-base mb-1'>{playlist.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{playlist.artist}</p>
                </div>
            </button>
        </div>
    })

    const elementThirdPlaylist = list3.map((playlist, index) => {
        return <div key={playlist.id} className='group z-20 relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handlePlay(playlist.id, playlist.listTracks)} id={playlist.id} className='z-50 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {changeStateButton === playlist.id ? iconPlayTrackItem : iconPauseTrackItem}
            </button>
            <button onClick={() => handleToPlayList(playlist.id)} className='w-full inline-block text-left album-wrap p-4'>
                <div className='album-img flex flex-col mb-4'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={playlist.imgSrc} alt="" />
                </div>
                <div className='album-content text-[#fff]'>
                    <h3 className='font-CircularMedium w-full text-base mb-1 truncate'>{playlist.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{playlist.artist}</p>
                </div>
            </button>
        </div>
    })

    //  Return playlists

    return (
        <div onClick={toggle ? handleMenuToggle : undefined}>

            {/* Home Page - Log in*/}
            <div className='relative home-page mb-[66px] w-full flex'>
                {/* Direction Menu */}
                <DirectionMenu />
                {/* Direction Menu */}
                {/* Nav */}
                <Navbar />
                {/* Nav */}
                {/* Content */}
                <div className='content w-full'>
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
                                {elementFirstPlaylist}
                                {/* Playlist Item */}
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
                                {elementSecondPlaylist}
                            </div>
                        </div>
                        {/* Playlists - Spotify Playlists*/}
                        {/* Playlists - Sleep*/}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>Recommend</h3>
                                </a>
                                <a href="" className=''>
                                    <p className="text-[#B3B3B3] font-CircularMedium text-sm hover:underline">Show all</p>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px] xl:grid-cols-4 l:grid-cols-3 sm:!grid-cols-2 xl:[&>:last-child]:hidden l:[&>:nth-child(3)]:hidden sm:[&>:nth-child(2)]:hidden'>
                                {elementThirdPlaylist}
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

                {/* Footer */}
            </div>
            {/* Home Page - Log in*/}

        </div>
    )
}
