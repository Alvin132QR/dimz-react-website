import React from 'react'
export default Home

function Home() {
  return (
    <div id="home" class="container mt-5">
    <div class="card p-5 shdw mx-auto divk">
      <h1>Download Addon</h1>
      <label for="verss">Select Addon:</label>
      <select id="verss" name="version" class="btn btn-outline-dark m-1">
      <option value="latest">Debug Stick</option>
      <option value="beforelast">Coming Soon</option>
      </select>
      <button id="downloadddButton" class="btn btn-danger m-1 shdw">Go To Downloads</button>
    </div>
  </div>
  );
}
