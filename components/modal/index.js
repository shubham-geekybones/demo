import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Modals = ({ setOpens, user }) => {
    const { name, para1, para2, positon, url } = user || {}
    return (
        <>
            <Modal
                style={{ height: 'calc(100vh - 200px)' }}
                bodyStyle={{ overflowY: 'scroll' }}
                title={false}
                centered
                footer={false}
                open={true}
                onOk={() => setOpens(false)}
                onCancel={() => setOpens(false)}
                width={1000}
            >
                <div className={`director-card flex-col-reverse md:flex-row-reverse y-[30px] ${name}`}>
                    <div className='w-[100%] md:w-[60%]'>

                        <div className='paragraph text-[18px]'>
                            <p className='name'>
                                {name}
                            </p>
                            <p className='cursive font-bold'>
                                {positon}
                            </p>
                            <p>{para1}</p>
                            <p className='mt-3'>{para2}</p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[40%]'>
                        <div className='outer-layer mr-[auto] w-[300px] h-[300px] mt-[50px] md:mt-0'>
                            <div className='inner-layer'>
                                <img className="object-cover shadow-md" src={url} alt={name} />
                            </div>
                        </div>
                        {/* <div>
                            <p className='name'>
                                {name}
                            </p>
                            <p className='cursive font-bold'>
                                {positon}
                            </p>
                        </div> */}
                    </div>

                </div>
            </Modal>
        </>
    );
};

export default Modals;