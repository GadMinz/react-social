import React from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";

export const FormElement = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span> {meta.error} </span>}
        </div>
    );
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)