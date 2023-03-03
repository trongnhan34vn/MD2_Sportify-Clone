import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginModal(props) {
    const navigate = useNavigate()
    const { onModal, setOnModal } = props
    const elementModal = (onModal) ? "opacity-100 z-[100]" : "-translate-y-16 z-[-1] opacity-0 h-0 w-0"
    return (
        <div onClick={() => setOnModal(false)} className={elementModal}>
            <div className={`transition duration-1000 fixed ${elementModal} bg-black bg-opacity-80 top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center`}>
                <div className="bg-white w-[63%] h-[75%] rounded-lg bg-gradient-to-b from-[#8ba1b4] to-[#2b2e2e] flex justify-center items-center">
                    <div className=" flex justify-between w-[83%] font-CircularBold h-[70%]">
                        <div className="w-[50%] flex items-center">
                            <img
                                src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                        <div className="w-[50%] flex justify-center items-center flex-col gap-7">
                            <p className="text-white text-3xl text-center font-CircularBold w-[100%]">
                                Start listening with a free Spotify account
                            </p>
                            <button onClick={() => {navigate('/sign-up')}} className="p-3 w-[60%] rounded-[500px] bg-[#159442] hover:scale-105 duration-75 transition-all font-[650]">
                                Sign Up Free
                            </button>
                            <button className="border-white border-solid border-[1px] p-3 w-[60%] rounded-[500px] hover:scale-105 duration-75 transition-all font-[650] text-white">
                                Download App
                            </button>
                            <p className="text-[#b6b8ba] font-bold text-sm">
                                Already have account?{" "}
                                <Link to={"/login"} className="text-white cursor-pointer hover:underline pl-3">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
