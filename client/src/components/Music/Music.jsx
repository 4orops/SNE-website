import React from 'react';
import styles from './Music.css'
import coverArt1 from '../Assets/CoverArt1.png'
import coverArt2 from '../Assets/CoverArt2.png'
import coverArt3 from '../Assets/CoverArt3.png'

const Music = () => {
  const singles = [
    {
      title: "Tshwala Bam",
      streams: "30,074,945",
      link: "https://open.spotify.com/track/54seQV7MCcppBrznALCdlT",
      image: {coverArt3}
    },
    {
      title: "Umjolo",
      streams: "4,840",
      link: "https://open.spotify.com/track/3mTAI4pXtIa6Q9rejRFdjK",
      image: {coverArt2}
    },
    {
      title: "Tshwala Bam Remix",
      streams: "11,640,004",
      link: "https://open.spotify.com/album/1ZyNY4zHrl8MMzZ5li2Pm2",
      image:  {coverArt1}
    }
  ];

  return (
    <div className="containers">
      <h2 className="heading">Featured Singles</h2>
      <div className="singlesWrapper">
        {singles.map((single, index) => (
          <div key={index} className="singleCard">
            <img src={single.image} alt={single.title} className="albumArt" />
            <h3 className={styles.title}>{single.title}</h3>
            <p className={styles.streams}>{single.streams} streams</p>
            <a href={single.link} target="_blank" rel="noopener noreferrer" className="link">
              Listen on Spotify
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
