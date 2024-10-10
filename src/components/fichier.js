import React from 'react'
import Sidebar from './sidebar'

export default function Fichier() {
  return (
    <div id="app">
        <Sidebar/>
        <div class="main-content">
      <div class="files-header">
        <h1>Mes fichiers</h1>
        <div class="search-bar">
          <i class="mdi mdi-magnify"></i>
          <input type="text" v-model="searchQuery" placeholder="Rechercher des fichiers..."/>
        </div>
        <div class="action-buttons">
          <button class="action-button" click="uploadFile">
            <i class="mdi mdi-upload"></i> Téléverser
          </button>
          <button class="action-button" click="createFolder">
            <i class="mdi mdi-folder-plus"></i> Nouveau dossier
          </button>
        </div>
      </div>
     <div class="nav">
     <div class="files-grid">
        <div v-for="file in filteredFiles" key="file.id" class="file-item" click="selectFile(file)">
          <i class="getFileIcon(file.type) file-icon"></i>
          <div id="file-names" class="file-icon mdi mdi-file"> filename </div>
          <div class="file-info"> filesize  -  filedate </div>
        </div>
      </div>

      <div class="files-grid">
        <div v-for="file in filteredFiles" key="file.id" class="file-item" click="selectFile(file)">
          <i class="getFileIcon(file.type) file-icon"></i>
          <div id="file-names" class="file-icon mdi mdi-file-pdf"> filename </div>
          <div class="file-info"> filesize  -  filedate </div>
        </div>
      </div>
      

      <div class="files-grid">
        <div v-for="file in filteredFiles" key="file.id" class="file-item" click="selectFile(file)">
          <i class="getFileIcon(file.type) file-icon"></i>
          <div id="file-names" class="file-icon mdi mdi-file"> filename </div>
          <div class="file-info"> filesize  -  filedate </div>
        </div>
      </div>

      <div class="files-grid">
        <div v-for="file in filteredFiles" key="file.id" class="file-item" click="selectFile(file)">
          <i class="getFileIcon(file.type) file-icon"></i>
          <div id="file-names" class="file-icon mdi mdi-file"> filename </div>
          <div class="file-info"> filesize  -  filedate </div>
        </div>
      </div>
     </div>

       <div v-if="contextMenu.show" class="context-menu" > 
        {/*style={{ top contextMenu.top + 'px', left contextMenu.left + 'px' }"*/}
        <ul>
          <li click="openFile"><i class="mdi mdi-open-in-new"></i> Ouvrir</li>
          <li click="downloadFile"><i class="mdi mdi-download"></i> Télécharger</li>
          <li click="shareFile"><i class="mdi mdi-share-variant"></i> Partager</li>
          <li click="shareFile"><i class="mdi mdi-information"></i> information</li>
          <li click="renameFile"><i class="mdi mdi-pencil"></i> Renommer</li>
          <li click="deleteFile"><i class="mdi mdi-delete"></i> Supprimer</li>
          <a href='connexion.js'>bonjour</a>
        </ul>
        
      </div>
      
      
      
      
    </div>
    
    </div>
    
  )
}
