import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;
    const countDown = () => {
        const destination = new Date('June 1, 2023').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = destination - now
            const days = Math.floor(difference / (1000 * 60 * 60 * 24))

            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(difference % (1000 * 60) / (1000))

            if (destination < 0) {
                clearInterval(interval.current)
            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect(() => { countDown() })
    return (
        <div className='clock-wrapper'>
            <div className='clock-data'>
                <div className='clock-data_content'>
                    <h3>{days}</h3>
                    <h5>Ngày</h5>
                </div>
                <span>:</span>
            </div>
            <div className='clock-data'>
                <div className='clock-data_content'>
                    <h3>{hours}</h3>
                    <h5>Giờ</h5>
                </div>
                <span>:</span>
            </div>
            <div className='clock-data'>
                <div className='clock-data_content'>
                    <h3>{minutes}</h3>
                    <h5>Phút</h5>
                </div>
                <span>:</span>
            </div>
            <div className='clock-data'>
                <div className='clock-data_content'>
                    <h3>{seconds}</h3>
                    <h5>Giây</h5>
                </div>
            </div>
        </div>
    )
}

export default Clock