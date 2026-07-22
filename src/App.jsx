import gingerbreadMan from "./assets/33.png";
import './App.css'

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'


function App() {
  const [rotation, setRotation] = useState(0)
  const [cookieCount, setCookieCount] = useState(0)
  const [showFeedback, setShowFeedback]
    = useState(false)
  const [cookieIcon, setCookieIcon] = useState('🍪')
  const [num, setNum] = useState(0)
  const [name, setName] = useState('Cookie Clicker')
  

  function handleClick() {
    setCookieCount(cookieCount + cookiesPerClick)
    setRotation(rotation + 36)
    setShowFeedback(true)

    setTimeout(() => {
      setShowFeedback(false)
    }, 500)
  }
  function handleReset() {
    setCookieCount(0)
    setRotation(0)
  }

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function cookieSwap() {
    setNum(randomNumberInRange(1, 5))
      if (num == 1) {
        setCookieIcon('🍪')
        setName('Cookie Clicker')
      }
      else if (num == 2) {
        setCookieIcon('🥠')
        setName('Cookie Clicker')
     }
      else if (num == 3) {
        setCookieIcon('🍩')
        setName('Donut Clicker')
     }
      else if (num == 4) {
        setCookieIcon('🧁')
        setName('Cupcake Clicker')
     }
      else if (num == 5) {
        setCookieIcon('🍬')
        setName('Candy Clicker')
     }
  }

  const cookiesPerClick = 1

  return (
    <div className="layout">
      {/*left dancing gingerbread man*/}
      <div className="gingerbread gingerbread-left">
        <img
          src={gingerbreadMan}
          alt="Dancing gingerbread man"
        />
      </div>

      <div className="gingerbread gingerbread-right">
        <div className="flip-gingerbread">
          <img
            src={gingerbreadMan}
            alt="Dancing gingerbread man"
          />
        </div>
      </div>
      <h1 className="title">{name}</h1>
      {/*
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      */}

      {/* dynamic element */}
      <button
        className="cookie-button"
        onClick={() => {handleClick(); cookieSwap()}}
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
      >
        {cookieIcon}
      </button>
      {showFeedback && (
        <div className="click-feedback">+{cookiesPerClick}</div>
      )}
      {/* Cookie Counter */}
      <div className="cookie-counter">
        <div>Cookies: {cookieCount}</div>
        <div>Per Click: {cookiesPerClick}</div>
      </div>
      <button
        type="button"
        className="reset-button"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>

  )
}

export default App
