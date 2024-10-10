import React from 'react'
import Sidebar from './sidebar'

export default function Dashbord() {
  return (
    <div id="app">
        <Sidebar/>
        <div class="main-content">
      <h1>Tableau de bord</h1>
      <div class="dashboard-grid">
        <div class="dashboard-card">
          <h3>Utilisation de l'espace</h3>
          <div class="chart-container">
            <canvas id="storageChart"></canvas>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>Activité récente</h3>
          <div class="chart-container">
            <canvas id="activityChart"></canvas>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>Actions rapides</h3>
          <div class="quick-actions">
            <button class="action-button" click="uploadFile">Téléverser un fichier</button>
            <button class="action-button" click="createFolder">Créer un dossier</button>
            <button class="action-button" click="shareFile">Partager un fichier</button>
          </div>
        </div>
        <div class="dashboard-card">
          <h3>Fichiers récents</h3>
          <div class="recent-files">
            <ul class="file-list">
              <li v-for="file in recentFiles" key="file.id" class="file-item">
                <i class="getFileIcon(file.type) file-icon"></i>
                <span id="file-name"> filename </span>
                <span class="file-date"> filedate </span>
              </li>
            </ul>
            <ul class="file-list">
              <li class="file-item">
                <i class="file-icon mdi mdi-file-pdf">
                </i> <span id="file-name">Rapport.pdf</span>
                <span class="file-date">2023-05-15</span>
              </li>
              <li class="file-item">
                <i class="file-icon mdi mdi-file-powerpoint"></i>
                <span id="file-name">Présentation.pptx</span>
                <span class="file-date">2023-05-14</span>
              </li><li class="file-item">
                <i class="file-icon mdi mdi-file-excel"></i>
                <span id="file-name">Budget.xlsx</span>
                <span class="file-date">2023-05-13</span>
              </li><li class="file-item">
                <i class="file-icon mdi mdi-file-image"></i>
                <span id="file-name">Photo_vacances.jpg</span>
                <span class="file-date">2023-05-12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
