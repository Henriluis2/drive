import React from 'react'
import Sidebar from './sidebar'

export default function Partage() {
  return (
    <div id="app">
        <Sidebar/>
        <div class="main-content">
      <div class="files-header">
        <h1>Fichiers partagés avec moi</h1>
        <div class="search-bar">
          <i class="mdi mdi-magnify"></i>
          <input type="text" v-model="searchQuery" placeholder="Rechercher des fichiers..."/>
        </div>
      </div>
      <div class="files-list">
        <div v-for="file in filteredFiles" key="file.id" class="file-item">
          <i class="getFileIcon(file.type) file-icon" ></i>
          <div class="file-details">
            <div class="file-name">filename </div>
            <div class="file-info">filesize  - Modifié le filedate </div>
            <div class="file-owner">Partagé par fileowner </div>
          </div>
          <div class="file-actions">
            <button class="file-action" click="downloadFile(file)" title="Télécharger">
              <i class="mdi mdi-download"></i>
            </button>
            <button class="file-action" click="viewFileDetails(file)" title="Voir les détails">
              <i class="mdi mdi-information-outline"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
