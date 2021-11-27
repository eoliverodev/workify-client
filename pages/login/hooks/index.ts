import { useState } from "react";
import { IFormData } from '../index.d.ts';

export const useFormData = () => {
  const initialState = {
    email: null,
    password: null
  }

  const [formData, setFormData] = useState<IFormData>(initialState)

  const handleSetFormData = (data: IFormData) => {
    setFormData(data);
  }

  return [
    formData,
    handleSetFormData
  ]
}