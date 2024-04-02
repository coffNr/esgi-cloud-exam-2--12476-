const { Sequelize } = require('sequelize');

// Connexion à la base de données PostgreSQL
const sequelize = new Sequelize(
  'postgres://esgi_cloud_exam_2_12476_user:@dpg-co60964f7o1s73a9362g-a:5432/esgi_cloud_exam_2_12476', // Chaîne de connexion
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
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
