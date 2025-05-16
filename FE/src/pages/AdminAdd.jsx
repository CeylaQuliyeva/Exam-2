import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AdminAdd() {
    return (
        <>
            <Helmet>
                <title>AdminAdd</title>
            </Helmet>
            <Formik
                initialValues={{ img: '', name: '', price: '' }}
                validationSchema={Yup.object({
                    img: Yup.string()
                        .min(5, 'Minimum 5 herf ola biler')
                        .required('Boş qoymaq olmaz'),
                    name: Yup.string()
                        .max(15, 'Maksimum 15 herf ola biler')
                        .required('Boş qoymaq olmaz'),
                    price: Yup.number().required('Boş qoymaq olmaz'),
                })}
                onSubmit={(values) => {
                    console.log(values);
                    fetch("http://localhost:3000", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(values)
                    })
                        .then(res => res.json())
                        .then(() => alert('Ugurla elave edildi'))

                }}
            >
                <Form>
                    <label htmlFor="img">İmgUrl</label>
                    <Field name="img" type="text" />
                    <ErrorMessage name="img" />

                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="price" />
                    <ErrorMessage name="price" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </>
    )
}

export default AdminAdd