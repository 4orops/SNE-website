import React from "react";
import '../NewsArticle/NewsArticles.css'

function Articles() {
    return (
      <div className="container">  
        <div className="col-12">    
          <h2 className="display-2 text-center">
             <strong> Latest News </strong>
          </h2>
        </div>

      <div class="row mb-2">
        <div className="col-md-6 ">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative newblock">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">BellaNaija</strong>
            <h3 className="mb-0">“Tshwala Bam” Gets A Remix feat. Burna boy</h3>
          <div className="mb-1 text-body-secondary">May 15, 2024</div>
            <p className="card-text mb-auto">The popular South African amapiano hit “Tshwala Bam” – a song that’s been dominating airwaves across Africa and beyond – just got a remix featuring,</p>
            <a href="https://www.bellanaija.com/2024/05/tshwala-bam-remix-burnaboy/" target="_blank" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            </a>
        </div>
      </div>
    </div>
    <div className="col-md-6 ">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative newblock">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success-emphasis">SNL DRUM</strong>
          <h3 className="mb-0">Tshwala Bami remix featuring Burna Boy</h3>
          <div className="mb-1 text-body-secondary">15 May, 2024</div>
          <p className="mb-auto">It has not only topped South African music charts.
          What started off as a dance challenge on TikTok has taken the song beyond the local shores.</p>
          <a href="https://www.snl24.com/drum/celebs/news/exclusive-tshwala-bam-vocalist-sne-has-a-surprise-in-store-for-fans-20240508"  class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>

    )
}

export default Articles;