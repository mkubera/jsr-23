const Album = ({ title, noOfSongs, cover, url }) => {
  return (
    <li>
      <img src={cover} alt="{title} cover" width="200" />
      <h4>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <small> ({noOfSongs} songs)</small>
      </h4>
    </li>
  );
};

export default Album;
