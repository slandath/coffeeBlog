/* Navbar */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  /* French Press Calculator */

const brewedCoffee = document.querySelector('#brewedCoffee');
const waterAmt = document.querySelector('#waterAmt');
const coffeeAmt = document.querySelector('#coffeeAmt');

document.addEventListener('input', inputHandler);

function inputHandler() {
  const results = makeCoffee(+brewedCoffee.value);
  if (results.water % 8 === 0) {
    waterAmt.innerText = `${results.water} fl oz water
          (${results.water / 8} cups)`;
  } else {
    waterAmt.innerText = results.water + ' fl oz water';
  }
  if (results.groundCoffee % 16 === 0) {
    coffeeAmt.innerText = `${
      results.groundCoffee
    } tbsp coffee (${results.groundCoffee / 16} cup)`;
  } else
    coffeeAmt.innerText =
      results.groundCoffee + ' tbsp coffee';
}

function makeCoffee(num) {
  const water = num * 6;
  const groundCoffee = num * 2;
  return { water, groundCoffee };
}
