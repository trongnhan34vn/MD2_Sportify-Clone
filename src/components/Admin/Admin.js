import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Footer from '../Footer/Footer';
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../icon';
import Navbar from '../Navbar/Navbar';
import { actPlayAudio, actToggleNav } from '../../redux/actions';
import { controlAudio, toggleSelector } from '../../redux/selector';
import FormUpload from './items/FormUpload';
import ListTracks from './items/ListTracks'
import AlertModal from '../../Modal/AlertModal';

export default function Admin() {
    const [toggleModal, setToggleModal] = useState(false)
    const dispatch = useDispatch()
    const toggleStatus = useSelector(toggleSelector)
    const playingStatus = useSelector(controlAudio)
    let toggle = toggleStatus

    // Play Audio
    let isPlayAudio = playingStatus.isPlay
    useEffect(() => {
        isPlayAudio ? setIsPlay(true) : setIsPlay(false)
    },[isPlayAudio])
    const [isPlay, setIsPlay] = useState(false)
    const handlePlay = () => {
        setIsPlay(!isPlay)
        dispatch(actPlayAudio())
    }

    const elementIconPlayingItem = (isPlay) ? iconPlayBtnPlaylist : iconPauseBtnPlaylist
    const handleMenuToggle = () => {
        dispatch(actToggleNav())
    }

    return (
        <div onClick={toggle ? handleMenuToggle : undefined}>
            {/* Direction Menu */}
            <DirectionMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Nav */}
            {/* Content */}
            <section className='section-playlist pb-[90px] pl-[241px]'>
                <FormUpload setToggleModal={setToggleModal} />
                <ListTracks handlePlay={handlePlay} elementIconPlayingItem={elementIconPlayingItem} />
            </section>
            {/* Content */}
            {/* Footer */}
            <AlertModal page="admin" toggleModal={toggleModal} />
            {/* Footer */}
        </div>
    )
}
