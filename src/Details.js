import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import { navigate, Link } from "@reach/router";
import Modal from "./Modal";
import notFoundImage from "./img/undraw_loading_frh4.svg";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = {
    loading: true,
    error: false,
    showModal: false,
  };

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          url: animal.url,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
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

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details mx-auto w-10/12">
        <h1 className="pet-name text-4xl border-b-2 border-teal-400">{name}</h1>
        <Carousel media={media} />
        <div>
          <h2 className="text-gray-700 mt-2">{`${animal} • ${breed} • ${location}`}</h2>
          <p className="mt-3 text-gray-700">{description}</p>
          <button className="btn btn-primary mt-3" onClick={this.toggleModal}>
            Adopt {name}
          </button>
          <Link to="/adopt_me/">
            <div className="btn btn-secondary inline-block ml-3">Back</div>
          </Link>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <button onClick={this.adopt} className="btn btn-primary">
                  Yes (visit adoption site)
                </button>
                <button
                  onClick={this.toggleModal}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </Modal>
          ) : null}
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
