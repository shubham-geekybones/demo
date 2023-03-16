import React from 'react'
import { IMAGES } from '../../utils'

const Header = () => {
    return (
        <>
            <div className='what-we-do-header-background p-[50px] md:p-[100]' >
                <p className='text-[35px] md:text-[45px]'>WHAT WE DO</p>
            </div>
            <div className='what-we-do-head-text'>
                <p>
                    OPPORTUNITIES
                </p>
            </div>
            <div className='w-full flex justify-between items-center flex-wrap mb-[100px]'>
                <div className="w-[98%] md:w-[60%] p-[50px] md:p-[100px] flex justify-between items-center">
                    <div id="et-simple-braket-block-1" className="et-simple-braket-block text-justify">
                        <div className="braket">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="braket-text text-[18px] md:text-[24px]">
                            Having worldwide penetration in trade and expertise in structured finance; we can facilitate trading opportunities across the globe. We can provide value proposition by offering back to back Letter of Credit and other customized finacial solutions.
                        </div>
                    </div>

                </div>
                <div className='what-to-do-header-image w-[90%] md:w-[40%]'>
                    <img src={IMAGES.SVG_IMAGE} alt="what-we-do" />
                </div>
            </div>

        </>
    )
}

export default Header