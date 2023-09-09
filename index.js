let piston = document.getElementById("piston1");
let piston_extended = document.getElementById("piston2");
let grass_block = document.getElementById("grass-block");

setInterval(piston_animation,1000);

function piston_animation()
{
  piston.style.display = "none";
  piston_extended.style.display = "block";
  grass_block.style.top = "20px";
  setTimeout(piston_reset,500);
}
function piston_reset()
{
  piston.style.display = "block";
  piston_extended.style.display = "none";
  grass_block.style.top = "30px";
}






