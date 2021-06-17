song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
song6 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
    song3 = loadSound("music3.mp3");
    song4 = loadSound("music4.mp3");
    song5 = loadSound("music5.mp3");
    song6 = loadSound("music6.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded..... PoseNet is Initialized");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "| Left Wrist Y" + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "| Right Wrist Y = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song3.play();
    song3.setVolume(2);
    song3.rate(2);
}
