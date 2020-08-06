import React from "react";
import { useHistory } from "react-router-dom";

import Button from "./Button";

const Form = () => {
    const history = useHistory();

    function handleSubmit() {

        history.push('/success')
    }

  return (
      <div className="container-fluid">


        <form className="row justify-content-center">
            <div className="form-group col-md-6 col-sm-12">

                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title"
                       placeholder="Enter Task Title" required/>
            </div>
        </form>

        <form className="row justify-content-center">
            <div className="form-group col-md-6 col-sm-12">

                <label htmlFor="description">Description</label>
                <textarea type="text" className="form-control" id="description"
                placeholder="Describe Task here..." rows="3" required/>

            </div>
        </form>

        <form className="row justify-content-center">
            <div className="form-group col-md-6 col-sm-12">

                <label htmlFor="fileUpload">Upload Your Image</label>
                <input type="file" className="form-control-file" id="fileUpload" />

            </div>
        </form>

          <div className="row justify-content-center">

              <Button context="Submit" onClick={handleSubmit} />
          </div>

    </div>

  );
};

export default Form;