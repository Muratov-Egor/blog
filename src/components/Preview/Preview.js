import React from 'react'
import { wrapper, info, img } from './Preview.module.css'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Preview = () => {
  const { t } = useTranslation('preview')
  return (
	  <div className={`flex flex-wrap-reverse align-items-center justify-content-center ${wrapper}`}>
		  <div className={info}>
			  <h3>{t('hello')}</h3>
			  <p>{t('first_paragraph', { count: 150 })}</p>
			  <p>{t('second_paragraph')}</p>
		  </div>
		  <img src={'https://i.pinimg.com/originals/86/41/c4/8641c4366d7212f113665886700af50a.jpg'} className={img} />
	  </div>
  )
}

export default Preview
