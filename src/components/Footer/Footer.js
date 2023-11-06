import * as React from 'react'
import { copyright, footerWrapper, socialWrapper, socialLink } from './Footer.module.css'
import { PiInstagramLogoDuotone, PiTelegramLogoDuotone, PiYoutubeLogoDuotone } from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className={`${footerWrapper} flex align-items-center justify-content-space-between`}>
      <div className={copyright}>Copyright © 2023 Egor Muratov</div>
      <div className={`${socialWrapper} flex justify-content-center`}>
        <a href="https://www.youtube.com/@diversnotes" target="_blank" aria-label="Youtube" className={socialLink} rel="noreferrer">
          <PiYoutubeLogoDuotone/>
        </a>

        <a href="https://instagram.com/diver_egor?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialLink} >
          <PiInstagramLogoDuotone />
        </a>

        <a href="https://t.me/diversnotes" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={socialLink} >
          <PiTelegramLogoDuotone />
        </a>
      </div>
    </footer>
  )
}

export default Footer
