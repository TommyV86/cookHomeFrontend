import { Link } from "react-router-dom"
import cookAxios from '../cookHomeAxios'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { SelectField } from "./SelectField"
import { TextField } from "./TextField"
import { TextFieldDescription } from "./TextFieldDescription"
import { TextFieldIngredients } from "./TextFieldIngredients"

export const AddRecipe = () => {
// pour user connecté

    const selectOriginRecipes = 
        <SelectField label='Origine' name='origin' type='text'>
            <option selected>Choisir l'origine de la recette ...</option>
            <option value="Africaine">Africaine</option>
            <option value="Américaine">Américaine</option>
            <option value="Asiatique">Asiatique</option>
            <option value="Européenne">Européenne</option>
            <option value="Océanienne">Océanienne</option>
        </SelectField>
    
    const postValues = (values) => {
        cookAxios.post('postRecipe', values).then((res)=>{
            const recipesStringified = JSON.stringify(res.data)
            localStorage.setItem('recipeValuesHome', recipesStringified)
            console.log(" description inserted ")
            console.log(" name description : " + res.data.name)
            window.location.reload()
        })
    }

    const validate = Yup.object({
        origin: Yup.string().max(40, 'max 40 caractères').required('required'),
        name: Yup.string().max(80, 'max 80 caractères').required('required'),
        ingredients: Yup.string().max(1800, '100 caratères max').required('required'),
        difficulty: Yup.string().max(10, '10 caractères max'),
        description: Yup.string().max(1800, 'trop de texte !').required('required'),
        time: Yup.number().required('required')
    })

    return (
    <div>
        <Formik
            initialValues={{
                origin: '',
                name: '',
                ingredients: '',
                difficulty: '',
                description: '',
                time: Yup.number
            }}
            validationSchema={validate}
            onSubmit={ (values) =>{
                    postValues(values);
                    alert('values validated ')
                }
            }>
            <Form className="form">
                <h2>resérvé aux users connecté</h2>
                <h2>AddRecipe</h2>
                <div className="container" id="input-form">
                    {selectOriginRecipes}                    
                    <TextField label='nom de la recette' name='name' type='text' placeholder="nom ..."/>
                    <TextField label='difficulté' name='difficulty' type='text' placeholder="difficulté ..."/>
                    <TextField label='temps de préparation' name='time' type='number' placeholder="temps ..."/>
                    <TextFieldIngredients label='ingrédients' name='ingredients' type='text' placeholder="ingrédients ..."/>
                    <TextFieldDescription label='description' name='description' type='text' placeholder="Décrivez votre recette ..."/>
                </div>

                <button  className="btn" type='submit'>Au placard :p</button>
            </Form>
        </Formik>
        <Link to='/'><button type="button" className="btn">Home</button></Link>
    </div>
    )
}