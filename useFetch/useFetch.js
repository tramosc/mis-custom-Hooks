import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
   //useRef - resolver problemas de rendimiento - renderizado
   const esMontado = useRef(true);

   //solo la primera vez que se ejecuta
   useEffect( () => {

       return() =>{
           esMontado.current = false;
       }

   },[])
    const [state, setState] = useState({data: null, loading: true, error: null})
//Cuando el url cambia
    useEffect(() => {

        //cuando queremos traer el loading cada vez que damos siguiente
        setState({data: null, loading: true, error: null});

        //Cuando hay un efecto en el url, se recibe una respuesta
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if(esMontado.current){
                  setState({
                    loading: false,
                    error: null,
                    data
                })  
                }else{
                    console.log("El setState no se llamo");
                }
                
            });

    },[url]);
    return state;
}
 
export default useFetch;