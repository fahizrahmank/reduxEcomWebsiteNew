import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

const Button = (props,onclick) => {
  return (
    <div>
    <MDBBtn className={props.classes} color={props.color}>
        {props.text}
    </MDBBtn>    
    </div>
  )
}

export default Button
