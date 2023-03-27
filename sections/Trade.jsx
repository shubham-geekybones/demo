import React from 'react'
import { useRouter } from 'next/router'
const Trade = () => {
    const { push } = useRouter()
    return (
        <div className='trade'>
            <div className='w-full flex justify-between items-center flex-wrap px-4'>
                <div className="w-[98%] md:w-[60%] pl-[30px] md:pl-[100px] flex justify-between items-center">
                    <div id="et-simple-braket-block-1" className="et-simple-braket-block text-justify">
                        <div className="braket-text">
                            <h2 className='text-[18px] md:text-[24px] mb-3'>Quick & Trustworthy</h2>
                            <h3 className='text-[35px] md:text-[45px]'>
                                Trade / Structured Finance Enquiry
                            </h3>
                            <h2 className='text-[18px] md:text-[24px]'>
                                (To facilitate Trade worldwide)
                            </h2>
                        </div>
                    </div>

                </div>
                <div className='w-[98%] md:w-[60%] px-[30px] md:px-[100px] pt-[25px]'>
                    <div >
                        <h2 className='text-[18px] md:text-[24px]'>
                            Send us your Trade / Structured Finance Enquiry.
                            <br></br>
                            We will be pleased to revert you at the earliest
                        </h2>
                    </div>
                    <button className='send-message mt-4 text-[14px] md:text-[16px]' onClick={() => push('/contact-us')}>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    )
}

export default Trade