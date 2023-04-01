
const testimonialsPage = document.createElement('div')
testimonialsPage.innerHTML = `
<div class="content">
  <h2>What Are Customers Say About <span>Us</span></h2>
  <p>We take pride in providing our customers with not only delicious food, but also a warm and welcoming atmosphere. But don't just take our word for it - here's what some of our happy customers have to say:</p>
</div>

<div class="quote">
  <img src="./src/images/quote-icon.png" alt="">
  <p>
    I never thought vegan food could be so flavorful and satisfying! This restaurant has truly opened my eyes to the possibilities of plant-based cuisine.
  </p>
  
  <div class="info">
    <img src="./src/images/pfp.png" alt="">
    <div class="name">
      <p>Wheein</p>
    <p>Korean Idol</p>
    </div>
    
  </div>

</div> 
`
testimonialsPage.classList = " testimonials"

content.appendChild(testimonialsPage)