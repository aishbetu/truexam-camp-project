import React from "react";
import { useHistory } from 'react-router-dom';

import Button from "../components/Button";

const Success = () => {
    const history = useHistory();

    function handleBtnHome() {

        history.push('/');

    }

  return (

      <div className="container-fluid">
          <div className="row justify-content-center mt-5">
              <h1 className="display-3 text-secondary text-center">Task Created Successfully!</h1>
          </div>

          <div className="row justify-content-center mt-5">
              <Button context="Home" onClick={handleBtnHome}/>
          </div>

      </div>
  );
};

export default Success;