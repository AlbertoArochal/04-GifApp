export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} key={id} />
      <p key={Math.floor(Math.random() * 100)}>{title}</p>
    </div>
  );
};
