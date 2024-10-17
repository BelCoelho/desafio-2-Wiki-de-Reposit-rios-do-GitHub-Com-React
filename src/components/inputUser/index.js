import React from 'react'
import {InputContainer} from './styles'

function InputUser({value, onChange}) {
  return (
    <InputContainer>
      <input value = {value} onChange={onChange} placeholder="Username"/>
    </InputContainer>
  )
}

export default InputUser;