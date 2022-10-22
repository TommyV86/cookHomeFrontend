import cookAxios from "../cookHomeAxios"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"
import { useState } from "react"

export const SignUp = () => {
    // creer compte
    const [ isSubmit, setIsSubmit ] = useState(false)

    const postUser = (values) => {
        cookAxios.post('postUser', values).then(res=> {
                const user = JSON.stringify(res.data)
                console.log(user);
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
                    setIsSubmit(true)
                    console.log("user registred : " + values);
                }}>
                <Form className="form">
                    <h2>Créer un compte</h2>
                    <div className="container" id="input-form">
                        <TextField label='nom' name='name' type='text' placeholder='nom ...'/>
                        <TextField label='email' name='email' type='email' placeholder='email ...'/>
                        <TextField label='password' name='passwordHash' type='password' placeholder='mot de passe ...'/>
                    </div>

                    {!isSubmit ? 
                    <button  className="btn" type='submit'>
                        SignUp
                    </button> : window.location.assign('/MessageSuccessSignUp')}
                    
                </Form>
            </Formik>
        </div>
    )   
}