import React from "react";


function Hitsong() {
    return (  
        <section>
            <div className="container-fluid">
            <div className="col-12">
                <h2 className="display-2 p-4">
                    <strong>Some Popular Hits</strong>
                </h2>
            </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div  className="col">
                        <div className="card h-50">
                            <img src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg' className="card-img-top" alt="..."/>
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
                            <img src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg' className="card-img-top" alt="..."/>
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
                            <img src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg' className="card-img-top" alt="..."/>
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
        </section>

    );
}

export default Hitsong;