import React, { Component } from 'react';

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { marque,type, annee, couleur, klaxonner, klaxonMessage } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="card">
        <h3>{marque} ({annee})</h3>
        <p>Couleur: {couleur}</p>
        <button onClick={this.toggleDetails}>
          {showDetails ? 'Masquer Détails' : 'Afficher Détails'}
        </button>
        <button onClick={klaxonner}>Klaxonner</button>
        {showDetails && (
            <div className="details">
                <h4>Détails du Véhicule</h4>
                <p>Marque: {marque}</p>
                <p>Type: {type}</p>
                <p>Année: {annee}</p>
                <p>Couleur: {couleur}</p>
                {klaxonMessage && (
                    <div className="klaxon-message">
                        <p>{klaxonMessage}</p>
                    </div>
                )}
            </div>
        )}
      </div>
    );
  }
}

export default Vehicle;
