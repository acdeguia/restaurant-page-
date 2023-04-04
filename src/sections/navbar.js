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
        window.scroll({top: 0, behavior: "smooth"})
      }
    
      function menuBtn() {
        // window.scrollTo(0, 1550 );
        window.scrollTo({
          top: 1550,
          behavior: "smooth",
        });
      }
    
      function aboutBtn() {
        window.scrollTo({
          top: 725,
          behavior: "smooth",
        });
      }
}

export default header;