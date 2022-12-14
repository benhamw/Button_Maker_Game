var about = document.getElementById('about');
var aboutBtn = document.getElementById('aboutBtn');
var inspiration = document.getElementById('inspiration');
var inspirationBtn = document.getElementById('inspirationBtn');
var contact = document.getElementById('contact');
var contactBtn = document.getElementById('contactBtn');

function aboutButton() {
  if (about.style.display === 'none') {
    about.style.display = 'initial';

    aboutBtn.textContent = 'Hide About';
  } else {
    about.style.display = 'none';

    aboutBtn.textContent = 'About';
  }
};

function inspirationButton() {
    if (inspiration.style.display === 'none') {
      inspiration.style.display = 'initial';
  
      inspirationBtn.textContent = 'Hide Inspiration';
    } else {
      inspiration.style.display = 'none';
  
      inspirationBtn.textContent = 'Inspiration';
    }
  };

  function contactButton() {
    if (contact.style.display === 'none') {
      contact.style.display = 'initial';
  
      contactBtn.textContent = 'Hide Contact';
    } else {
      contact.style.display = 'none';
  
      contactBtn.textContent = 'Contact';
    }
  };

var buttonCount = 0;
var clickValue = 1;
var autoClickerCount = 0;
var autoClickerCost = 100;
var buttonMultiplierCount = 0;
var buttonMultiplierCost = 10;

function addButtons() {
  sound();
  buttonCount = buttonCount + clickValue;
  document.getElementById("message").innerHTML = " ";
  displayCounts();
}

function addAutoClickers() {
  sound();
  document.getElementById("message").innerHTML = " ";
  if (buttonCount > autoClickerCost) {
    buttonCount = buttonCount - autoClickerCost;
    autoClickerCount = autoClickerCount + 1;
    autoClickerCost = autoClickerCost * 1.1;
    displayCounts();
    autoclickTimer();
  } else {
    document.getElementById("message").innerHTML =
      "<b><i>You don't have enough buttons.  Keep going!</i></b>";
  }
}

const myInterval = setInterval(autoclickTimer, 1000);

function autoclickTimer() {
  if (autoClickerCount > 0) {
    sound();
  }
  buttonCount = buttonCount + autoClickerCount * clickValue;
  document.getElementById("button-count").innerHTML =
    Math.round(buttonCount).toLocaleString("en-US");
}

function addButtonMultiplier() {
  sound();
  document.getElementById("message").innerHTML = " ";
  if (buttonCount >= buttonMultiplierCost) {
    buttonCount = buttonCount - buttonMultiplierCost;
    buttonMultiplierCount = buttonMultiplierCount + 1;
    if (buttonMultiplierCount == 1) {
      clickValue = clickValue * 1.2;
    } else if (buttonMultiplierCount > 1) {
      clickValue = Math.pow(1.2, buttonMultiplierCount);
    }
    buttonMultiplierCost = buttonMultiplierCost * 1.1;
    displayCounts();
  } else {
    document.getElementById("message").innerHTML =
      "<b><i>You don't have enough buttons.  Keep going!</i></b>";
  }
}

function displayCounts() {
  document.getElementById("button-count").innerHTML =
    Math.round(buttonCount).toLocaleString("en-US");
  document.getElementById("auto-clicker-count").innerHTML =
    autoClickerCount.toLocaleString("en-US");
  document.getElementById("auto-clicker-cost").innerHTML =
    Math.round(autoClickerCost).toLocaleString("en-US");
  document.getElementById("multiplier-count").innerHTML =
    buttonMultiplierCount.toLocaleString("en-US");
  document.getElementById("multiplier-cost").innerHTML =
    Math.round(buttonMultiplierCost).toLocaleString("en-US");
  document.getElementById("buttons-per-click").innerHTML = parseFloat(
    clickValue.toFixed(2)
  ).toLocaleString("en-US");
  document.getElementById("message").innerHTML = " ";
}

function reset() {
  sound();
  buttonCount = 0;
  clickValue = 1;
  autoClickerCount = 0;
  autoClickerCost = 100;
  buttonMultiplierCount = 0;
  buttonMultiplierCost = 10;
  displayCounts();
  clearInterval(myInterval);
}

function sound() {
  var snd = new Audio("click.wav"); //wav is also supported
  snd.play(); //plays the sound
}
