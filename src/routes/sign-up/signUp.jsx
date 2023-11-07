import React from 'react'

const SignUp = () => {
  return (
    <>
    <main className='w-100 flex justify-center'>
      <form className='grid bg-gray-200 p-5 my-[20%] w-[90%] rounded-3xl' action="" method="post">
        <h1 className='text-2xl mb-5'>Registrate</h1>
        <div className='grid grid-cols-2 gap-2'>
          <label className='row-start-1' htmlFor="first_name">Nombre</label>
          <input className='col-start-1 p-2 rounded-lg mb-5' type="text" name="first_name" id="first_name" required/>
          <label className='row-start-1' htmlFor="last_name">Apellido</label>
          <input className='col-start-2 p-2 rounded-lg mb-5' type="text" name="last_name" id="last_name" required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Correo</label>
          <input className='p-2 rounded-lg mb-5' type="email" name="email" id="email" required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="pass_word">Contraseña</label>
          <input className='p-2 rounded-lg mb-5' type="password" name='pass_word' id='pass_word' required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="address">Dirección</label>
          <input className='p-2 rounded-lg mb-5' type='text' name='address' id='address' required/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="birth_date">Fecha de nacimieto</label>
          <input className='p-2 rounded-lg mb-5' type="date" name="birth_date" id="birth_date" required/>
        </div>
        <button className='bg-white p-2 rounded-lg' type="submit">Enviar</button>
      </form>
    </main>
    </>
  )
}

export default SignUp