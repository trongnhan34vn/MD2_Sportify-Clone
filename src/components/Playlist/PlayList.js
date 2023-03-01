import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Footer from '../Footer/Footer';
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../icon';
import Navbar from '../Navbar/Navbar';
import { actPlayAudio, actToggleNav } from '../../redux/actions';
import { controlAudio, toggleSelector } from '../../redux/selector';

export default function PlayList() {
    const dispatch = useDispatch()
    const toggleStatus = useSelector(controlAudio)
    let isPlayAudio = toggleStatus.isPlay
    // Play Audio
    const [isPlay, setIsPlay] = useState(isPlayAudio)
    const handlePlay = () => {
        setIsPlay(!isPlay)
        dispatch(actPlayAudio())
    }
    // Nav Toggle
    let toggle = toggleStatus
    
    const handleMenuToggle = () => {
        dispatch(actToggleNav())
    }
    const elementIconPlayingItem = (isPlay) ? iconPlayBtnPlaylist : iconPauseBtnPlaylist
    return (
        <div onClick={toggle ? handleMenuToggle : undefined}>
            {/* Direction Menu */}
            <DirectionMenu />
            {/* Direction Menu */}
            {/* Nav */}
            <Navbar />
            {/* Content */}
            <section className='section-playlist pb-[90px] pl-[241px]'>
                <div className='section-playlist-banner flex items-end gap-6 linearColor max-h-[500px] h-[30vh] min-h-[340px] p-8'>
                    <div className='banner-img w-48 h-48'>
                        <img className='w-full h-full shadow-[0 4px 60px rgb(0 0 0 / 50%)]' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/1Gm45JaOS9vp7DsB51yDWq/en/default" alt="" />
                    </div>
                    <div className='banner-song-info text-[#fff]'>
                        <p className='text-xs font-CircularBook'>Playlist</p>
                        <h3 className='font-CircularBold text-[72px]'>Tùng Acoustic Mix</h3>
                    </div>
                </div>
                <div className='section-playlist-list-song bg-[#121212]'>
                    <div className='section-play-list-control flex gap-8 px-8 py-6 items-center'>
                        <button onClick={handlePlay} className='rounded-[50%] bg-primaryColor p-3.5'>
                            {elementIconPlayingItem}
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsla(0,0%,100%,.7)" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                    <div className='section-playlist-list px-8'>
                        <table className='table-fixed w-full text-[#B3B3B3] font-CircularLight text-sm'>
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
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                                <tr className='pt-8 hover:bg-[hsla(0,0%,100%,.1)]'>
                                    <td className='text-center'>1</td>
                                    <td className='flex gap-2 items-center py-2'>
                                        <div><img className='w-10 h-10' src="https://i.scdn.co/image/ab67616d000048513a9bb590e0c50a8774333783" alt="" /></div>
                                        <div><p className='text-base font-CircularBook text-[#fff]'>Tình Đơn Phương</p><p className='text-sm'>Tùng Acoustic</p></div>
                                    </td>
                                    <td>Tuyển tập của Tùng Acoustic</td>
                                    <td></td>
                                    <td>4:42</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Content */}
            {/* Footer */}
            {/* Footer */}
        </div>
    )
}
