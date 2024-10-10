

new Vue({
  el: '#app',
  data: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: '/avatars/john_doe.jpg'
    },
    storageUsed: 2.5,
    storageTotal: 10,
    passwords: {
      current: '',
      new: '',
      confirm: ''
    },
    privacy: {
      newsletter: true,
      publicProfile: false
    }
  },
  computed: {
    storagePercentage() {
      return (this.storageUsed / this.storageTotal) * 100;
    }
  },
  methods: {
    updatePersonalInfo() {
      // Implémentez ici la logique pour mettre à jour les informations personnelles
      console.log('Mise à jour des informations personnelles', this.user);
      // Vous devriez envoyer ces données à votre backend
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.user.avatarUrl = URL.createObjectURL(file);
      // Ici, vous devriez implémenter la logique pour télécharger l'image sur votre serveur
    },
    changePassword() {
      if (this.passwords.new !== this.passwords.confirm) {
        alert("Les nouveaux mots de passe ne correspondent pas.");
        return;
      }
      // Implémentez ici la logique pour changer le mot de passe
      console.log('Changement de mot de passe');
      // Vous devriez envoyer ces données à votre backend de manière sécurisée
    },
    updatePrivacySettings() {
      // Implémentez ici la logique pour mettre à jour les paramètres de confidentialité
      console.log('Mise à jour des paramètres de confidentialité', this.privacy);
      // Vous devriez envoyer ces données à votre backend
    },
    deleteAccount() {
      if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
        // Implémentez ici la logique pour supprimer le compte
        console.log('Suppression du compte');
        // Vous devriez envoyer une requête à votre backend pour supprimer le compte
      }
    }
  }
});

  new Vue({
    el: '#app',
    data: {
      user: {
        name: 'John Doe',
        avatarUrl: '/avatars/john_doe.jpg'
      },
      storageUsed: 2.5,
      storageTotal: 10,
      searchQuery: '',
      files: [
        { id: 1, name: 'Rapport_Projet_A.pdf', type: 'pdf', size: '2.5 Mo', date: '2023-05-15', owner: 'Alice Martin' },
        { id: 2, name: 'Présentation_Client.pptx', type: 'powerpoint', size: '5.1 Mo', date: '2023-05-14', owner: 'Bob Johnson' },
        { id: 3, name: 'Budget_2023.xlsx', type: 'excel', size: '1.8 Mo', date: '2023-05-13', owner: 'Charlie Brown' },
        { id: 4, name: 'Design_Logo.psd', type: 'photoshop', size: '8.3 Mo', date: '2023-05-12', owner: 'Diana Prince' },
        { id: 5, name: 'Contrat_Partenariat.docx', type: 'word', size: '1.5 Mo', date: '2023-05-11', owner: 'Ethan Hunt' },
        { id: 6, name: 'Reunion_Enregistrement.mp3', type: 'audio', size: '4.7 Mo', date: '2023-05-10', owner: 'Fiona Green' },
        { id: 7, name: 'Demo_Produit.mp4', type: 'video', size: '15.3 Mo', date: '2023-05-09', owner: 'George Wilson' },
        { id: 8, name: 'Resources_Projet.zip', type: 'archive', size: '8.9 Mo', date: '2023-05-08', owner: 'Helen Carter' }
      ]
    },
    computed: {
      storagePercentage() {
        return (this.storageUsed / this.storageTotal) * 100;
      },
      filteredFiles() {
        return this.files.filter(file =>
          file.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          file.owner.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      getFileIcon(type) {
        const iconMap = {
          pdf: 'mdi mdi-file-pdf-box',
          powerpoint: 'mdi mdi-file-powerpoint-box',
          excel: 'mdi mdi-file-excel-box',
          word: 'mdi mdi-file-word-box',
          photoshop: 'mdi mdi-file-image-box',
          image: 'mdi mdi-file-image',
          audio: 'mdi mdi-file-music',
          video: 'mdi mdi-file-video',
          archive: 'mdi mdi-zip-box',
          default: 'mdi mdi-file'
        };
        return iconMap[type] || iconMap.default;
      },
      downloadFile(file) {
        console.log('Téléchargement du fichier:', file.name);
        // Ici, vous pouvez implémenter la logique de téléchargement réelle
      },
      viewFileDetails(file) {
        console.log('Affichage des détails du fichier:', file);
        // Ici, vous pouvez implémenter l'ouverture d'une modal ou la navigation vers une page de détails
      }
    }
  });

  new Vue({
    el: '#app',
    data: {
      user: {
        name: 'John Doe',
        avatarUrl: '/avatars/john_doe.jpg'
      },
      storageUsed: 2.5,
      storageTotal: 10,
      searchQuery: '',
      files: [
        { id: 1, name: 'Rapport.pdf', type: 'pdf', size: '2.5 Mo', date: '2023-05-15' },
        { id: 2, name: 'Présentation.pptx', type: 'powerpoint', size: '5.1 Mo', date: '2023-05-14' },
        { id: 3, name: 'Budget.xlsx', type: 'excel', size: '1.8 Mo', date: '2023-05-13' },
        { id: 4, name: 'Photo_vacances.jpg', type: 'image', size: '3.2 Mo', date: '2023-05-12' },
        { id: 5, name: 'Document.docx', type: 'word', size: '1.5 Mo', date: '2023-05-11' },
        { id: 6, name: 'Musique.mp3', type: 'audio', size: '4.7 Mo', date: '2023-05-10' },
        { id: 7, name: 'Vidéo.mp4', type: 'video', size: '15.3 Mo', date: '2023-05-09' },
        { id: 8, name: 'Archive.zip', type: 'archive', size: '8.9 Mo', date: '2023-05-08' }
      ],
      contextMenu: {
        show: false,
        top: 0,
        left: 0,
        file: null
      }
    },
    computed: {
      storagePercentage() {
        return (this.storageUsed / this.storageTotal) * 100;
      },
      filteredFiles() {
        return this.files.filter(file =>
          file.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      uploadFile() {
        console.log('Téléverser un fichier');
      },
      createFolder() {
        console.log('Créer un nouveau dossier');
      },
      getFileIcon(type) {
        const iconMap = {
          pdf: 'mdi mdi-file-pdf-box',
          powerpoint: 'mdi mdi-file-powerpoint-box',
          excel: 'mdi mdi-file-excel-box',
          word: 'mdi mdi-file-word-box',
          image: 'mdi mdi-file-image',
          audio: 'mdi mdi-file-music',
          video: 'mdi mdi-file-video',
          archive: 'mdi mdi-zip-box',
          default: 'mdi mdi-file'
        };
        return iconMap[type] || iconMap.default;
      },
      selectFile(file) {
        console.log('Fichier sélectionné:', file);
      },
      showContextMenu(event, file) {
        this.contextMenu.show = true;
        this.contextMenu.top = event.clientY;
        this.contextMenu.left = event.clientX;
        this.contextMenu.file = file;
        event.preventDefault();
      },
      openFile() {
        console.log('Ouvrir le fichier:', this.contextMenu.file);
        this.contextMenu.show = false;
      },
      downloadFile() {
        console.log('Télécharger le fichier:', this.contextMenu.file);
        this.contextMenu.show = false;
      },
      shareFile() {
        console.log('Partager le fichier:', this.contextMenu.file);
        this.contextMenu.show = false;
      },
      renameFile() {
        console.log('Renommer le fichier:', this.contextMenu.file);
        this.contextMenu.show = false;
      },
      deleteFile() {
        console.log('Supprimer le fichier:', this.contextMenu.file);
        this.contextMenu.show = false;
      }
    },
    mounted() {
      document.addEventListener('click', () => {
        this.contextMenu.show = false;
      });
    }
  });

new Vue({
  el: '#app',
  data: {
    user: {
      name: 'John Doe',
      avatarUrl: '/avatars/john_doe.jpg'
    },
    storageUsed: 2.5,
    storageTotal: 10,
    recentFiles: [
      { id: 1, name: 'Rapport.pdf', type: 'pdf', date: '2023-05-15' },
      { id: 2, name: 'Présentation.pptx', type: 'powerpoint', date: '2023-05-14' },
      { id: 3, name: 'Budget.xlsx', type: 'excel', date: '2023-05-13' },
      { id: 4, name: 'Photo_vacances.jpg', type: 'image', date: '2023-05-12' }
    ]
  },
  computed: {
    storagePercentage() {
      return (this.storageUsed / this.storageTotal) * 100;
    }
  },
  methods: {
    uploadFile() {
      // Logique pour téléverser un fichier
      console.log('Téléverser un fichier');
    },
    createFolder() {
      // Logique pour créer un dossier
      console.log('Créer un dossier');
    },
    shareFile() {
      // Logique pour partager un fichier
      console.log('Partager un fichier');
    },
    getFileIcon(type) {
      const iconMap = {
        pdf: 'mdi mdi-file-pdf',
        powerpoint: 'mdi mdi-file-powerpoint',
        excel: 'mdi mdi-file-excel',
        image: 'mdi mdi-file-image',
        default: 'mdi mdi-file'
      };
      return iconMap[type] || iconMap.default;
    }
  },
  mounted() {
    // Création du graphique d'utilisation de l'espace
    new Chart(document.getElementById('storageChart'), {
      type: 'doughnut',
      data: {
        labels: ['Utilisé', 'Disponible'],
        datasets: [{
          data: [this.storageUsed, this.storageTotal - this.storageUsed],
          backgroundColor: ['#3498db', '#ecf0f1']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    // Création du graphique d'activité
    new Chart(document.getElementById('activityChart'), {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'Fichiers ajoutés',
          data: [3, 5, 2, 8, 6, 1, 4],
          borderColor: '#3498db',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});

new Vue({
  el: '#app',
  data: {
    user: {
      name: 'John Doe',
      avatarUrl: '/avatars/john_doe.jpg'
    },
    storageUsed: 2.5,
    storageTotal: 10,
    currentPlan: 'Standard',
    plans: [
      {
        name: 'Gratuit',
        price: 0,
        features: [
          '5 Go de stockage',
          'Partage de fichiers limité',
          'Assistance par email'
        ]
      },
      {
        name: 'Standard',
        price: 9.99,
        features: [
          '100 Go de stockage',
          'Partage de fichiers illimité',
          'Assistance prioritaire',
          'Synchronisation sur tous les appareils'
        ]
      },
      {
        name: 'Premium',
        price: 19.99,
        features: [
          '1 To de stockage',
          'Partage de fichiers illimité',
          'Assistance 24/7',
          'Synchronisation sur tous les appareils',
          'Contrôle avancé des versions'
        ]
      }
    ]
  },
  computed: {
    storagePercentage() {
      return (this.storageUsed / this.storageTotal) * 100;
    }
  },
  methods: {
    subscribeToPlan(planName) {
      if (planName === this.currentPlan) {
        alert("C'est déjà votre plan actuel.");
        return;
      }
      
      // Ici, vous implémenteriez la logique pour changer de plan
      // Cela pourrait inclure l'appel à une API, la mise à jour de la base de données, etc.
      
      alert(`Vous avez souscrit au plan ${planName}. Votre compte sera mis à jour sous peu.`);
      
      // Pour la démonstration, on met à jour directement le plan actuel
      this.currentPlan = planName;
      
      // Mise à jour du stockage total en fonction du nouveau plan
      switch(planName) {
        case 'Gratuit':
          this.storageTotal = 5;
          break;
        case 'Standard':
          this.storageTotal = 100;
          break;
        case 'Premium':
          this.storageTotal = 1000;
          break;
      }
    }
  }
   
  
   
});