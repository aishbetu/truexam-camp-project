import React from "react";

const Card = (props) => {
  return (

      <div className="container-fluid">
          <div className="row">

                  <h4 className="card-title">{props.name}</h4>
                  <a href={props.path} target={"_blank"} className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={props.path}
                           alt="image"/>
                  </a>

              <div className="input-group mb-5">
                  <select className="custom-select" id="rating"
                          aria-label="Rate students from 1 - 5">
                      <option selected>Rate 1 - 5</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                  </select>
                  <div className="input-group-append">
                      <button className="btn btn-outline-info" data-toggle="modal" data-target="#ratingModal" type="button">Submit</button>
                  </div>


                  <div className="modal fade" id="ratingModal" tabIndex="-1" aria-labelledby="ratingModalLabel"
                       aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="ratingModalLabel">Success</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <p className="lead">Rating has been submitted successfully.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>

  );
};
export default Card;