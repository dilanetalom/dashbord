import React from 'react'
import { UpdateData } from '../../Data/Data'
import './Updates.css'


function Updates() {
    return (
        <div className='Updates'>
            {
                UpdateData.map((update) => {
                    return (
                        <div className='update'>
                            <img src={update.img} width={50} height={50} alt="" />
                            <div className='noti'>
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <span>{update.name}</span>
                                    <span>{update.noti}</span>
                                </div>
                                <span>
                                    {update.time}
                                </span>
                            </div>



                        </div>
                    )
                })
            }
        </div>
    )
}

export default Updates