import React from 'react';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';

const InstagramPost = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url="https://www.instagram.com/s.n.e_za/" width={328} />
      <TikTokEmbed url="https://www.tiktok.com/@bhutiomdala_/video/7350462695952469253?q=sne%20tshwala%20bam&t=1718030568531" width={328} />
    </div>

  );
};

export default InstagramPost;
