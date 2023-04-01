const header = function(){
  const content = document.querySelector("#content");
      const header = document.createElement("header");
      const navBar = document.createElement("div");
      const logo = document.createElement("div");
      const links = document.createElement("ul");
      const home = document.createElement("li");
      const menu = document.createElement("li");
      const about = document.createElement("li");
    
      logo.innerHTML = "Green Oasis";
      home.innerHTML = "HOME";
      menu.innerHTML = "MENU";
      about.innerHTML = "ABOUT";
    
      links.appendChild(home);
      links.appendChild(menu);
      links.appendChild(about);
    
      navBar.appendChild(logo);
      navBar.appendChild(links);
      header.appendChild(navBar);
    
      navBar.classList = " nav-bar";
      logo.classList = " logo";
      home.id = " home";
      menu.id = " menu";
      about.id = " about";
    
      content.appendChild(header);
    
      home.addEventListener("click", homeBtn);
      menu.addEventListener("click", menuBtn);
      about.addEventListener("click", aboutBtn);
      logo.addEventListener("click", homeBtn);
    
      function homeBtn() {
        window.scrollTo(0, 0);
      }
    
      function menuBtn() {
        window.scrollTo(0, 1550);
      }
    
      function aboutBtn() {
        window.scrollTo(0, 750);
      }
}

export default header;