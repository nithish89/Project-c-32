function preload() 
{ getBackgroundImg( ) } 
function setup(){ var canvas = createCanvas(1200,700); engine = Engine.create(); world = engine.world; } 
function draw(){ getBackgroundImg; 
  if(hour >=04 && hour <= 06 ) 
  { bg = "sunrise1.png"; } 
  else if(hour >= 06 && hour <= 08) { bg = "sunrise2.png"; } 
  else if(hour >= 23 && hour == 0 ) { bg = "sunset10.png"; } 
  else if(hour == 0 && hour <= 03) { bg = "sunset11.png"; } 
  else { bg = "sunset12.png"; } Engine.update(engine); } 
  async function getBackgroundImg()
  { var response = await fetch("http://worldclockapi.com/api/json/utc/now");
   var responsejson = await response.json();
    var dt = responsejson.currentDateTime; 
    console.log(dt); dt.slice(11,13); 
    backgroundImg = loadImage(bg); }

