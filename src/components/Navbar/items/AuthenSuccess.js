
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { iconPauseTrackBtnFooter, iconPlayTrackBtnFooter, iconPauseTrackItem, iconPlayTrackItem, iconUnMute, iconMute, iconPauseBtnPlaylist, iconPlayBtnPlaylist } from '../../../icon';
import { actToggleNav } from '../../../redux/actions';
import { controlSelector, toggleSelector } from '../../../redux/selector'
import { useNavigate } from 'react-router-dom';


export default function AuthenSuccess() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const currentUser = user.user
    const dispatch = useDispatch()
    // Hiệu ứng navbar
    const [menuToggle, setMenuToggle] = useState(false)
    const toggleStatus = useSelector(toggleSelector)
    let toggle = toggleStatus
    useEffect(() => {
        toggle ? setMenuToggle(true) : setMenuToggle(false)
    }, [toggle])
    const [stickyClass, setStickyClass] = useState('')
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
        dispatch(actToggleNav())
    }

    const handleSignOut = () => {
        localStorage.removeItem("currentUser")
        navigate("/")
    }
    const elementIconToggle = (menuToggle) ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>
    const elementMenuToggle = (menuToggle) ? <ul className='right-0 top-10 p-1 direction-account absolute bg-[#282828] font-CircularLight text-sm rounded shadow-[0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%)] max-w-[350px] min-w-[160px]'>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' >Profile</a></li>
        <li><a className='p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' >Account</a></li>
        <li><button onClick={handleSignOut} className='w-full text-left p-3 h-10 block hover:bg-[hsla(0,0%,100%,.1)]' >Log Out</button></li>
    </ul> : ""
    // Toggle menu navbar thò thụt
    return (
        <div onClick={menuToggle ? handleMenuToggle : undefined}>
            {/* Nav */}
            {/* <div className='left-[22%] -translate-y-4 top-8 fixed nav-direction-page flex items-center gap-4 z-[100]'>
                <button onClick={navigate(-1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                    <i className="ti-angle-left text-[#fff] font-bold" />
                </button>
                <button onClick={navigate(1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                    <i className="ti-angle-right text-[#fff] font-bold" />
                </button>
            </div> */}
            <nav className={`fixed z-[60] right-0 left-[241px] navbar-menu h-16 px-8 flex justify-between duration-[0.3s] ${stickyClass}`}>
                <div className='nav-direction-page flex items-center gap-4 z-[60]'>
                    <button onClick={() => navigate(-1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
                        <i className="ti-angle-left text-[#fff] font-bold" />
                    </button>
                    <button onClick={() => navigate(1)} className='w-8 h-8 px-2 py-1 opacity-75 hover:opacity-100 transition-all bg-[#101010] rounded-[50%] duration-200'>
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
                                    {currentUser.name}
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
        </div>
    )
}
