import React from 'react';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  render() {
    const { marque, annee, couleur, klaxonner, klaxonMessage } = this.props;

    return (
      <Vehicle
        marque={marque}
        annee={annee}
        couleur={couleur}
        klaxonner={() => klaxonner('Voiture klaxon: Bip Bip!')}
        klaxonMessage={klaxonMessage}
      />
    );
  }
}

export default Car;
