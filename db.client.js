
const { Sequelize } = require('sequelize');

// Connexion à la base de données PostgreSQL
const sequelize = new Sequelize(
  'esgi_cloud_exam_2_12476', // Nom de la base de données
  'esgi_cloud_exam_2_12476_user', // Nom d'utilisateur
  '', // Mot de passe (laissez vide si aucun)
  {
    host: 'dpg-co60964f7o1s73a9362g-a', // Hôte de la base de données
    port: 5432, // Port de la base de données
    dialect: 'postgres', // Dialecte de la base de données
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

// Vérification de la connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données :', err);
  });

module.exports = sequelize;
