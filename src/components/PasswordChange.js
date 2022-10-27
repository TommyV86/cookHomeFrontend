import cookAxios from "../cookHomeAxios"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"
import { useState } from "react"
import { Link } from "react-router-dom"

export const PasswordChange = () => {
    const token = window.location.search.split("=")[1]
    const [ message, setMessage ] = useState(false)

    const postNewPswd = (newPswd) => {
        cookAxios.put('/modifyPswd/' + token, newPswd).then(res => {
            console.log(res.data) 
            setMessage(true)
        })
    }

    const validate = Yup.object({
        password: Yup.string().min(8, 'minimum 8 caractères')
        .required('mot de passe obligatoire'),
        confirmPassword: Yup.string().min(8, 'minimum 8 caractères')
        .required('mot de passe obligatoire')    
    })

    return (
        <div>
            <Formik initialValues={{
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={newPswd=>{
                postNewPswd(newPswd)
                console.log("changes pswd data on formik");
            }}>
            <Form className="form">
                <h2>Nouveau mot de passe</h2>
                <div className="container" id="input-form">
                    <TextField label='password' name='password' type='password' placeholder='mot de passe ...'/>
                    <TextField label='confirmPassword' name='confirmPassword' type='password' placeholder='confirmer mot de passe ...'/>
                </div>

                {!message ? <button className="btn" type='submit'>
                    Changer mot de passe
                </button> : <Link to="/SignIn">mot de passe changé</Link>}
            </Form>
        </Formik>
    </div>
    )
        
}