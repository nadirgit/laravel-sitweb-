// C1.jsx
import React from 'react';

const C1 = ({ produits }) => {
  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            <strong>Nom:</strong> {produit.nom}, <strong>Catégorie:</strong> {produit.categorie},{' '}
            <strong>Prix:</strong> {produit.prix} MAD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default C1;
