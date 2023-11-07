import React from 'react'

const SignUp = () => {
  return (
    <>
      <form action="" method="post">
        <h1>Registrate</h1>
        <div>
          <label htmlFor="first_name">Nombre</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">Apellido</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="pass_word">Contraseña</label>
          <input type="password" name='pass_word' id='pass_word'/>
        </div>
        <div>
          <label htmlFor="address">Dirección</label>
          <input type='text' name='address' id='address'/>
        </div>
        <div>
          <label htmlFor="birth_date">Fecha de nacimieto</label>
          <input type="date" name="birth_date" id="birth_date"/>
        </div>
      </form>
    </>
  )
}

export default SignUp