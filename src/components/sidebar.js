import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div class="sidebar">
        <h2><a href='/'>CloudStore</a></h2>
        <div class="user-profile">
          <a href='/compte'>
            <img src='nca.jpg'  alt="nca" class="user-avatar"/>
            <span class="user-name">nom</span>
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="/"><i class="mdi mdi-view-dashboard"></i> Tableau de bord</a></li>
            <li><a href="/fichier"><i class="mdi mdi-folder"></i> Mes fichiers</a></li>
            <li><a href="/partage"><i class="mdi mdi-share-variant"></i> Partagés avec moi</a></li>
            <li><a href="/compte"><i class="mdi mdi-account"></i> Mon compte</a></li>
            <li><a href="/contact"><i class="mdi mdi-currency-usd"></i> Tarification</a></li>
            <li><a href="/connexion "><i class="mdi mdi-currency-usd"></i>Se connecter</a></li>
            <li><a href="/inscription "><i class="mdi mdi-currency-usd"></i>S'inscription</a></li>
          </ul>
        </nav>
        <div class="storage-info">
          <h4>Utilisation du stockage</h4>
          <div class="storage-bar">
            <div class="storage-used">storagePercentage + %</div>
        </div>
          <p class="storage-text">storageUsed  Go utilisés sur storageTotal  Go</p>
      </div>
    </div>
  </div>
  )
}
