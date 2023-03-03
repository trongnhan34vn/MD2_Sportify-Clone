import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Footer from '../Footer/Footer';
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../icon';
import Navbar from '../Navbar/Navbar';
import { actPlayAudio, actToggleNav, resetCurrentTime, setIsPlay } from '../../redux/actions';
import { controlAudio, toggleSelector } from '../../redux/selector';
import LoginModal from '../../Modal/LoginModal';

export default function PlayList() {
    const playlist = JSON.parse(localStorage.getItem("playlist"))
    const playlistItem = playlist.list.filter(item => item.id === playlist.idTrackList)
    const listTrack = playlistItem[0]
    const dispatch = useDispatch()
    const toggleStatus = useSelector(toggleSelector)
    const controlAudioSelect = useSelector(controlAudio)
    let isPlayAudio = controlAudioSelect.isPlay

    // Play Audio
    // const [isPlaying, setIsPlaying] = useState(isPlayAudio)
    const [changeStateButton, setChangeStateButton] = useState()
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const handleReset = useRef(0)
    const handlePlay = () => {
        if (listTrack.id !== changeStateButton) {
            setChangeStateButton(listTrack.id)
            dispatch(setIsPlay(true))
        } else {
            setChangeStateButton()
            dispatch(setIsPlay(!isPlayAudio))
        }
        if (controlAudioSelect.playlistId !== listTrack.id) {
            if (handleReset === 0) {
                handleReset.current += 1
            } else {
                dispatch(resetCurrentTime(true))
                setTimeout(() => { dispatch(resetCurrentTime(false)) }, 100)
            }
            dispatch(actPlayAudio(playlist.idTrackList, listTrack.listTracks))
        }
        if(currentUser === null) {
            setOnModal(true)
        }
    }
    // Nav Toggle
    let toggle = toggleStatus

    const handleMenuToggle = () => {
        dispatch(actToggleNav())
    }
    const elementIconPlayingItem = (isPlayAudio) ? iconPlayBtnPlaylist : iconPauseBtnPlaylist

    const testRef = useRef(null)

    const getDuration = (src) => {
        // let audioRef = <audio  src={src.audioUrl} controls></audio>
        let audioRef = document.createElement("AUDIO")
        audioRef.src = src.audioUrl
        audioRef.setAttribute("controls", "controls")
        audioRef.setAttribute("onloadedmetadata", "onloadedmetadata")

        return audioRef.duration;
    }

    const disPlayDuration = () => {
        let durationArr = [];
        listTrack.listTracks.forEach(val => {
            let duration = getDuration(val)
            durationArr = [...durationArr, duration]
        });

        return durationArr;
    }


    let result = disPlayDuration()
    // console.log(result);


    const elementListtrack = listTrack.listTracks.map((item, index) => {
        return <tr key={index} className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
            <td className='text-center'>{index + 1}</td>
            <td className='flex gap-2 items-center py-2'>
                <div><img className='w-10 object-cover h-10' src={item.audioImg} alt="" /></div>
                <div><p className='text-base font-CircularBook text-[#fff]'>{item.audioName}</p><p className='text-sm'>{item.artist}</p></div>
            </td>
            <td className='overflow-hidden truncate'>{item.albums}</td>
            <td></td>
            <td></td>
        </tr>
    })
    const [onModal, setOnModal] = useState(false)

    
    return (
        <div onClick={toggle ? handleMenuToggle : undefined}>
            {/* Direction Menu */}
            <DirectionMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Content */}
            <section className='section-playlist pb-[90px] h-full pl-[241px] bg-[#121212] '>
                <audio ref={testRef} src=""></audio>
                <div className='section-playlist-banner flex items-end gap-6 linearColor max-h-[500px] h-[30vh] min-h-[340px] p-8'>
                    <div className='banner-img w-48 h-48'>
                        <img className='w-[192px] object-cover h-full drop-shadow-2xl' src={listTrack.listTracks[0].audioImg} alt="" />
                    </div>
                    <div className='w-full overflow-hidden banner-song-info text-[#fff]'>
                        <p className='text-xs font-CircularBook'>Playlist</p>
                        <h3 className='font-CircularBold text-[72px] truncate'>{listTrack.name}</h3>
                        <p className='text-xs font-CircularLight'>{listTrack.artist}</p>
                    </div>
                </div>
                <div className='section-playlist-list-song h-full bg-[#121212]'>
                    <div className='section-play-list-control flex gap-8 px-8 py-6 items-center'>
                        <button onClick={handlePlay} className='rounded-[50%] hover:scale-110 transition-all duration-200 bg-primaryColor p-3.5'>
                            {(currentUser) ? elementIconPlayingItem : iconPauseBtnPlaylist}
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsla(0,0%,100%,.7)" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                    <div className='section-playlist-list px-8 h-full'>
                        <table className='table-fixed w-full text-[#B3B3B3] h-full font-CircularLight text-sm'>
                            <thead className='text-left'>
                                <tr className='border-b border-[hsla(0,0%,100%,.1)]'>
                                    <th width="5%" className='text-center'>#</th>
                                    <th width="35%" className='py-2'>Title</th>
                                    <th wdth="20%" className='py-2'>Album</th>
                                    <th className='py-2'>Date Added</th>
                                    <th width="5%" className='py-2'><i className="fa-regular fa-clock"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementListtrack}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Content */}
            {/* Footer */}
            <LoginModal onModal={onModal} />
            {/* Footer */}
        </div>
    )
}
