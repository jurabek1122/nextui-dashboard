import { Input } from '@nextui-org/react'
import { MultiSelect } from "react-multi-select-component";
import Select from '../styles/Select';

const CustomItem = ({ type }) => {
    
  switch (type) {
    case 'select':
      return <select>
        <option  value='default' disable='true' hidden >{type}</option>
      </select>
    case 'multiSelect':
      return <select>
      <option  value='default' disable='true' hidden >{type}</option>
    </select>
    case 'text':
      return <Input 
        value={type}
      />
    case 'raqam':
      return <Input 
        value={type}
      />
    case 'textarea':
      return <Input 
        value={type}
      />
    case 'boolean':
      return <Input 
        value={type}
      />
    case 'date':
      return <Input 
        value={type}
      />
  }
  return (
    <div>{type}</div>
  )
}

export default CustomItem