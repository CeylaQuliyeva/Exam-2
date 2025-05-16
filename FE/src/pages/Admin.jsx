import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import '../CSS/Admin.css'

function Admin() {

    let URL = 'http://localhost:3000'

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data =>
                setData(data))
    }, [])

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/${id}`, {
                method: "DELETE"
            })
            setData(prev => prev.filter((x) => x._id !== id))

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Helmet>
                <title>Admin</title>
            </Helmet>
            <input type="text" placeholder='Search Name' value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <table border={1} >
                <thead>
                    <tr>
                        <th>imgUrl</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Button</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data
                            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                            .map((x) =>
                                <tr key={x._id}>
                                    <td className='tdImg'><img src={x.img} alt="" /></td>
                                    <td>{x.name}</td>
                                    <td>{x.price}</td>
                                    <td><button onClick={() => handleDelete(x._id)}>Delete</button></td>
                                </tr>
                            )
                    }

                </tbody>

            </table>

        </>
    )
}

export default Admin