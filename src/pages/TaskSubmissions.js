import React from "react";
import Card from "../components/Card";

const TaskSubmissions = () => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center mt-5">
            <h1 className="text-info display-4 text-center">Review All Students Task!</h1>
        </div>


        <div className="row justify-content-center">
            <p className="lead text-center">Rate your students performance</p>
        </div>

        <div className="row justify-content-center mt-5">
            <div className="col-lg-3 col-md-4 col-sm-12">
                <Card name="Jane" path="https://source.unsplash.com/aob0ukAYfuI/400x300"/>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
                <Card name="Alice" path="https://source.unsplash.com/pWkk7iiCoDM/400x300"/>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
                <Card name="Kristina" path="https://source.unsplash.com/EUfxH-pze7s/400x300"/>
            </div>

        </div>

        <div className="row justify-content-center mt-5">
            <div className="col-lg-3 col-md-4 col-sm-12">
                <Card name="Shanice" path="https://source.unsplash.com/M185_qYH8vg/400x300"/>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
                <Card name="Emily" path="https://source.unsplash.com/sesveuG_rNo/400x300"/>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
                <Card name="Madelyn" path="https://source.unsplash.com/2gYsZUmockw/400x300"/>
            </div>

        </div>




    </div>
  );
};

export default TaskSubmissions;