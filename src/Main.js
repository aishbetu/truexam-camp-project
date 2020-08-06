import React from "react";
import { useHistory } from 'react-router-dom'

import Button from "./components/Button";


const Home = () => {

    const history = useHistory();
    
    function handleBtn1() {

        history.push('/create-task');

    }

    function handleBtn2() {

        history.push('/review-tasks')

    }

  return (

      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
            <h1 className="display-3 text-secondary text-center">Welcome To Truexam</h1>
        </div>

          <div className="row justify-content-center">
              <p className="lead text-center">Create a Task for your students or review their work</p>
          </div>

          <div className="row justify-content-center mt-5">
              <div className="col-md-2 d-flex justify-content-center">
                  <Button context="Create Task" onClick={handleBtn1} />
              </div>

              <div className="col-md-1 text-center d-flex justify-content-center">
                  <p className="lead mt-4">OR</p>
              </div>

              <div className="col-md-2 d-flex justify-content-center">
                  <Button context="Review Tasks" onClick={handleBtn2} />
              </div>
          </div>

          </div>

  );
};

export default Home;