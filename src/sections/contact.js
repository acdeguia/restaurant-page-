const contact = function() {
  const contactSection = document.createElement('div')
contactSection.classList = ' contacts'

let contact = ["Locate Us", "Open Hours", "Reservation"];
let avail = ["Angeles City, Pampanga", "Mon to Fri 9:00AM - 9PM", "greenoasis@gmail.com"]
for(let i = 0; i < contact.length; i += 1) {
  let div = document.createElement("div")
    let h2 = document.createElement("h2");
    let para = document.createElement('p')
    h2.className = "contact";
    h2.innerHTML = contact[i];
    para.innerHTML= avail[i];
    div.appendChild(h2)
    div.appendChild(para)
    contactSection.appendChild(div);
}
    content.appendChild(contactSection)
}