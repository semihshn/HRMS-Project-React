import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function SemxTextInput({...props}) {
    const [field,meta] = useField(props);

    return (
        <div>
            <FormField style={{marginTop:"15px"}} error={meta.touched && !!meta.error}>
                {props.type==="number"?props.itemlabel?<label style={{float:"left"}} ><b>{props.itemlabel}</b></label>:null:null}
                <input style={{borderColor:"black"}} placeholder={props.itemlabel?props.itemlabel:null} {...field} {...props} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ):null}
            </FormField>
        </div>
    )
}
