import React from 'react'
import ServiceComponet from '../components/ServiceComponet'

function ServiceWrapper() {

    const serviceList = [
        {
            title: 'CCTV Camera installation',
            description: `CCTV stands for Closed Circuit Television. It is a video system that consists of strategically placed video cameras around an area that records footage, and is then transmitted to a display monitor(s) for real-time viewing as well as footage playback.`,
            image: 'https://media.istockphoto.com/id/1333702917/photo/surveillance-video-of-the-long-term-care-facility.jpg?b=1&s=170667a&w=0&k=20&c=sMNVbSLNnlxvNJ1qM0h4KE-hFMoMJbGbR_vEf8VTZao='
        },
        {
            title: 'Trainning',
            description: `Training is teaching, or developing in oneself or others, any skills and knowledge or fitness that relate to specific useful competencies. Training has specific goals of improving one's capability, capacity, productivity and performance.`,
            image: 'https://cdn.dribbble.com/users/1450874/screenshots/16354231/media/51cb146960fcb924ff575aa315308b06.jpg?compress=1&resize=400x300'
        },
        {
            title: 'Software Developments',
            description: `Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.`,
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        },
    ];



    return (
        <>
            <div className='mt-4'>
                <h1 className="text-2xl">Services</h1>

                {serviceList.map((service, index) => {
                    return (
                        <div key={index}>
                            <ServiceComponet service={service} />
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default ServiceWrapper
