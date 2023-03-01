import React from 'react'
import AuthenFailed from './items/AuthenFailed'
import AuthenSuccess from './items/AuthenSuccess'

export default function Footer() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const elementFooter = (currentUser) ? <AuthenSuccess /> : <AuthenFailed />
  return (
    <div>
        {elementFooter}
    </div>
  )
}
