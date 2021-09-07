import React from "react";
import Band from "./Band";

class Bands extends React.Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
      bands: [
        {
          id: 1,
          name: "The Octocats",
          url: "https://theoctocats.bandcamp.com/",
          location: "Buenos Aires, Argentina",
          logo: "https://f4.bcbits.com/img/0004975940_10.jpg",
          albums: [
            {
              id: 1,
              title: "With The Octocats",
              noOfSongs: 6,
              cover: "https://f4.bcbits.com/img/a3793595697_10.jpg",
              url: "https://theoctocats.bandcamp.com/album/with-the-octocats",
            },
          ],
        },
        {
          id: 2,
          name: "fingerspit",
          url: "https://fingerspit.bandcamp.com",
          location: "Valencia, Spain",
          logo: "https://f4.bcbits.com/img/0018116036_10.jpg",
          albums: [
            {
              id: 1,
              title: "Sounds of Sympathy",
              noOfSongs: 16,
              cover: "https://f4.bcbits.com/img/a4174866293_10.jpg",
              url: "https://fingerspit.bandcamp.com/album/sounds-of-sympathy",
            },
          ],
        },
      ],
      appName: "Bands from Bandcamp",
    };

    this.addAlbumToOctocats = () => {
      // this.state = {
      //   animals: ["Octopus"]
      // }
      // USE SETSTATE TO GET THE CURRENT STATE
      // this.setState((state) => {
      //   // RETURN NEW STATE
      //   return { ...state, animals: [...state.animals, "Squid"] };
      // });

      this.setState((state) => {
        const newBands = [...state.bands].map((band) => {
          const newAlbum = {
            id: 2,
            title: "Fake Album",
            noOfSongs: 0,
            cover: "",
            url: "",
          };

          const newAlbums = [...band.albums, newAlbum];

          return band.name === "The Octocats"
            ? { ...band, albums: newAlbums }
            : band;
        });

        return { ...state, bands: newBands };
      });
    };

    this.toggleReady = () => {
      this.setState((state) => ({ ...state, isReady: !state.isReady }));
    };
  }

  componentDidMount() {
    // setTimeout(() => alert("hello"), 1000);
  }

  render() {
    return (
      <div>
        <p>
          {this.state.isReady ? "ready" : "not ready"}
          <button onClick={this.toggleReady}>Toggle ready</button>
        </p>
        <h1>{this.state.appName}</h1>
        <button onClick={this.addAlbumToOctocats}>
          Add album to The Octocats
        </button>
        <ul>
          {this.state.bands.map((band) => (
            <Band key={band.id} {...band} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Bands;
