import React from 'react'
import { img, wrapper, info } from './Preview.module.css'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Preview = () => {
  const { t } = useTranslation('preview')
  return (
		<div className={`flex align-items-center ${wrapper}`}>
			<div className={info}>
				<h3>{t('hello')}</h3>
				<p>{t('first_paragraph', { count: 192 })}</p>
				<p>{t('second_paragraph')}</p>
			</div>
			<img src={'https://i.pinimg.com/originals/86/41/c4/8641c4366d7212f113665886700af50a.jpg'} className={img} alt={'logo'}/>
		</div>
  )
}

export default Preview
