import React from 'react'
import Sidebar from './sidebar'

export const Compte = () => {
  return (
    <div id="app">
        <Sidebar/>
        <div class="main-content">
      <h1>Mon compte</h1>
      
      <div class="account-section">
        <h2>Informations personnelles</h2>
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input type="text" id="name" v-model="user.name"/>
        </div>
        <div class="form-group">
          <label for="email">Adresse e-mail</label>
          <input type="email" id="email" v-model="user.email"/>
        </div>
        <div class="form-group">
          <label for="avatar">Photo de profil</label>
          <label for="avatar-upload" class="custom-file-upload">
            <i class="mdi mdi-camera"></i> Changer la photo
          </label>
          <input id="avatar-upload" type="file" change="onFileChange"/>
        </div>
        <button class="btn" click="updatePersonalInfo">Mettre à jour</button>
      </div>
      
      <div class="account-section">
        <h2>Changer le mot de passe</h2>
        <div class="form-group">
          <label for="current-password">Mot de passe actuel</label>
          <input type="password" id="current-password" v-model="passwords.current"/>
        </div>
        <div class="form-group">
          <label for="new-password">Nouveau mot de passe</label>
          <input type="password" id="new-password" v-model="passwords.new"/>
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirmer le nouveau mot de passe</label>
          <input type="password" id="confirm-password" v-model="passwords.confirm"/>
        </div>
        <button class="btn" click="changePassword">Changer le mot de passe</button>
      </div>
      
      <div class="account-section">
        <h2>Paramètres de confidentialité</h2>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="privacy.newsletter"/> Recevoir la newsletter
          </label>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="privacy.publicProfile"/> Profil public
          </label>
        </div>
        <button class="btn" click="updatePrivacySettings">Sauvegarder les paramètres</button>
      </div>
      
      <div class="account-section">
        <h2>Supprimer le compte</h2>
        <p>Attention : cette action est irréversible et supprimera toutes vos données.</p>
        <button class="btn btn-danger" click="deleteAccount">Supprimer mon compte</button>
      </div>
    </div>
    </div>
  )
}
