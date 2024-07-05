import React from 'react';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  render() {
    const { marque, annee, couleur, klaxonner, klaxonMessage } = this.props;

    return (
      <Vehicle
        marque={marque}
        annee={annee}
        couleur={couleur}
        klaxonner={() => klaxonner('Moto klaxon: Meep Meep!')}
        klaxonMessage={klaxonMessage}
      />
    );
  }
}

export default Motorcycle;
