import appetizers from "../images/appetizers.png";
import entrees from "../images/entrees.png";
import salads from "../images/salads.png";
import dessert1 from "../images/dessert-1.png";
import dessert2 from "../images/dessert-2.png";
import dessert3 from "../images/dessert-3.png";

const menu = function () {
  const menuPage = document.createElement("div");
  menuPage.innerHTML = `<h2> <span>Our &nbsp;</span>Menu </h2>
  
  <div div class="appetizers">
      <h3>Appetizers</h3>
      <div class= "img">
        <img id="appetizers" src=${appetizers} alt="">       
      </div>
      
      <div>
        <h4>Avocado Toast</h4>
        <p>
          whole grain toast with smashed avocado, cherry tomatoes, red onion, and microgreens.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Buffalo Cauliflower Wings</h4>
        <p>
          crispy fried cauliflower florets with a spicy buffalo sauce and vegan ranch dressing.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Spring Rolls</h4>
        <p>
          rice paper rolls stuffed with vegetables, tofu, and herbs, served with a peanut dipping sauce.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Roasted Red Pepper Hummus</h4>
        <p>
          roasted red pepper hummus made from chickpeas, tahini, lemon juice, and roasted red peppers.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  </div>
  
  <div class="entrees">
      <h3>Entrees</h3>
      <div class= "img">
        <img id="entrees" src=${entrees} alt="">       
      </div>
  
      <div>
        <h4>Beyond Burger</h4>
        <p>
          a plant-based burger patty served on a whole grain bun with lettuce, tomato, onion, pickles, and vegan mayo.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Cashew Cream Fettuccine</h4>
        <p>
          fettuccine pasta with a creamy cashew sauce, roasted garlic, and sautéed mushrooms.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Jackfruit Tacos</h4>
        <p>
          soft corn tortillas filled with seasoned jackfruit, avocado, red cabbage slaw, and chipotle aioli.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Vegan Mushroom Stroganoff</h4>
        <p>
          a creamy and flavorful mushroom sauce made with cashew cream, Dijon mustard, and fresh herbs
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  </div>
  
  <div class="salads">
      <h3>Salads</h3>
      <div class= "img">
        <img id="salads" src=${salads} alt="">       
      </div>
  
      <div>
        <h4>Kale Caesar Salad</h4>
        <p>
          a plant-based burger patty served on a whole grain bun with lettuce, tomato, onion, pickles, and vegan mayo.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Cashew Cream Fettuccine</h4>
        <p>
          kale, romaine, and radicchio tossed in a vegan Caesar dressing with croutons and vegan parmesan.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Thai Peanut Salad</h4>
        <p>
          mixed greens with cucumber, carrots, red bell pepper, crispy tofu, and a spicy peanut dressing.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Grilled Peach & Arugula Salad</h4>
        <p>
          a perfect combination of sweet and bitter flavors in a healthy and refreshing dish.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  </div>
  
  <div class="desserts">
      <h3>Desserts</h3>
      <div class= "img">
      <img id="desserts" src=${dessert1} alt="">       
    </div>
  
      <div>
        <h4>Chocolate Avocado Mousse</h4>
        <p>
        a creamy chocolate mousse made with avocado, coconut milk, and maple syrup.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Vegan Cheesecake</h4>
        <p>
        a rich and creamy cheesecake made with cashews, coconut milk, and a graham cracker crust.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Berry Parfait</h4>
        <p>
        layers of coconut yogurt, fresh berries, and granola, topped with a drizzle of agave nectar.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  
      <div>
        <h4>Fruit Sorbet </h4>
        <p>
        made with pureed fresh fruit, water, and a touch of sweetener.
        </p>
        <p>
          ₱ 100
        </p>
      </div>
  </div>
 
  
  </div>`;
  menuPage.classList = " menu";
  content.appendChild(menuPage);
};

export default menu;
