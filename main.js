iski_uski_song = "";
heat_waves_song = "";
heat_waves = "";
scoreleftWrist = 0;

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    heat_waves_song = loadSound("heat waves.mp3");
    iski_uski_song = loadSound("Iski Uski.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("FF0000");

    heat_waves = heat_waves_song.isPlaying();
    console.log(heat_waves);

    if(scoreleftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        iski_uski_song.stop();
        if(het_waves == false)
        {
            heat_waves_song.play();
        }
        else
        {
            document.getElementById("").innerHTML = "Song name: Heat Waves";
        }
    }
}
