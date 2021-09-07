import Album from "./Album";

const Albums = ({ albums }) => {
  return (
    <>
      <h3>Albums</h3>
      <ul>
        {albums.map((album) => (
          <Album key={album.id} {...album} />
        ))}
      </ul>
    </>
  );
};

export default Albums;
