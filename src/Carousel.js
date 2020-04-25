import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel flex bg-white shadow p-3">
        <img
          src={photos[active]}
          alt="animal"
          className="rounded shadow-sm border-gray-400 border-2 m-3"
        />
        <div className="carousel-smaller flex flex-wrap ml-auto">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={`rounded-full h-32 w-32 m-2 object-cover cursor-pointer ${
                index === active
                  ? "border-teal-700 border-2"
                  : "border-gray-700 border-2 opacity-50"
              }`}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
