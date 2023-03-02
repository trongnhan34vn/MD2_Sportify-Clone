import React from 'react'
import { useLocation } from 'react-router-dom'
import AuthenFailed from './items/AuthenFailed'
import AuthenSuccess from './items/AuthenSuccess'

export default function Footer() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const location = useLocation()

  const elementFooter = (currentUser) ? <AuthenSuccess /> : <AuthenFailed />
  return (
    <div className={`${location.pathname == "/sign-up" ? "hidden" : location.pathname == "/login" ? "hidden" : ""}`}>
        {elementFooter}
    </div>
  )
}
