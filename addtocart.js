
    const products = [
      {
        id: 0,
        image: 'https://i.pinimg.com/736x/be/93/00/be9300b6b4c8746ee8872b96e6264355.jpg',
        title: 'Bridge_house',
        price: 400,
      },
      {
        id: 1,
        image: 'https://i.pinimg.com/236x/ed/7e/58/ed7e585c76a6e7606840f0524090a859.jpg',
        title: 'Tiled_house',
        price: 200,
      },
      {
        id: 2,
        image: 'https://i.pinimg.com/236x/13/bc/1b/13bc1b830f219e7c5b6d095d9ef8b2a0.jpg',
        title: 'Gem_of_colours',
        price: 300,
      },
      {
        id: 3,
        image: 'https://i.pinimg.com/236x/b6/06/24/b6062413d85817c0a351e43710a616c2.jpg',
        title: 'Clock_tower',
        price: 400,
      },
      {
        id: 4,
        image: 'https://i.pinimg.com/236x/f8/e1/53/f8e15359ab59a61415533d5149e643e5.jpg',
        title: 'Eiffel_tower',
        price: 400,
      },
      {
        id: 5,
        image: 'https://i.pinimg.com/236x/b1/3e/c8/b13ec8c4681c046a4619257d40d9b455.jpg',
        title: 'Palace',
        price: 400,
      },
      {
        id: 6,
        image: 'https://i.pinimg.com/236x/a6/5c/52/a65c52fd71584315cf90ac91a12afde9.jpg',
        title: 'Cable_bridge',
        price: 400,
      },
      {
        id: 7,
        image: 'https://i.pinimg.com/236x/1f/bc/cd/1fbccd0293a7284acc026cb48695dfa7.jpg',
        title: 'Baby&Mother',
        price: 400,
      },
      {
        id: 8,
        image: '	https://i.pinimg.com/236x/69/bf/6e/69bf6e33e3528c381ad0dcd419585fe1.jpg',
        title: 'Squirrel',
        price: 400,
      },
      {
        id: 9,
        image: 'https://media.istockphoto.com/id/514630316/photo/tubes-of-oil-paint-and-artist-paint-brushes-closeup.jpg?s=612x612&w=0&k=20&c=9BgTqo_rJ8oZhaGvHVGHuQbFBQdTKfGlHn5pqevSyyA=',
        title: 'Oil_painting',
        price: 400,
      },
      {
        id: 10,
        image: 'https://thumbs.dreamstime.com/b/men-s-head-seamless-pattern-background-grunge-line-drawing-doodle-poster-decorative-diverse-men-s-head-seamless-pattern-background-150888427.jpg?w=768',
        title: 'Picture_of_Hairstyles',
        price: 400,
      },
      {
        id: 11,
        image: 'https://media.istockphoto.com/id/1162167657/photo/hand-painted-background-with-mixed-liquid-blue-and-golden-paints-abstract-fluid-acrylic.jpg?s=612x612&w=0&k=20&c=DiYltrxEBUFjhhltHriX4WVPRxiPqgQhTBC5R7_C6Ik=',
        title: 'Illusion',
        price: 400,
      },
      {
        id: 12,
        image: 'https://media.istockphoto.com/id/1142810160/vector/fashionable-illustration-modern-art-work-my-original-oil-painting-on-canvas-impressionism.jpg?s=612x612&w=0&k=20&c=ZZedRFwdLiMQN-TGfYgxbOaQluqe69F_95GDT-WCpxg=',
        title: 'Girl',
        price: 400,
      },

    ];

    const categories = [...new Set(products.map((item) => item.title))];

    let i = 0;
    document.getElementById('root').innerHTML = categories.map((title) => {
      const product = products.find((item) => item.title === title);
      const { id, image, price } = product;
      return (
        `<div class='box'>
          <div class='img-box'>
            <img class='images' src=${image}></img>
          </div>
          <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>` +
        "<button id='button1' onclick='addtocart(" + id + ")'>Add to cart</button>" +
        `</div>
        </div>`
      );
    }).join('');

    var cart = [];

    function addtocart(id) {
      const productToAdd = products.find((item) => item.id === id);

      // Check if the item already exists in the cart
      const existingItemIndex = cart.findIndex((item) => item.id === id);

      if (existingItemIndex === -1) {
        // Item does not exist in the cart, add it
        cart.push({ ...productToAdd, count: 1 });
        displaycart();
      } else {
        // Item already exists in the cart, display a popup
        alert('Item already present in the cart');
      }
    }

    function delElement(index) {
      cart.splice(index, 1);
      displaycart();
    }

    function updateProductCount(id, change) {
      const productIndex = cart.findIndex((item) => item.id === id);

      if (productIndex !== -1) {
        const product = cart[productIndex];

        // Update count and price
        product.count = (product.count || 1) + change;
        if (product.count < 1) product.count = 1; // Ensure count doesn't go below 1

        displaycart(); // Update the total price
      }
    }

    function displaycart() {
      let total = 0;
      document.getElementById('count').innerHTML = cart.length;

      if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = 'Your cart is empty';
        document.getElementById('ttotal').innerHTML = 'rs ' + 0 + '.00';
      } else {
        document.getElementById('cartItem').innerHTML = cart
          .map((item, index) => {
            const { id, image, title, price, count } = item;
            total = total + price * count;

            return (
              `<div class='cart-item'>
                <div class='row-img'>
                  <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <button id='sub' onclick='updateProductCount(${id}, -1)'>-</button>
                <input type='tel' style='width:30px' value='${count}' id='count_${id}' disabled>
                <button id='add' onclick='updateProductCount(${id}, 1)'>+</button>
                <h2 style='font-size:15px;' id='price_${id}'>${price * count}.00</h2>` +
              "<i class='fa-solid fa-trash' onclick='delElement(" + index + ")'></i></div>"
            );
          })
          .join('');

        document.getElementById('ttotal').innerHTML = 'rs ' + total + '.00';
      }
    }

 

  
let a = document.querySelector(".fa-solid")
console.log(a);

a.addEventListener("click" ,() => {
  // console.log("jbjs");
  let b = document.querySelector(".sidebar")
  console.log(b);
 let res = b.classList.toggle("true")
 if(res)
  {
    b.style.transform = "translateX(-940px)"
    b.style.transitionDuration = "2s"
    b.style.backgroundColor = "#000"
    b.style.color = "#fff"
  }else{
    b.style.transform = "translateX(550px)"
    b.style.transitionDuration = "2s"
  }
})