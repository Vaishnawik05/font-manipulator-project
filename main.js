leftWristX= 0;
rightWristX= 0;
difference= 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 180)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#006400');
    document.getElementById("font_size").innerHTML = difference +"px";
    textSize(difference);
    fill('#90EE90');
    text('Vaishnawi', 275, 275);
}

function modelLoaded(){
    console.log ('PoseNet is Intialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}