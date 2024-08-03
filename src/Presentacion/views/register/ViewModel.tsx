import { useState } from 'react'
import { ApiDelivery } from "../../../../node-js/data/sources/remote/api/ApiDelivery";

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

  const register = async () => {
    try {
      const response = await ApiDelivery.post('user/create', values);
      console.log('RESPONSE: ' + JSON.stringify(response));
    } catch (error) {
      console.log('ERROR: ' + error);
    } 
    }

  return {
    ...values,
    onChange,
    register
  }
}

export default useRegisterViewModel