import { Link } from "react-router-dom"
import cookAxios from '../cookHomeAxios'
import { Formik, Form} from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"

export const AddRecipe = () => {
// pour user connecté
    
    const postValues = (values) => {
        cookAxios.post('postRecipe', values).then((res)=>{
            const recipesStringified = JSON.stringify(res.data)
            localStorage.setItem('recipeValues', recipesStringified)
            console.log(" description inserted ")
            console.log(" name description : " + res.data.name)
            window.location.reload()
        })
    }

    const validate = Yup.object({
        name: Yup.string().max(20, 'max 20 caractères').required('required'),
        ingredients: Yup.string().max(100, '100 caratères max').required('required'),
        difficulty: Yup.string().max(10, '10 caractères max'),
        description: Yup.string().max(1800, 'trop de texte !').required('required'),
        time: Yup.number().required('required')
    })

    return (
    <div>
        <Formik
            initialValues={{
                name: '',
                ingredients: '',
                difficulty: '',
                description: '',
                time: ''
            }}
            validationSchema={validate}
            onSubmit={ (values) =>{
                    postValues(values);
                    alert('values validated ')
                }
            }>
            <Form>
                <h2>resérvé aux users connecté</h2>
                <h2>AddRecipe</h2>
                <TextField label='nom de la recette' name='name' type='text'/>
                <TextField label='ingredients' name='ingredients' type='text'/>
                <TextField label='description' name='description' type='text'/>
                <TextField label='difficulté' name='difficulty' type='text'/>
                <TextField label='temps de préparation' name='time' type='number'/>

                <button type='submit'>Au placard :p</button>
            </Form>
        </Formik>
        <Link to='/'><button>Home</button></Link>
    </div>
    )
}