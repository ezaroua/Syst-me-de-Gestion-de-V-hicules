import React, { Component } from 'react';
import Car from './Car';
import Truck from './Truck';
import Motorcycle from './Motorcycle';

class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      form: { type: 'car', marque: '', annee: '', couleur: '' },
      error: '',
    };
  }

  addVehicle = (e) => {
    e.preventDefault();
    const { type, marque, annee, couleur } = this.state.form;


    if (!type || !marque || !annee || !couleur) {
      this.setState({ error: 'Veuillez remplir tous les champs.' });
      return;
    }

    this.setState((prevState) => ({
      vehicles: [...prevState.vehicles, { ...prevState.form, klaxonMessage: '' }],
      form: { type: 'car', marque: '', annee: '', couleur: '' },
      error: '',
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: { ...prevState.form, [name]: value },
    }));
  };

  klaxonner = (index, message) => {
    this.setState((prevState) => {
      const vehicles = [...prevState.vehicles];
      vehicles[index].klaxonMessage = message;
      return { vehicles };
    });
  };

  render() {
    const { vehicles, error } = this.state;

    return (
        <div>
          <form onSubmit={this.addVehicle}>
            <select name="type" value={this.state.form.type} onChange={this.handleChange}>
              <option value="car">Voiture</option>
              <option value="truck">Camion</option>
              <option value="motorcycle">Moto</option>
            </select>
            <input
                type="text"
                name="marque"
                value={this.state.form.marque}
                onChange={this.handleChange}
                placeholder="Marque"
            />
            <input
                type="number"
                name="annee"
                value={this.state.form.annee}
                onChange={this.handleChange}
                placeholder="Année"
            />
            <input
                type="text"
                name="couleur"
                value={this.state.form.couleur}
                onChange={this.handleChange}
                placeholder="Couleur"
            />
            <button type="submit">Ajouter Véhicule</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <h2>Garage</h2>

          {vehicles.length === 0 ? (
              <p>Le garage est vide</p>
          ) : (
              vehicles.map((vehicle, index) => {
                let VehicleComponent;
                switch (vehicle.type) {
                  case 'car':
                    VehicleComponent = Car;
                    break;
                  case 'truck':
                    VehicleComponent = Truck;
                    break;
                  case 'motorcycle':
                    VehicleComponent = Motorcycle;
                    break;
                  default:
                    VehicleComponent = null;
                }

                return (
                    <div key={index}>
                      <p><strong>Type:</strong> {vehicle.type}</p>
                      {VehicleComponent && <VehicleComponent {...vehicle}
                                                             klaxonner={() => this.klaxonner(index, vehicle.type === 'car' ? 'Voiture klaxon: Bip Bip!' : vehicle.type === 'truck' ? 'Camion klaxon: Honk Honk!' : 'Moto klaxon: Meep Meep!')}/>}
                    </div>
                );
              })
          )}

        </div>
    );
  }
}

export default Garage;
