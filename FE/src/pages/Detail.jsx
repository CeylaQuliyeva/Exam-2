import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'
import '../CSS/Detail.css'

function Detail() {
    const { id } = useParams()
    const [detail, setdetail] = useState({})

    let URL = ('http://localhost:3000/' + id)

    useEffect(() => { 
        fetch(URL)
            .then(res => res.json())
            .then(data =>
                setdetail(data))
    }, [id])

    return (
        <>
            <Helmet>
                <title>Detail</title>
            </Helmet>

            <div className='detailCards'>
                <div key={detail._id} className='detailCard'>
                    <div className='detailCardImg'><img src={detail.img} alt="" /></div>
                    <div className='detailCardTitle'>
                        <p>{detail.name}</p>
                        <p>{detail.price}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail