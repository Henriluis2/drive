import React from 'react'
 

export default function connexion() {
  return (
    <div id="app"> 

     <div className='body'>
      
     <div className='wrapper'>
      <form  action=''>
      <h1>LegionDrive</h1>
       
        <div className='input-box'>
          <input type='text' placeholder='username' required></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='password' required></input>
        </div>
        <div className='remember'>
        <label><input type='checkbox'></input>  se souvenir de moi</label>
           <a href="">mot de passe oublié</a>
        </div>

        <button type='submit' className="btn">connexion</button>
        <div className="register">
            <p>je n'ais pas de compte <a href="/inscription "><i class="mdi mdi-currency-usd"></i>s'inscription</a></p>
        </div>
      </form>

     </div>

     </div>
      
    
     </div>
         
  )
}
