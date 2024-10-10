import React from 'react'
import Sidebar from './sidebar'

export default function Tarification() {
  return (
    <div id="app">
        <Sidebar/>
        <div class="main-content">
      <h1>Tarification</h1>
      <p>Choisissez le plan qui convient le mieux à vos besoins de stockage et de partage.</p>
      
      <div class="pricing-container">
        <div v-for="plan in plans" key="plan.name" class="pricing-plan { 'current-plan' plan.name === currentPlan }">
          <div v-if="plan.name === currentPlan" class="current-plan-badge">Plan actuel</div>
          <h2 class="plan-name"> planname </h2>
          <div class="plan-price"> planprice € / mois</div>
          <ul class="plan-features">
            <li v-for="feature in plan.features" key="feature"> feature </li>
          </ul>
          <button click="subscribeToPlan(plan.name)" class="btn-subscribe" disabled="plan.name === currentPlan">
            {/* {{ planname === currentPlan}} ?*/} 'Votre plan actuel'  'Souscrire'  
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
