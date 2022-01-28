var slider = document.getElementById("myRange");
var dollarOutput = document.getElementById("dollar");
var viewsOutput = document.getElementById("output");
// toggle values
var checkbox = document.querySelector(".inp_checkbox");

// first load, default value is 100k - $16
output.textContent = slider.value;
dollarOutput.textContent = slider.value * 4;
viewsOutput.textContent = "100K";
checkbox.checked = false;


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

  // turn off the switch everytime we slide
  checkbox.checked = false;

  let newSliderValue = slider.value;
  dollarOutput.textContent = newSliderValue * 4;

  // list the condition 
  if (newSliderValue == 2) {
     viewsOutput.textContent = "10K";
  } else if(newSliderValue == 3) {
    viewsOutput.textContent = "50K";
  } else if(newSliderValue == 4) {
    viewsOutput.textContent = "100K";
  } else if(newSliderValue == 5) {
    viewsOutput.textContent = "250K";
  } else if(newSliderValue == 6) {
    viewsOutput.textContent = "500K";
  } else if(newSliderValue == 7) {
    viewsOutput.textContent = "600K";
  } else if(newSliderValue == 8) {
    viewsOutput.textContent = "700K";
  } else if(newSliderValue == 9) {
    viewsOutput.textContent = "1M";
  }
}

// switch function here
// switch on: take the monthly price value and times 25% discount
// switch off: return to original price
function applyDiscount() {
  if(checkbox.checked !== false) {
    dollarOutput.textContent = parseInt(dollarOutput.textContent) * 0.25;
  } else {
    dollarOutput.textContent = slider.value * 4;
  }
}


