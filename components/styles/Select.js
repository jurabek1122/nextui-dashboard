import { styled } from '@nextui-org/react';
import React from 'react'

const Select = ({ value, handleChage, options, title, id }) => {
    const StyledSelect = styled('select', {
    padding: '8px',
    width: '100%',
    border: '3px solid #d9dedb',
    borderRadius: '14px',
    fontSize: '16px',
    outline: 'none',
    margin: '0'
  })
  return (
    <>
        <StyledSelect 
          id={id}
          value={value} 
          onChange={handleChage}
        >
            <option  value='default' disable='true' hidden >{title}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
        </StyledSelect>
    </>
    
  )
}

export default Select

