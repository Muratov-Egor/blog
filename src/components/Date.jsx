import React from 'react'
import { format, parseISO } from 'date-fns'
import PropTypes from 'prop-types'
import { ru, en } from 'date-fns/locale'
import { useI18next } from 'gatsby-plugin-react-i18next'

const Date = ({ dateString }) => {
  const { language } = useI18next()

  const locale = language === 'ru' ? ru : en
  const formatDate = language === 'ru' ? 'dd.MM.yyyy' : 'LLLL d, yyyy'

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, formatDate, { locale })}</time>
}

Date.propTypes = {
  dateString: PropTypes.string,
  lang: PropTypes.string
}

export default Date
