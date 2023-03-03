import React from 'react'

export default function AlertModal(props) {
    const toggleStat = props.toggleModal
    const alerContent = () => {
        let result = "";
        switch (props.page) {
            case "admin":
                return result = "Success! This upload sucess!"
            case "sign-up":
                return result = "Sign Up Fail! Please try again!"
            case "login":
                return result = "Login Fail! Please try again!"
            case "sign-up-failed":
                return result = "Sign Up Fail! Your email has already exist! Please try again!"
            case "login-failed":
                return result = "Login Fail! Please check your email and password!"
            case "fail-upload":
                return result = "Upload Fail! Please try again!"
            default:
                return;
        }
    }
    return (
        <div>
            <div className={`fixed top-0 left-0 w-full ${(toggleStat) ? "h-[10%] opacity-100" : "h-0 opacity-0"} transition-all duration-500 ease-in overflow-hidden z-[200]`}>
                <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-rose-500 text-center">
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">{alerContent()}</b>
                    </span>
                </div>
            </div>
        </div>
    )
}
