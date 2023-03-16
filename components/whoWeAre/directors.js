import React, { useState } from 'react'
import { members } from '../../constants'
import Modals from '../modal';

const Directors = () => {
    const [open, setOpen] = useState(false);
    const [getMember, setMember] = useState({});

    return (
        <>
            <div className='director-section  px-12 py:5 md:px-[150px] md:py-5'>
                <p className='md:text-center our-team-p text-[18px] md:text-[28px] py-[40px] md:my-[10px] text-[#9a9a9a;]'>
                    Our team comprises persons with varied experience and impeccable professional background
                </p>
                <div className='director-card '>
                    {members.map((member, i) => {
                        const { name, positon, para1, para2, url } = member
                        return (
                            <div className={`m-4 p-4 ${name} shadow-md`} key={i} onClick={() => {
                                setOpen(true)
                                setMember(member)
                            }}>

                                <div className='w-[100%]'>
                                    <div className='outer-layer w-[300px] h-[300px] mt-[50px] md:mt-0'>
                                        <div className='inner-layer'>
                                            <img className="object-cover" src={url} alt={name} />
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <p className='name text-center'>
                                            {name}
                                        </p>
                                        <p className='cursive text-center'>
                                            {positon}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {open && <Modals setOpens={setOpen} user={getMember} />}
        </>
    )
}

export default Directors