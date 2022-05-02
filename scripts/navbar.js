function navbar(){
    return `
    <div id="navbar">
      <h1><a href="#">News App</a></h1>
        <input type="text" id="search_input" placeholder="Search News">
      </div>
      <div>
      <div id="sidebar">
        <h2>countries</h2>
        <h3 id="in">India</h3>
        <h3 id="ch">China</h3>
        <h3 id="us">usa</h3>
        <h3 id="uk">uk</h3>
        <h3 id="nz">Newzeland</h3>
      </div>
      <div id="results"> </div>
    </div>
    </div>
    `;
}

export default navbar;