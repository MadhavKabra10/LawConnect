import { Link } from "react-router-dom";
import React from 'react';
function Index() {
  return (<>
    {/* <Header /> */}
    <div className="bg-gray-600">
      <div className="flex items-center justify-center h-screen">

        <div className="text-center">
          <Link to="/loginprof">
            <button className="mx-2 my-2 px-8 py-2 bg-blue-500 text-white rounded-md">Professional</button>
          </Link>
          <br />
          <Link to="/loginuser">
            <button className="mx-2 my-2 px-8 py-2 bg-blue-500 text-white rounded-md">User</button>
          </Link>

        </div>
      </div>
    </div>

  </>
  );
}
export default Index;