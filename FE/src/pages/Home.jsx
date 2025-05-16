import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import '../CSS/Home.css'
import { Link } from 'react-router'

function Home() {
    let URL = 'http://localhost:3000'
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data =>
                setData(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='cards'>
                {
                    data.map((x) =>
                        <div key={x._id} className='card'>
                            <div className='cardImg'><img src={x.img} alt="" /></div>
                            <div className='cardTitle'>
                                <p>{x.name}</p>
                                <p>{x.price}</p>

                            </div>
                            <div className='btn'>
                                <div><Link to ={`/detail/${x._id}`}><button>Detail</button> </Link></div>
                                <div><button>Basket</button></div>
                                <div><button>Favorite</button></div>
                            </div>

                        </div>
                    )
                }

            </div>






        </>
    )
}

export default Home