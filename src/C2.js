// C2.jsx
import React from 'react';

const C2 = ({ produits, selectedCategory }) => {
  const filteredProduits =
    selectedCategory === ''
      ? produits
      : produits.filter((produit) => produit.categorie === selectedCategory);

  return (
    <div>
      <ul>
        {filteredProduits.map((produit) => (
          <li key={produit.id}>
            <strong>Nom:</strong> {produit.nom}, <strong>Catégorie:</strong> {produit.categorie},{' '}
            <strong>Prix:</strong> {produit.prix} MAD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default C2;
