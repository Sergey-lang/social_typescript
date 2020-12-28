import React, {FC} from 'react'
import s from './FormControl.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form'

type FormControlPropsType = {
   meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
   const hasError = touched && error

   return (
       <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
          <div className={s.childrenWrapperStyle}>
             {children}
          </div>
          {hasError && <span>{error}</span>}
       </div>
   )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
   const {input, meta, ...restProps} = props
   return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
   const {input, meta, ...restProps} = props
   return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}

//create wrapper
export const CreateField = (placeholder: string | null, name: string, component: FC<WrappedFieldProps>, validators: Array<any>, props = {}, text = '') => (
    <div>
       <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
       {text}
    </div>
)
