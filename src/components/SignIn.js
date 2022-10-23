import cookAxios from "../cookHomeAxios"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"
import { useState } from "react"

export const SignIn = () => {
    // connexion
    const [ isSubmit, setIsSubmit ] = useState(false)

    const getUser = (values) => {
            cookAxios.post('getUser', values).then(res=>{
            const data = JSON.stringify(res.data)
            sessionStorage.setItem('userConnected', data)
            window.location.assign('/')
        })
    }

    const validate = Yup.object({
        email: Yup.string().email('email non valide').required('email obligatoire'),
        password: Yup.string().min(8, 'minimum 8 caractères')
        .required('mot de passe obligatoire')
    })

    return (
        <div>
            <Formik initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={values=>{
                    getUser(values)
                    setIsSubmit(true)
                    console.log("sign in data on formik");
                }}>
                <Form className="form">
                    <h2>Connexion</h2>
                    <div className="container" id="input-form">
                        <TextField label='email' name='email' type='email' placeholder='email ...'/>
                        <TextField label='password' name='password' type='password' placeholder='mot de passe ...'/>
                    </div>

                    {!isSubmit ? 
                    <button className="btn" type='submit'>
                        SignIn
                    </button> : <a href="/SignIn">email ou mot de passe incorrect, veuillez recommencer</a>}
                </Form>
            </Formik>
        </div>
    )
} 