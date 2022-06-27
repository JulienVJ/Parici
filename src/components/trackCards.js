export const TrackCard = ({ img, alt, title, index }) => {
  return (
    <li className="track-object" key={index}>
      <img src={img} alt={alt} />
      <span id="text">{title}</span>
    </li>
  );
};
