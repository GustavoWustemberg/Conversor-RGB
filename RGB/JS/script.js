//Id selection
let redRange = document.getElementById('red');
let greenRange = document.getElementById('green');
let blueRange = document.getElementById('blue');
let bloco = document.getElementById('bloco');

//Selections values
let redValue = redRange.value;
let greenValue = greenRange.value;
let blueValue = blueRange.value;

//Track the movement of ranges
redRange.addEventListener('input', mudaCor);
greenRange.addEventListener('input', mudaCor);
blueRange.addEventListener('input', mudaCor);

//Function for color change in block
function mudaCor() {
  let redValue = redRange.value;
  let greenValue = greenRange.value;
  let blueValue = blueRange.value;
  let rgb = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
  bloco.style.backgroundColor = rgb;
  document.getElementById('valorRGB').value = rgb;
}
