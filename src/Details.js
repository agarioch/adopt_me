import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import notFoundImage from "./img/undraw_loading_frh4.svg";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = {
    loading: true,
    error: false,
  };

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((e) => {
        this.setState({ error: true });
      });
  }
  render() {
    if (this.state.error) {
      throw new Error();
    }

    if (this.state.loading) {
      return (
        <div className="pl-8 pt-8">
          <h1 className="text-3xl text-gray-700 tracking-tight">Loading ...</h1>
          <img src={notFoundImage} alt="" className="block w-64 h-64" />
        </div>
      );
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details mx-auto w-10/12">
        <h1 className="pet-name text-4xl border-b-2 border-teal-400">{name}</h1>
        <Carousel media={media} />
        <div>
          <h2 className="text-gray-700 mt-2">{`${animal} • ${breed} • ${location}`}</h2>
          <p className="mt-3 text-gray-700">{description}</p>
          <button className="btn btn-primary mt-3">Adopt {name}</button>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
