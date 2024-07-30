import { useState } from 'react'

const useRegisterViewModel = () => {

  const [ values, setValues ] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value})
  }

  const register = () => {
    console.log(JSON.stringify(values))
  }

  return {
    ...values,
    onChange,
    register
  }
}

export default useRegisterViewModel