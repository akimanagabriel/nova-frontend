import React from 'react'
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

function ServiceComponet({ service }) {

    const shareConfig = {
        shareUrl: "https://frontendnova.netlify.app",
        size: 30,
        rounded: true
    }

    return (
        <>
            <div className='py-5'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div>
                        <img src={service.image} alt="service profile" className='w-100 md:max-w-sm rounded' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-[600]'>{service.title}</h1>
                        <p className='mt-3'>{service.description}</p>

                        <div className="mt-6">
                            <p className='pb-2'>Share service to the following media</p>
                            <div className="flex space-x-2">

                                <WhatsappShareButton>
                                    <WhatsappIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </WhatsappShareButton>

                                <FacebookShareButton url={shareConfig.shareUrl} hashtag={'Nova-company-ltd'}>
                                    <FacebookIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </FacebookShareButton>

                                <TwitterShareButton>
                                    <TwitterIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </TwitterShareButton>

                                <EmailShareButton subject='Share from nova company ltd'>
                                    <EmailIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </EmailShareButton>

                                <LinkedinShareButton>
                                    <LinkedinIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </LinkedinShareButton>

                                <TelegramShareButton>
                                    <TelegramIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </TelegramShareButton>

                                <FacebookMessengerShareButton appId='123'>
                                    <FacebookMessengerIcon size={shareConfig.size} round={shareConfig.rounded} />
                                </FacebookMessengerShareButton>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceComponet
