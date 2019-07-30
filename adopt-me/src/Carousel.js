import React from "react";

export default class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleImageClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="Pet" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleImageClick}
              data-index={index}
              className={index === active ? "active" : ""}
              src={photo}
              alt="Pet"
            />
          ))}
        </div>
      </div>
    );
  }
}
