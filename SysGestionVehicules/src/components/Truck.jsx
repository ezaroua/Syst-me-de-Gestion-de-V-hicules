import React from 'react';
import Vehicle from './Vehicle';

class Truck extends Vehicle {
  render() {
    const { marque, annee, couleur, klaxonner, klaxonMessage } = this.props;

    return (
      <Vehicle
        marque={marque}
        annee={annee}
        couleur={couleur}
        klaxonner={() => klaxonner('Camion klaxon: Honk Honk!')}
        klaxonMessage={klaxonMessage}
      />
    );
  }
}

export default Truck;
