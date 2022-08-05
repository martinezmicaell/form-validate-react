import "./formInput.css"

import React from 'react'

const FormInput = ({placeholder, setUserName}) => {

    const handleChange = (e) => {
        setUserName(e.target.value);
    }


  return (
    <div className="formInput">
        {/* <label>Nombre de Usuario</label> */}
        <input type="text" placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}

export default FormInput