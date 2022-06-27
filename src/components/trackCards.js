export const TrackCard = ({ img, alt, title }) => {
  return (
    <li className="track-object">
      <img src={img} alt={alt} />
      <span id="text">{title}</span>
    </li>
  );
};
