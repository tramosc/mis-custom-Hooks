import { useState } from 'react';

//esto recibe un objeto -- de las cuales recibe ciertos argumentos segun sea el objeto
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    //para resetear los formularios

    const reset = () => {
        setValues(initialState)
    }



    // handleInputChangepara poder leerlo rapidamente
    //{e} se va desestructurar a target
    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name]:target.value

        });
    }
    //     [estado del formulario, cambiar los valores del formulario]
    return [ values, handleInputChange, reset ];
}
