import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import DirectionMenu from '../Direction Menu/DirectionMenu';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { playlists } from '../../redux/selector';
import { iconPauseTrackItem } from '../../icon';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const listPlaylists = useSelector(playlists)
    const list1 = listPlaylists.filter(playlist => playlist.id <= 5)
    const list2 = listPlaylists.filter(playlist => playlist.id > 5 && playlist.id <= 10)
    const list3 = listPlaylists.filter(playlist => playlist.id > 10 && playlist.id <= 12)

    const handlePlay = () => {

    }

    const elementFirstPlaylist = list1.map((playlist, index) => {
        return <div key={playlist.id} className='group relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handlePlay()} id={playlist.id} className='z-20 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPauseTrackItem}
            </button>
            <Link to={"/playlist"} className='block album-wrap p-4'>
                <div className='album-img flex flex-col mb-4 relative'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={playlist.imgSrc} alt="" />
                </div>
                <div className='album-content text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{playlist.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{playlist.artist}</p>
                </div>
            </Link>
        </div>
    })

    const elementSecondPlaylist = list2.map((playlist, index) => {
        return <div key={playlist.id} className='group z-20 relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handlePlay()} id={playlist.id} className='z-50 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPauseTrackItem}
            </button>
            <Link to={"/playlist"} className='flex flex-col album-wrap p-4'>
                <div className='album-img mb-4  relative'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={playlist.imgSrc} alt="" />
                </div>
                <div className='album-content text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1'>{playlist.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{playlist.artist}</p>
                </div>
            </Link>
        </div>
    })

    const elementThirdPlaylist = list3.map((playlist, index) => {
        return <div key={playlist.id} className='group z-20 relative album-item bg-[#181818] max-w-[200px] rounded hover:bg-[#282828] transition-all duration-300'>
            <button onClick={() => handlePlay()} id={playlist.id} className='z-50 top-[42%] -translate-x-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-xl w-12 h-12 cursor-default rounded-[50%] bg-[#1ed760] flex items-center justify-center absolute bottom-2 right-2 hover:scale-105 transition-all duration-300 opacity-0 translate-y-2'>
                {iconPauseTrackItem}
            </button>
            <Link to={"/playlist"} className='flex flex-col album-wrap p-4'>
                <div className='album-img mb-4 justify-center w-[167px] h-[167px] relative'>
                    <img className='rounded object-cover w-[167px] h-[167px] drop-shadow-2xl' src={playlist.imgSrc} alt="" />
                </div>
                <div className='album-content text-[#fff]'>
                    <h3 className='font-CircularMedium text-base mb-1 truncate'>{playlist.name}</h3>
                    <p className='font-CircularLight text-sm text-[#6a6a6a]'>{playlist.artist}</p>
                </div>
            </Link>
        </div>
    })
    return (
        <div>
            {/* Home Page - Log out*/}
            <div className='home-page w-full mb-[66px] flex'>
                {/* Direction Menu */}
                <DirectionMenu />
                {/* Direction Menu */}
                {/* Content */}
                <div className='content w-full'>
                    {/* Nav */}
                    <Navbar />
                    {/* Nav */}
                    {/* List Playlists - Log Out */}
                    <div className='list-playlists w-full mt-[64px] pl-[241px] flex flex-col gap-6 py-6 bg-[linear-gradient(#1f1f1f,#121212)]'>
                        {/* Playlists - Recommended */}
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
                                {elementFirstPlaylist}
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
                                {elementSecondPlaylist}
                            </div>
                        </div>
                        {/* Playlists - Spotify Playlists*/}
                        {/* Playlists - Sleep*/}
                        <div className='list-playlists-item px-8 mb-4'>
                            <div className='list-playlists-item-title flex justify-between items-end mb-[22px]'>
                                <a href="" className=''>
                                    <h3 className='text-[#fff] font-CircularMedium leading-none tracking-tight hover:underline text-2xl'>More like Nhân Tic</h3>
                                </a>
                                <a href="" className=''>
                                    <p className="text-[#B3B3B3] font-CircularMedium text-sm hover:underline">Show all</p>
                                </a>
                            </div>
                            <div className='list-playlists-item list-albums grid gap-6 grid-cols-5 min-w-[414px]'>
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

                {/* Footer */}
            </div>
            {/* Home Page - Log out*/}
        </div>
    )
}
