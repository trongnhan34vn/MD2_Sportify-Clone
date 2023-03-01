import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthenFailed() {
    return (
        <div>
            {/* Footer */}
            <footer className='fixed z-10 bottom-0 right-0 left-0'>
                <Link to={"/sign-up"} className='flex items-center justify-between pt-[11px] pr-[24px] pb-[7px] pl-[15px] bg-[linear-gradient(90deg,#af2896,#509bf5)] '>
                    <div className='footer-content text-[#fff]'>
                        <p className='text-xs uppercase font-CircularLight tracking-widest leading-5'>Xem trước Spotify</p>
                        <p className='font-CircularBook text-base'>Đăng kí để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên. Không cần thẻ tín dụng.</p>
                    </div>
                    <div className=''>
                        <button className='bg-[#fff] py-2 px-8 rounded-[500px] hover:scale-105 transition-all duration-200 text-base leading-8 font-CircularMedium'>Đăng kí miễn phí</button>
                    </div>
                </Link>
            </footer>
            {/* Footer */}
        </div>
    )
}
