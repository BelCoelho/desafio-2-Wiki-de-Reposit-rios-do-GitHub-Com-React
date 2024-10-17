import React from 'react'
import {InputContainer} from './styles'

function InputRepositorio({value, onChange}) {
  return (
    <InputContainer>
      <input value = {value} onChange={onChange} placeholder="Repositório"/>
    </InputContainer>
  )
}

export default InputRepositorio;