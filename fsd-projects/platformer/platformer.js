$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0,150,175,20);
createPlatform(165,150,10,150);
createPlatform(175,275,50,25);
createPlatform(300,0,15,200);
createPlatform(300,350,190,10);
createPlatform(490,310,10,50);
createPlatform(490,300,160,10);
createPlatform(780,300,40,10);
createPlatform(990,300,20,10);
createPlatform(1200,200,200,10);
createPlatform(1200,0,10,100);
createPlatform(1200,100,50,10);
createPlatform(1200,200,10,350);
createPlatform(1100,550,110,10);
createPlatform(1095,500,10,60);
createPlatform(1000,500,100,10);
createPlatform(995,500,10,60);
createPlatform(850,550,150,10);
createPlatform(845,500,10,60);
createPlatform(700,500,150,10);
createPlatform(695,500,10,60);
createPlatform(600,550,100,10);
createPlatform(595,500,10,60);
createPlatform(300,450,305,10);
createPlatform(300,550,300,10);
createPlatform(295,450,10,110);
createPlatform(0,700,100,50);
createPlatform(0,600,20,10);
createPlatform(0,500,20,10);
createPlatform(0,400,20,10);
createPlatform(180,480,40,10);
createPlatform(290,550,10,100);
createPlatform(1300,700,100,50);
createPlatform(1200,600,40,10);
createPlatform(1360,500,40,10);
createPlatform(1200,410,40,10);
createPlatform(1300,300,100,10);
createPlatform(100,280,100,20);
createPlatform(150,300,10,300);
createPlatform(250,640,50,10);
    // TODO 3 - Create Collectables
createCollectable("database",1220, 50,0.1,1);
createCollectable("database",110,220,0.1,1)
createCollectable("database",1330,230,0.1,1)

    
    // TODO 4 - Create Cannons
createCannon("right",230,1700);
createCannon("top",500,1200);
createCannon("right",530,2400);
createCannon("top",958,1300);
createCannon("bottom",20,3000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
