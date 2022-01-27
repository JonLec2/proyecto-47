const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


var gameState=0
var playerCount=0
var vidas=4;
var dronesdestruidos=0;
var form
var controles
var game
var spiderImg, spidersalto, spiderquieto;
var spider;
var bg1, bg2, bg3;
var columna, columnaImg, colum;
var columna2, columna2Img, colum2;
var columna3Img;
var piso1;
var piso, piso2, piso3, piso4, piso5, piso6;
var invisibleground;
var blockImg
var agua, aguaAnima;
var piraña, pirañaImg;
var lansarayosImg, lansarayos;
var paredecImg;
var pinoImg, arbolImg, lamparaImg, arbustoImg, autoImg, lasarayos2, sigueImg, arbusto2Img;
var boton1, boton2;

var blockGroup;
var pisoGroup;
var laserGroup;
var flechaGroup;
var rayo2Group;
var disparolaserGroup;
var dronesvoladoresGroup;
var paredesGroup;
var lavaGroup;
var pirañaGroup;
var misilopoGroup;
var laserultimoGroup;
var guardiaGroup;
var guradia2Group;
var puasGroup;
var block2Group;
var laserultimo2Group;
var lava2Group;
var puas2Group;
var lavavolGroup;

var laserImg, laserImg2;
var ground;

var flech=[];
var Flsprite, FlImg;
var llama1, llama2;
var lImg1, lImg2, lImg3;
var block1=[]
var block2=[]
var block3=[]
var block4=[]
var block5=[]
var flplayer=[]
var tr1, tr2, tr3;

var rayolaser2;
var dronesaleatorios;
var pareddivisora1, pareddivisora1Img1, pareddivisora1Img2;
var guardia, guradia2;
var dronImg;
var opmisil, opmisilImg;
var luz, luzImg;
var paredetener;

var puas1, puasImg

var anunciovida;
var font;
var vidaImg;
var v1, v2, v3, v4;


var lava1, lava2, lavaImg;

var lavavoladora1, lavavoladora2, lavavoladora3, lavavoladora4, lavavoladora5 ;
var lavavolImg

var vidan1=3;
var vidan2=3;
var disparolaser;
var laserultimo;
var laserultimo2, laserultimo2Img;
var ultimapared, paredivisora,pareddivImg;
var puasultimas;
var bl1ulti, bl2ulti, bl3ulti, bl4ulti, bl5ulti;
var impacto, impactoImg;
var lav1, lav2, agua3;
var puastecho, puastechoImg;
var guaridaImg
var pareddetener;

var anunciotesoro, anunciotesoroImg;

var restart, restartImg;
var diamante, diamanteImg;

function preload() {
laserImg=loadImage("fotos/laser.png")
laserImg2=loadImage("fotos/laser2.png")
bg1=loadImage("fotos/banner.png")
bg2=loadImage("fotos/back.png")
bg3=loadImage("fotos/back2.png")
spiderImg=loadAnimation("fotos/sp1.png", "fotos/sp2.png", "fotos/sp4.png", "fotos/sp5.png" )
spidersalto=loadAnimation("fotos/sp3.png")
spiderquieto=loadAnimation("fotos/spiderman1.png")
piso1=loadImage("fotos/piso.png")
blockImg=loadImage("fotos/cubo.png")
columnaImg=loadImage("fotos/columna.png")
columna2Img=loadImage("fotos/columna2.png")
FlImg=loadImage("fotos/flechaelec.png")
lImg1=loadImage("fotos/57522.png")
lImg2=loadImage("fotos/5753.png")
lImg3=loadImage("fotos/5376342_ccexpress.png")
puasImg=loadImage("fotos/puas.png")
font=loadFont('10204/Fortnite.ttf')
vidaImg=loadImage("fotos/pixilframe.png")
lavaImg=loadImage("fotos/lava2.png")
lavavolImg=loadImage("fotos/lavavol.png")
aguaAnima=loadAnimation("fotos/agua1.png", "fotos/agua2.png")
lansarayosImg=loadImage("fotos/lasarayos.png")
paredecImg=loadImage("fotos/paredelectricidad.png")
pinoImg=loadImage("fotos/pino.png")
arbolImg=loadImage("fotos/arbol.png")
lamparaImg=loadImage("fotos/lampara.png")
arbustoImg=loadImage("fotos/arbusto.png")
autoImg=loadImage("fotos/auto.png")
lasarayos2=loadImage("fotos/lansarayos2.png")
dronImg=loadImage("fotos/dron.png")
sigueImg=loadImage("fotos/sigue.png")
arbusto2Img=loadImage("fotos/arbusto2.png")
opmisilImg=loadImage("fotos/misil.png")
luzImg=loadImage("fotos/luz.png")
pareddivisora1Img1=loadAnimation("fotos/pared2.png")
pareddivisora1Img2=loadAnimation("fotos/pared3.png")
pareddivImg=loadImage("fotos/pared1.png")
laserultimo2Img=loadImage("fotos/laser3.png")
impactoImg=loadImage("fotos/impacto.png")
puastechoImg=loadImage("fotos/puastecho.png")
columna3Img=loadImage("fotos/columna3.png")
guaridaImg=loadImage("fotos/guarida.png")
pirañaImg=loadImage("fotos/pes.png")
anunciotesoroImg=loadImage("fotos/anunciotesoro.png")
fondofinImg=loadImage("fotos/fondofin.png")
restartImg=loadImage("fotos/restart.png")
diamanteImg=loadImage("fotos/diamante.png")


}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

game=new Game
game.start();
controles=new Controles;

//creación de grupos
blockGroup=createGroup();
pisoGroup=createGroup();
laserGroup=createGroup();
flechaGroup=createGroup();
llamasGroup=createGroup();
paredesGroup=createGroup();
rayo2Group=createGroup();
disparolaserGroup=createGroup();
dronesvoladoresGroup=createGroup();
lavaGroup=createGroup();
pirañaGroup=createGroup();
misilopoGroup=createGroup();
laserultimoGroup=createGroup();
guardiaGroup=createGroup();
guradia2Group=createGroup();
puasGroup=createGroup();
block2Group=createGroup();
laserultimo2Group=createGroup();
lava2Group=createGroup();
puas2Group=createGroup();
lavavolGroup=createGroup();
//Personaje principal

spider=createSprite(200, 400)
spider.addAnimation("correr", spiderImg);
spider.addAnimation("saltar", spidersalto)
spider.addAnimation("quieto", spiderquieto)
spider.scale=0.1
spider.visible=false


spider.debug=true


spider.setCollider("rectangle", 0, 0, 500, 900)

//piso invisible
invisibleground=createSprite(3400, 590, 8000, 50)
invisibleground.visible=false; 

//piso imagen
piso=createSprite(600, 580);
piso.addImage(piso1);
piso.scale=0.5
pisoGroup.add(piso)

piso2=createSprite(1800, 580)
piso2.addImage(piso1)
piso2.scale=0.5
pisoGroup.add(piso2)

piso3=createSprite(3000, 580)
piso3.addImage(piso1)
piso3.scale=0.5
pisoGroup.add(piso3)

piso4=createSprite(4200, 580)
piso4.addImage(piso1)
piso4.scale=0.5
pisoGroup.add(piso4)

piso5=createSprite(5400, 580)
piso5.addImage(piso1)
piso5.scale=0.5
pisoGroup.add(piso5)

piso6=createSprite(6600, 580)
piso6.addImage(piso1)
piso6.scale=0.5
pisoGroup.add(piso6)



pisoGroup.setVisibleEach(false)

colum=createSprite(1800, 180, 1190, 70)
colum.visible=false

colum2=createSprite(2980, 125, 1200, 70)
colum2.visible=false

//lava
lava1=createSprite(534, 533, 10, 10)
lava1.addImage(lavaImg)
lava1.scale=0.2
lavaGroup.add(lava1)


lava2=createSprite(925, 533, 10, 10)
lava2.addImage(lavaImg)
lava2.scale=0.2
lavaGroup.add(lava2)

lava3=createSprite(1089, 533, 10, 10)
lava3.addImage(lavaImg)
lava3.scale=0.2
lavaGroup.add(lava3)

lavaGroup.setVisibleEach(false)

//bloques de la primera montaña
var  bl1=createSprite(400, 540, 10, 10)
bl1.addImage(blockImg)
bl1.scale=0.2
blockGroup.add(bl1)


for(var m=390; m<=540; m=m+50){
var blg=createSprite(600, m , 10, 10)
blg.addImage(blockImg)
blg.scale=0.2
blockGroup.add(blg)

}

for(var m=490; m<=540; m=m+50){
var blg2=createSprite(450, m , 10, 10)
blg2.addImage(blockImg)
blg2.scale=0.2
blockGroup.add(blg2)

}


for(var m=390; m<=540; m=m+50){
var blg3=createSprite(850, m , 10, 10)
blg3.addImage(blockImg)
blg3.scale=0.2
blockGroup.add(blg3)
}

for(var m=440; m<=540; m=m+50){
var blg4=createSprite(1000, m , 10, 10)
blg4.addImage(blockImg)
blg4.scale=0.2
blockGroup.add(blg4)
}

for(var m=490; m<=540; m=m+50){
var blg5=createSprite(1180, m , 10, 10)
blg5.addImage(blockImg)
blg5.scale=0.2
blockGroup.add(blg5)
}


blockGroup.setVisibleEach(false)


puas=createSprite(1255, 550, 10, 10)
puas.addImage(puasImg)
puas.scale=0.08
puasGroup.add(puas)
puasGroup.setVisibleEach(false)

agua=createSprite(728, 540, 10, 10)
agua.addAnimation("mover", aguaAnima)
agua.scale=0.178

lansarayos=createSprite(2400, 520, 10, 10)
lansarayos.addImage(lansarayosImg)
lansarayos.scale=0.15



boton1=createSprite(2420, 500, 10, 10)
boton2=createSprite(3490, 170, 10, 10)

//vidas
v1=createSprite(400, 200, 20, 20)
v1.addImage(vidaImg)
v1.scale=0.3
v1.visible=false

v2=createSprite(400, 200, 20, 20)
v2.addImage(vidaImg)
v2.scale=0.3
v2.visible=false


v3=createSprite(400, 200, 20, 20)
v3.addImage(vidaImg)
v3.scale=0.3
v3.visible=false

v4=createSprite(400, 200, 20, 20)
v4.addImage(vidaImg)
v4.scale=0.3
v4.visible=false


//laseres del segundo nivel
for(var m=1410; m<=2410; m=m+300){
  var laser=createSprite(m, 340, 20, 20)
  laser.addImage(laserImg)
  laser.scale=0.2
  laser.velocityY=-13
  laserGroup.add(laser)
}

for(var u=1560; u<=2210; u=u+300){
  var laser2=createSprite(u, 450, 20, 20)
  laser2.addImage(laserImg)
  laser2.scale=0.2
  laser2.velocityY=+11
  laserGroup.add(laser2)
}


laserGroup.setVisibleEach(false)


//bloques 2
for(var f=490; f<=540; f=f+50){
  var blg21=createSprite(2530, f , 10, 10)
  blg21.addImage(blockImg)
  blg21.scale=0.2
  blockGroup.add(blg21)
  }
  



//paredes del tercer nivel

for(var y=2600; y<=3500; y=y+140){
  var pared1=createSprite(y, 480, 13, 200)
  pared1.addImage(paredecImg)
  pared1.scale=0.3
 

 pared1.setCollider("rectangle", 0, 40, 90, 560)
  paredesGroup.add(pared1)
}


// piso con motor físico del cuarto nivel
ground=new Ground(4200, 547, 1200, 20)



//montañas con body 
for(var k=250; k<=550; k=k+50){
  block1.push(new Block(4600, k, 50, 50))

}

for(var p=250; p<=550; p=p+50){
  block2.push(new Block(4300, p, 50, 50))

}

for(var p=400; p<=550; p=p+51){
  block3.push(new Block(4200, p, 50, 50))

}


for(var p=350; p<=550; p=p+51){
  block4.push(new Block(4400, p, 50, 50))

}

pareddivisora1=createSprite(4400, 340, 10, 500)
pareddivisora1.addAnimation("pared", pareddivisora1Img1)
pareddivisora1.scale=0.4
pareddivisora1.addAnimation("pequeña", pareddivisora1Img2)



//guardias del penultimo nivel
guardia=createSprite(5900, 300, 20, 40)
guardia.addImage(dronImg)
guardia.scale=0.13
guardiaGroup.add(guardia)
guradia2=createSprite(5900, 100, 20, 40)
guradia2.addImage(dronImg)
guradia2.scale=0.13
guradia2Group.add(guradia2)

paredivisora=createSprite(4770, 340, 10, 500)
paredivisora.addImage(pareddivImg)
paredivisora.scale=0.4
ultimapared=createSprite(6000, 340, 10, 600)
ultimapared.addImage(pareddivImg)
ultimapared.scale=0.4




for(var u=440; u<=540; u=u+50){
bl1ulti=createSprite(6200, u, 10, 10);
bl1ulti.addImage(blockImg)
bl1ulti.scale=0.2
block2Group.add(bl1ulti)
}

for(var g=390; g<=540; g=g+50){
bl2ulti=createSprite(6400, g, 10, 10);
bl2ulti.addImage(blockImg)
bl2ulti.scale=0.2
block2Group.add(bl2ulti)
}

for(var k=490; k<=540; k=k+50){
bl3ulti=createSprite(6600, k, 10, 10);
bl3ulti.addImage(blockImg)
bl3ulti.scale=0.2
block2Group.add(bl3ulti)
}



lav1=createSprite(6300, 533, 10, 10)
lav1.addImage(lavaImg)
lav1.scale=0.2
lava2Group.add(lav1)

lav2=createSprite(6500, 533, 10, 10)
lav2.addImage(lavaImg)
lav2.scale=0.2
lava2Group.add(lav2)

agua3=createSprite(6720, 540, 10, 10)
agua3.addAnimation("mover", aguaAnima)
agua3.scale=0.178

for(var v=6800; v<=7000; v=v+50){
  bl4ulti=createSprite(v, 540, 10, 10);
  bl4ulti.addImage(blockImg)
  bl4ulti.scale=0.2
  block2Group.add(bl4ulti)
  }
  
  for(var c=6800; c<=7000; c=c+50){
    bl5ulti=createSprite(c, 490, 10, 10);
    bl5ulti.addImage(blockImg)
    bl5ulti.scale=0.2
    block2Group.add(bl5ulti)
    }
    
      
anunciotesoro=createSprite(300, 320, 10, 10)
anunciotesoro.addImage(anunciotesoroImg)
anunciotesoro.scale=0.5
anunciotesoro.visible=false

restart=createSprite(300, 520, 10, 10)
restart.addImage(restartImg)
restart.scale=0.5
restart.visible=false

diamante=createSprite(6900, 397)
diamante.addImage(diamanteImg)
diamante.scale=0.3

}



function draw() {
  Engine.update(engine);

  
//choque de laseres del primer nivel
laserGroup.bounceOff(colum)
laserGroup.bounceOff(invisibleground)



//funcón para pasar del estado 0 a 1
  if(playerCount===1){
    gameState=1
  }
  
  //juego

  if(gameState===1){
   clear();
    game.play();
  background(0, 120, 120)




   //visibilidades de los grupos
  invisibleground.visible=false
  spider.visible=true
  blockGroup.setVisibleEach(true)
  pisoGroup.setVisibleEach(true)
  laserGroup.setVisibleEach(true)

  lavaGroup.setVisibleEach(true)
  puasGroup.setVisibleEach(true)

   spider.collide(invisibleground)
   spider.collide(blockGroup)
   spider.collide(colum)
 //  spider.collide(colum2)
   spider.collide(ultimapared)
spider.collide(block2Group)
   

  camera.position.x=spider.x+400
  camera.position.y=465


v1.y=camera.position.y-310
v1.x=camera.position.x+390
v1.visible=true
 
v2.y=camera.position.y-310
v2.x=camera.position.x+440
v2.visible=true
 

v3.y=camera.position.y-310
v3.x=camera.position.x+490
v3.visible=true

v4.y=camera.position.y-310
v4.x=camera.position.x+540
v4.visible=true


//laseres
if(spider.x<2200){
  if(frameCount % 130 ===0){
    var laser3=createSprite(2330, 500, 20, 20)
    laser3.addImage(laserImg2)
    laser3.scale=0.2
    laser3.velocityX=-7
    laser3.lifetime=135
    laserGroup.add(laser3)
  }
}

//accesorios
if(spider.x>2200){

boton1.shapeColor="red"

}
else{
  boton1.shapeColor="green"

}


//lava del primer nivel
lavavol();

//flecha del tercer nivel

if(spider.x>2410  && spider.x<3510 ){
  if(frameCount % 70 ===0){
  
  Flsprite=createSprite(3470, 69, 30, 10)
  Flsprite.addImage(FlImg)
  Flsprite.rotation=-30
  Flsprite.scale=0.1
  Flsprite.lifetime=40
  Flsprite.velocityX=-22
  Flsprite.velocityY=+13
  Flsprite.velocityY=Flsprite.velocityY + 1.91
  Flsprite.friction=0.012
  flechaGroup.add(Flsprite)
  
  }
  }

flechaGroup.bounceOff(invisibleground)

if(spider.x>3510){

  boton2.shapeColor="red"
  
  }
  else{
    boton2.shapeColor="lime"
  
  }
  

//función llamas del tercer nivel

llamacielo();

llamasGroup.collide(invisibleground)




//rayo laser del nivel 4
if(spider.x>3450 && spider.x<4800){
if(frameCount %30===0){
  rayolaser2=createSprite(random(4500, 4800),100, 30, 10)
rayolaser2.addImage(laserImg2)

rayolaser2.scale=0.2


var positionx1= Math.round(random(1, 2));
if(positionx1==1){
  rayolaser2.y=100
  rayolaser2.velocityY=+13
  rayolaser2.rotation=-25
}

else{
if(positionx1==2){
  rayolaser2.y=540;
  rayolaser2.velocityY=-7
  rayolaser2.rotation=+18
}
}

rayolaser2.velocityX=-31

rayolaser2.lifetime=50
rayo2Group.add(rayolaser2)



}

spider.collide(pareddivisora1)


//drones aleatorios

if(dronesdestruidos>=0){
if (frameCount % 60===0){
  dronesaleatorios=createSprite(4750, 270, 30, 10)
  dronesaleatorios.addImage(dronImg)
  dronesaleatorios.scale=0.1
  dronesaleatorios.velocityX=-13

  if(spider.y<270){
  dronesaleatorios.velocityY=-2
  }

  if(spider.y>270){
    dronesaleatorios.velocityY=+3
    }
  
    dronesaleatorios.lifetime=120

dronesvoladoresGroup.add(dronesaleatorios)

}
}

}





//guardias del penultimo nivel
guardia.y=spider.y+random(20, 25)
guradia2.y=spider.y-random(80, 85)


if(spider.x>4770 && spider.x<6000 ){
  if(vidan1>0 || vidan2>0){
  if(frameCount % 40===0){
    opmisil=createSprite(5900, 300, 10, 10)
    opmisil.addImage(opmisilImg)
    opmisil.scale=0.04
    
    
  
    var positionx= Math.round(random(1, 2));
    if(positionx==1){
      opmisil.y=random(300, 550)
    }
  
    else{
  if(positionx==2){
      opmisil.y=guardia.y;
  }
    }
  
    opmisil.lifetime=150
  misilopoGroup.add(opmisil)
  

  if(vidan1===3 || vidan2===3){
    opmisil.velocityX=-14
  }

  if(vidan1===2 || vidan2===2){
    opmisil.velocityX=-17
  }

  if(vidan1===1 || vidan2===1){
    opmisil.velocityX=-20
  }

console.log(opmisil.velocityX)

  }
  }

    }





    if(spider.x>=4770){
      spider.collide(paredivisora)
    }


if(spider.x>6000){
    if(frameCount % 70===0){
for(var t=6380; t<=6450; t=t+10){
  puastecho=createSprite(t, 170, 3, 6)
  puastecho.addImage(puastechoImg)
  puastecho.scale=0.1
  puastecho.velocityY=+12
  puastecho.lifetime=30
  puas2Group.add(puastecho)
  }
}
}
  


controles.display();

//moviminetos
  if(keyDown("right_arrow")  ){
    spider.x=spider.x+8
     }
  


    if(spider.x>190){
    if(keyDown("left_arrow")){
    spider.x=spider.x-8
  
    }
    }
  
  if(spider.y>300){
  if(keyDown("up_arrow") ){
    spider.velocityY=spider.velocityY-3
//spider.maxSpeed=+15
  }
  }
//gravedad
  spider.velocityY = spider.velocityY + 0.91
  

  //arrojar flechas en el cuarto nivel
  if(spider.x>3500 && spider.x<4800){
if(keyDown("2")){
 flplayer.push(new BaseClass(spider.x, spider.y, 40, 10))
}
  }
   
  if(spider.x>3500 && spider.x<4780){
    if(keyDown("3")){
    disparolaser=createSprite(spider.x, spider.y, 40, 10)
    disparolaser.addImage(laserultimo2Img)
    disparolaser.scale=0.1
    disparolaser.velocityX=+17
    disparolaser.lifetime=100
    disparolaserGroup.add(disparolaser)
    }
      }


  if(spider.x>4800 && spider.x<6000){
if(keyDown("3")){
laserultimo=createSprite(spider.x, spider.y, 40, 10)
laserultimo.addImage(laserultimo2Img)
laserultimo.scale=0.1
laserultimo.velocityX=+17
laserultimo.lifetime=100
laserultimoGroup.add(laserultimo)
}
  }
  
  if(spider.x>6025){
    if(keyDown("3")){
    laserultimo2=createSprite(spider.x, spider.y, 40, 10)
 laserultimo2.addImage(laserultimo2Img)
 laserultimo2.scale=0.1
    laserultimo2.velocityX=+17
    laserultimo2.lifetime=100
  laserultimo2Group.add(laserultimo2)
    }
      }
      
    
      



  //imagenes de fondo
    for(var k=0; k<=7300; k=k+2380) {
  image(bg2, k, -25, 1200, 620)
    }
  
     for(var k=1190; k<=6000; k=k+2380){
  image(bg3, k, -25, 1200, 620)
     }
    
 image(guaridaImg, 5990, 137, 1200, 400)
  image(columnaImg, 1200, 150, 1200, 290)
  image(columna2Img, 2390, 95, 1200, 160)
  image(columna3Img, 6000, 75, 1200, 60)

 //accesorios 2
image(pinoImg, 150, 300, 130, 200)
image(arbolImg, 650, 350, 150, 150)
image(lamparaImg, 1350, 350, 100, 150)
image(arbustoImg, 1900, 450, 150, 50)
image(arbustoImg, 2040, 450, 150, 50)
image(arbolImg, 2700, 350, 150, 150)
image(arbusto2Img, 3100, 450, 140, 50 )
//image(lasarayos2, 3500, 5, 100, 50)
image(pinoImg, 5500, 300, 120, 200)
image(arbusto2Img, 5100, 450, 140, 50)
//image(arbolImg, 6400, 350, 150, 150)


         spider.depth=piso.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso2.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso3.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso4.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso5.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso6.depth;
         spider.depth=spider.depth+1;
         
         spider.depth=lansarayos.depth;
         spider.depth=spider.depth+1;
         
        guardia.depth=ultimapared.depth;
         guardia.depth=guardia.depth+1;
         
         guradia2.depth=ultimapared.depth;
         guradia2.depth=guradia2.depth+1;

        //display de los Bodies
    
         ground.display();

         for (var i = 0; i < block1.length; i++) {
          block1[i].display();   
        }
      

    
        for (var h = 0; h < block2.length; h++) {
          block2[h].display();   
        }

        
        for (var w = 0; w < block3.length; w++) {
          block3[w].display();   
        }

         
        for (var i = 0; i < block4.length; i++) {
          block4[i].display();   
        }


        //display de lansamiento de flechas
        for (var j = 0; j < flplayer.length; j++) {
          flplayer[j].display();   
        }


        fill("white")
textFont(font, 32)
        text("Drones destruidos:" + dronesdestruidos, 3800, camera.position.y/2-300)

//drones 
if(disparolaserGroup.isTouching(dronesvoladoresGroup)){
  dronesdestruidos+=1
  disparolaserGroup.destroyEach();
  dronesvoladoresGroup.destroyEach();
}


if(dronesdestruidos===2){
  dronesvoladoresGroup.destroyEach();
  rayo2Group.destroyEach();
  pareddivisora1.changeAnimation("pequeña", pareddivisora1Img2)
}



//ultimas naves
if(laserultimoGroup.isTouching(guardia)){

  laserultimoGroup.destroyEach();
  vidan1-=1

impacto=createSprite(guardia.x-20, guardia.y)
impacto.addImage(impactoImg)
impacto.scale=0.2
impacto.lifetime=4

}


if(laserultimoGroup.isTouching(guradia2)){
 
  laserultimoGroup.destroyEach();
 vidan2-=1

 impacto=createSprite(guradia2.x-20, guradia2.y)
 impacto.addImage(impactoImg)
 impacto.scale=0.2
 impacto.lifetime=4


}

if(vidan1===0){
  guardiaGroup.destroyEach();

}


if(vidan2===0){
  guradia2Group.destroyEach();
  
}






        //score

        fill("white")
textFont(font, 32)
        text("Vida:", camera.position.x+300, camera.position.y-300)


        if(spider.isTouching(laserGroup) || spider.isTouching(lavaGroup) || spider.isTouching(puasGroup) || spider.isTouching(pirañaGroup)){
          spider.x=200
          spider.y=500
          spider.velocityY=0
          vidas-=1
anunciovida=createSprite(700, camera.position.y/2, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.32
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15

        }

      


if(spider.isTouching(paredesGroup)  || spider.isTouching(flechaGroup) || spider.isTouching(llamasGroup)){
  spider.x=2455
  spider.y=500
vidas-=1
spider.velocityY=0
spider.velocityX=0
flechaGroup.destroyEach();

anunciovida=createSprite(3000, camera.position.y/2, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.32
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15



}


if(spider.isTouching(rayo2Group)){
  spider.x=3600
  spider.y=440
vidas-=1
spider.velocityY=0
spider.velocityX=0
rayo2Group.destroyEach();


anunciovida=createSprite(4200, camera.position.y/2, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.32
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15




}


if(spider.isTouching(misilopoGroup)){
spider.x=4810
spider.y=440
vidas-=1
spider.velocityY=0
misilopoGroup.destroyEach();


anunciovida=createSprite(5400, camera.position.y/2, 40, 40)
anunciovida.addImage(sigueImg)
anunciovida.scale=0.32
anunciovida.lifetime=50   

luz=createSprite(spider.x, spider.y)
luz.addImage(luzImg)
luz.scale=0.3
luz.lifetime=15

}


if(vidan1===0  && vidan2===0){
  ultimapared.destroy();
}


if(spider.isTouching(lava2Group) || spider.isTouching(puas2Group)){
  spider.x=6100
  spider.y=440
  vidas-=1
  spider.velocityY=0
  spider.velocityX=0
}



if(vidas===3){
  v4.visible=false
}

if(vidas===2){
  v4.visible=false
  v3.visible=false

}

if(vidas===1){
  v4.visible=false
  v3.visible=false
  v2.visible=false
}


if(vidas===0){
  v4.visible=false
  v3.visible=false
  v2.visible=false
  v1.visible=false

gameState=2

}


console.log(vidas)


  }


  if(gameState===2){
anunciovida.destroy();
spider.changeAnimation("quieto", spiderquieto)

anunciotesoro.visible=true
anunciotesoro.x=camera.position.x
anunciotesoro.y=camera.position.y/2+95


restart.x=camera.position.x
restart.visible=true

pirañaGroup.destroyEach();
lavavolGroup.destroyEach();
flechaGroup.destroyEach();
llamasGroup.destroyEach();
rayo2Group.destroyEach();
dronesvoladoresGroup.destroyEach();
misilopoGroup.destroyEach();
puas2Group.destroyEach();


if(mousePressedOver(restart)) {
  restart2();
}



  }

  
 



  console.log(gameState);




  drawSprites()
}


function llamacielo(){
  if(spider.x>2410  && spider.x<3510 ){
    if(frameCount % 60 ===0){
    
    llama1=createSprite(random(2600, 3400), 30, 30, 10)
    var rand=Math.round(random(1, 2));
    switch(rand){
      case 1: llama1.addAnimation("caer1",lImg1)
      break;
      case 2: llama1.addAnimation("caer2",lImg2)
      default: break;
    }

    llama1.velocityY=+13
llama1.scale=0.12
llama1.lifetime=40

llamasGroup.add(llama1)

    }

    
    }

    

}



function lavavol(){

  if(frameCount % 30===0){
    lavavoladora1=createSprite(random(495, 560), 540, 10, 10)
    lavavoladora1.addImage(lavavolImg)
    lavavoladora1.scale=0.3
    lavavoladora1.velocityY=-12
    lavavoladora1.lifetime=10
    lavavolGroup.add(lavavoladora1)

  }

  if(frameCount % 40===0){
  lavavoladora2=createSprite(random(880, 970), 540, 10, 10)
  lavavoladora2.addImage(lavavolImg)
  lavavoladora2.scale=0.3
  lavavoladora2.velocityY=-12
  lavavoladora2.lifetime=13
  lavavolGroup.add(lavavoladora2)
  }

  if(frameCount % 35===0){
    lavavoladora3=createSprite(random(1050, 1150), 540, 10, 10)
    lavavoladora3.addImage(lavavolImg)
    lavavoladora3.scale=0.3
    lavavoladora3.velocityY=-12
    lavavoladora3.lifetime=8
    lavavolGroup.add(lavavoladora3)

  }

  if(frameCount % 35===0){
    lavavoladora4=createSprite(random(6240, 6360), 540, 10, 10)
    lavavoladora4.addImage(lavavolImg)
    lavavoladora4.scale=0.3
    lavavoladora4.velocityY=-12
    lavavoladora4.lifetime=10

  }

  
  if(frameCount % 35===0){
    lavavoladora5=createSprite(random(6440, 6540), 540, 10, 10)
    lavavoladora5.addImage(lavavolImg)
    lavavoladora5.scale=0.3
    lavavoladora5.velocityY=-12
    lavavoladora5.lifetime=12

  }

  if(frameCount %35===0){
    piraña=createSprite(random(640, 820), 540, 10, 10)
    piraña.addImage(pirañaImg)
    piraña.scale=0.1
    piraña.velocityY=-12
    piraña.lifetime=21
    pirañaGroup.add(piraña)
  }



}

function restart2(){
  gameState=1
  anunciotesoro.visible=false
  restart.visible=false
  spider.x=200
  spider.y=400
  spider.changeAnimation("correr", spiderImg)
vidas=4
 vidan1=3
vidan=3
dronesdestruidos=0

}


function touchMoved() {
  spider.x=spider.x+8

  return false;
  }


