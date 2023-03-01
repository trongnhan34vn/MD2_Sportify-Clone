import React from 'react'
import HomePage from './HomePage'
import HomePageLogin from './HomePageLogin'

export default function Home() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const elementHomePage = (currentUser) ? <HomePageLogin /> : <HomePage />

    return (
        <div>
            {elementHomePage}
        </div>
    )
}
