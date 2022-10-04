import React from 'react';
import { ErrorMessage, useField } from 'formik';


export const TextFieldDescription = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <textarea className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off" name="texte_topic" rows="3" type="text"></textarea>
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}