import React from 'react'
import './Newsletter.css'

export default function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exxlusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
