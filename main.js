difference = 0
leftWristX = 0
rightWristX = 0

function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(700, 500)
    canvas.position(560, 80)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
  }
  
  function draw(){
    background("white")
    textSize(difference)
    fill("red")
    text('Vinícius', 50, 400)
  }
  
  function modelLoaded(){
    console.log("PoseNet inicializado!")
  }
  
  function gotPoses(resultado, error){
    if(resultado.length > 0){
      console.log(resultado)
      leftWristX = resultado[0].pose.leftWrist.x
      rightWristX = resultado[0].pose.rightWrist.x
      difference = floor(leftWristX - rightWristX)
      console.log(difference)
      console.log(leftWristX, rightWristX)
    }
    else{
      console.error(error)
    }
  }