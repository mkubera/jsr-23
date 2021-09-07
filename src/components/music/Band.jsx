import Albums from "./Albums";

const Band = ({ name, url, location, logo, albums }) => {
  return (
    <li>
      <img src={logo} alt="{name} logo" width="200" />
      <h2>{name}</h2>
      <h4>
        <a href={url} target="_blank" rel="noopener noreferrer">
          link
        </a>
      </h4>
      <p>from {location}</p>
      <Albums albums={albums} />
    </li>
  );
};

export default Band;
