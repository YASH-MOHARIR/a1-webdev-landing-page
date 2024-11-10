import React from "react";
import EnvironmentVariables from "./EnviromentalVariables.tsx";
import PathParameters from "./PathParameters.tsx";
import QueryParameters from "./QueryParameters.tsx";
import WorkingWithObjects from "./WorkingWithObjects.tsx";
import WorkingWithArrays from "./WorkingWithArrays.tsx";
import HttpClient from "./HttpClient.tsx";
import WorkingWithObjectsAsynchronously
 from "./WorkingWithObjectsAsynchronously.tsx";
 import WorkingWithArraysAsynchronously
  from "./WorkingWithArraysAsynchronously.tsx";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
  return (
    <div>
      <h1>Lab 5</h1>

      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />

      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously/>
      <WorkingWithArraysAsynchronously/>
    </div>
  );
}
