nosex = 0;
nosey = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;
function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex = results[0].pose.nose.y;
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        console.log("nosex = "+ nosex);
        console.log("nosey = "+ nosey);
        console.log("leftWristx = "+ leftWristx);
        console.log("rightWristx = "+ rightWristx);
        difference = floor(leftWristx-rightWristx);
        console.log("difference = "+ difference);
    }
}
function draw()
{
    background('#FFFDD0');
    document.getElementById("font_size").innerHTML = "width and height will be " + difference + "px";
    textSize(difference);
    fill('#FFD700');
    text('Prajna', 50, 400);
}
