import React from 'react'
import SliderComponent from '../components/SliderComponent'
import InfoBar from '../shared/InfoBar'

import computer from '../images/computer1.jpg'
import printer from '../images/epson.jfif'
import macbook from '../images/macbook.jfif'

function Home() {

  const images = [
    {
      name: printer
    },
    {
      name: macbook
    },
    {
      name: computer
    },
  ]

  const info = [
    {
      title: 'About us',
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`
    },
    {
      title: 'Premises',
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`
    },
    {
      title: 'Development history',
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`
    },
  ]

  return (
    <div>
      <div className='px-3 w-[400px] mt-3'>
        <SliderComponent images={images} />
      </div>

      <InfoBar updates={info} />

    </div>
  )
}

export default Home
