import { TrackCard } from "./components/trackCards";
export const Index = () => {
  const tracks = [
    {
      img: "https://images.unsplash.com/photo-1597758464605-aa125b827c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2VyYW1pY3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60",
      alt: "ceramique fav",
      title: "decouvrez la ceramique",
      isFavorite: true,
      done: false,
    },
    {
      img: "https://images.unsplash.com/photo-1611512429151-780176f93478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60",
      alt: "circuit oenologique",
      title: "circuit oenologique",
      isFavorite: true,
      done: false,
    },
    {
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      alt: "cuisine jap",
      title: "cuisine japonaise",
      isFavorite: true,
      done: true,
    },
  ];
  return (
    <div id="homePage">
      <div id="profile">
        <img
          className="pfp"
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="profile img"
        />
        <span className="welcome-msg">Bonjour, Nathalie</span>
      </div>
      <ul id="pref">
        <li>degustation</li>
        <li>artisanat</li>
        <li>fabrication</li>
        <li>textile</li>
        <li>tourisme</li>
        <li>terroirs français</li>
      </ul>
      <div id="fav" className="cat">
        <span>Vos circuits favoris</span>
        <ul className="track-list-container">
          {tracks.map((track, index) => {
            if (track.isFavorite) {
              return (
                <TrackCard
                  index={index}
                  img={track.img}
                  alt={track.alt}
                  title={track.title}
                />
              );
            }
          })}
        </ul>
      </div>
      <div id="last" className="cat">
        <span>Vos derniers circuits</span>
        <ul className="track-list-container">
          {tracks.map((track, index) => {
            if (track.done) {
              return (
                <TrackCard
                  index={index}
                  img={track.img}
                  alt={track.alt}
                  title={track.title}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
