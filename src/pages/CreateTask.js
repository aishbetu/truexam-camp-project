import React from "react";

import Form from "../components/Form";

const CreateTask = () => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center mt-5">
            <h1 className="text-info display-4 text-center">Create Your Task Here</h1>
        </div>

        <div className="row justify-content-center mt-5">
            <Form />
        </div>

        </div>
  );
};

export default CreateTask;