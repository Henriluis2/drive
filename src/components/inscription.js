import React from 'react'
 

export default function inscription() {
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
          <input type='e-mail' placeholder='Adresse mail' required></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='password' required></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Confirm password' required></input>
        </div>
        <div className='remember'>
        <label><input type='checkbox'></input> j'accepte les condition</label>
            
        </div>

        <button type='submit' className="btn">connexion</button>
        <div className="register">
            <p>J'ai deja un compte <a href="/connexion "><i class="mdi mdi-currency-usd"></i>se connecter</a></p>
        </div>
      </form>

     </div>

     </div>
      
    
     </div>
         
  )
}
