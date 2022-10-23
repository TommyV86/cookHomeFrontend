import cookAxios from "../cookHomeAxios"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"
import { useState } from "react"

export const SignUp = () => {
    // creer compte
    const [ messageError, setMessageError ] = useState(false)

    const postUser = (values) => {
        if(cookAxios.defaults){
            setMessageError(true)
        }
        cookAxios.post('postUser', values).then(res=> {
                const user = JSON.stringify(res.data)
                console.log(user);
                window.location.assign('/SignIn')
            }
        )
    }

    const validate = Yup.object({
        name: Yup.string().required('nom obligatoire'),
        email: Yup.string().email().required('email obligatoire'),
        passwordHash: Yup.string().min(8, 'minimum 8 caractères')
        .required('mot de passe obligatoire')
    })
    
    return (      
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    passwordHash: ''
                }}
                validationSchema={validate}
                onSubmit={values=>{
                    postUser(values)
                    console.log("sign up values on formik");
                }}>
                <Form className="form">
                    <h2>Créer un compte</h2>
                    <div className="container" id="input-form">
                        <TextField label='nom' name='name' type='text' placeholder='nom ...'/>
                        <TextField label='email' name='email' type='email' placeholder='email ...'/>
                        <TextField label='password' name='passwordHash' type='password' placeholder='mot de passe ...'/>
                    </div>

                    {!messageError ? <button  className="btn" type='submit'>
                        SignUp
                    </button> : <a href="/SignUp">email déjà existant, veuillez entrer un autre mail</a>}
                    
                </Form>
            </Formik>
        </div>
    )   
}