import { useState } from 'react'
import { ApiDelivery } from '../../../../node-js/data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/AuthRepository';

const useRegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState("")

  const [ values, setValues ] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value})
  }

  const isValidForm = (): boolean => {
    if(values.name === '') {
      setErrorMessage('El nombre es requerido')
      return false
    }
    if(values.lastname === '') {
      setErrorMessage('El apellido es requerido')
      return false
    }
    if(values.email === '') {
      setErrorMessage('El correo es requerido')
      return false;
    }
    if(values.phone === '') {
      setErrorMessage('El celular es requerido')
      return false
    }
    if(values.password === '') {
      setErrorMessage('La contraseña es requerida')
      return false
    }
    if(values.confirmPassword === '') {
      setErrorMessage('La confirmación de la contraseña es requerida')
      return false
    }
    return true
  }

  const register = async () => {
    if(!isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log(`Result ${JSON.stringify(response)}`)
    }
    const response = await RegisterAuthUseCase(values);
     console.log('result: ' + JSON.stringify(response))
  }

  return {
    ...values,
    onChange,
    register,
    errorMessage
  }
}

export default useRegisterViewModel