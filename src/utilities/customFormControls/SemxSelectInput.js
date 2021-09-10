import { Field } from "formik";
import React from "react";

export default function SemxTextInput({ ...props }) {

  return (
    <div>
      <Field style={{marginTop:"10px",borderColor:"black"}} as="select" name={props.name}>
        {props.items.map((item) => (
          <option key={item.id} value={item.id} selected={item[`${props.itemKey}`]===props.selectedName?"selected":null}>
            {item[`${props.itemKey}`]}
          </option>
        ))}
      </Field>
    </div>
  );
}
