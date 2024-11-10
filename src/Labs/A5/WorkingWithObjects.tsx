import React, { useState } from "react";

export default function WorkingWithObjects() {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: true,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "1",
    name: "Introduction to Programming",
    description: "This module covers basic programming concepts.",
    course: "CS101",
    score: 75,
    completed: true,
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <hr />
      <hr />

      <h4>Module Data</h4>
      <div className="row">
        
        <input
          className="form-control col"
          type="number"
          defaultValue={module.score}
          onChange={(e) => setModule({ ...module, score: Number(e.target.value) })}
        />
        <a className="btn btn-primary col mx-3" href={`${MODULE_API_URL}/score/${module.score}`}>
          Update Title
        </a>
      </div>

      <div className="row mt-5"> 
      <div className="col">

        <label className="form-check-label mx-2" htmlFor="completedCheckbox">
          Completed ?
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="completedCheckbox"
          checked={module.completed}
          onChange={(e) => setModule({ ...module, completed: e.target.checked })}></input>

          </div>
        <a className="btn btn-primary float-end col" href={`${MODULE_API_URL}/completed/${module.completed}`}>
          Update Completion Status
        </a>
      </div>

      <hr />

      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <hr />
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <hr />
    </div>
  );
}
