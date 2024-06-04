import React from "react";
function Hitsong() {
    return (  
            <div className="container">
            <div className="col-12">
                <h2 className="display-2">
                    <strong>Some Popular Hits</strong>
                </h2>
            </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div  className="col">
                        <div className="card h-50">
                            <img src='' className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">TSHWALA BAM</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">By S.N.E</small>
                        </div>
                        </div>
                    </div>

                    <div  className="col">
                        <div className="card h-50">
                            <img src='' className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">TSHWALA BAM</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">By S.N.E</small>
                        </div>
                        </div>
                    </div>

                    <div  className="col">
                        <div className="card h-50">
                            <img src='' className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">TSHWALA BAM</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">By S.N.E</small>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default Hitsong;