function ShowNav() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
//   console.log('Connected')