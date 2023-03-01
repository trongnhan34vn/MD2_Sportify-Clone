import React from 'react'
import AuthenFailed from './items/AuthenFailed'
import AuthenSuccess from './items/AuthenSuccess'

export default function Navbar() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const elementNav = (currentUser) ? <AuthenSuccess /> : <AuthenFailed />
    return (
        <div>
            {/* Nav */}
            {/* <AuthenFailed /> */}
            {elementNav}
            {/* Nav */}
        </div>
    )
}
