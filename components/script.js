
var slider = document.getElementById("myRange");
var dollarOutput = document.getElementById("dollar");
var viewsOutput = document.getElementById("output");

output.innerHTML = slider.value; // Display the default slider value
dollarOutput.innerHTML = "$" + (((slider.value)/ 10) * 4) + ".00";
viewsOutput.innerHTML = "100K";

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  // list the condition 
  dollarOutput.innerHTML = "$" + (((slider.value)/ 10) * 4) + ".00";

  if (dollarOutput.innerHTML === "$8.00") {
    viewsOutput.innerHTML = "10K";
  } else if(dollarOutput.innerHTML === "$12.00") {
    viewsOutput.innerHTML = "50K";
  } else if(dollarOutput.innerHTML === "$16.00") {
    viewsOutput.innerHTML = "100K";
  } else if(dollarOutput.innerHTML === "$20.00") {
    viewsOutput.innerHTML = "250K";
  } else if(dollarOutput.innerHTML === "$24.00") {
    viewsOutput.innerHTML = "500K";
  } else if(dollarOutput.innerHTML === "$28.00") {
    viewsOutput.innerHTML = "600K";
  } else if(dollarOutput.innerHTML === "$32.00") {
    viewsOutput.innerHTML = "700K";
  } else if(dollarOutput.innerHTML === "$36.00") {
    viewsOutput.innerHTML = "1M";
  }

} 

