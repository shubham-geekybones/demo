import React from 'react'
import { members } from '../../constants'

const Directors = () => {
    return (
        <>
            <div className='director-section  px-12 py:5 md:px-[150px] md:py-10'>
                <p className='md:text-center our-team-p text-[18px] md:text-[28px] py-[40px] md:my-[60px]'>
                    Our team comprises persons with varied experience and impeccable professional background
                </p>
                <div>
                    {members.map((member, i) => {
                        const { name, positon, para1, para2, url } = member
                        return (
                            <div className={`director-card py-[30px] md:py-[80px] ${name}`} key={i}>
                                <div className='w-[100%] md:w-[50%]'>
                                    <div>
                                        <p className='name'>
                                            {name}
                                        </p>
                                        <p className='cursive'>
                                            {positon}
                                        </p>
                                    </div>
                                    <div className='paragraph'>
                                        <p>{para1}</p>
                                        <p className='mt-3'>{para2}</p>
                                    </div>
                                </div>
                                <div className='w-[100%] md:w-[50%]'>
                                    <div className='outer-layer w-[300px] h-[300px] mt-[50px] md:mt-0'>
                                        <div className='inner-layer'>
                                            <img className="object-cover" src={url} alt={name} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Directors