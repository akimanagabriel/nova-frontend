import React from 'react'
import SliderComponent from '../components/SliderComponent'
import InfoBar from '../shared/InfoBar'

import computer from '../images/computer1.jpg'
import printer from '../images/epson.jfif'
import macbook from '../images/macbook.jfif'

function Home() {

  const images = [
    {
      id: 1,
      name: printer,
      title: 'Best quality printer'
    },
    {
      id: 2,
      name: macbook,
      title: 'qualified Macbook laptop'
    },
    {
      id: 3,
      name: computer,
      title: 'Higher performance computer'
    },
  ]

  const info = [
    {
      id: 1,
      title: 'About us',
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`
    },
    {
      id: 2,
      title: 'Premises',
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`
    },
    {
      id: 3,
      title: 'Development history',
      content: `Explain why someone should contact your business. Describe how your business can help solve the visitors' problems.Include an email and phone number so visitors can get in touch with you on their first attempt.Include a short form using fields that'll help your business understand who's contacting them.`
    },
  ]

  return (
    <div>
      <div className='py-3 px-0 overflow-hidden '>
        <SliderComponent images={images} />
      </div>

      <InfoBar updates={info} />

    </div>
  )
}

export default Home
