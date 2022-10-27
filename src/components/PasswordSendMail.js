import cookAxios from "../cookHomeAxios"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"
import { useState } from "react"

export const PasswordSendMail = () => {

    const [ message, setMessage ] = useState(false)

    const postMail = (values) => {
        cookAxios.post('getEmailforNewPswd', values).then(res => {
            console.log('mail catched on request from backend : ' + res.data);
        })
        setMessage(true)
    }

    const validate = Yup.object({
        email: Yup.string().email('email non valide').required('email obligatoire'),
    })

    return (
        <div>
            <Formik initialValues={{
                email: ''
            }}
            validationSchema={validate}
            onSubmit={values=>{
                postMail(values)
                console.log("changes pswd data on formik");
            }}>
                <Form className="form">
                    <h2>Envoi de mail pour nouveau mot de passe</h2>
                    <div className="container" id="input-form">
                        <TextField label='email' name='email' type='email' placeholder='email ...'/>
                    </div>

                    {!message ? <button  className="btn" type='submit'>
                            Envoi
                        </button> : <h2>email envoyé, vérifier votre boite email</h2>}
                </Form>
            </Formik>
        </div>
    )
        
}