function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,445);
    canvas.position(600,120);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#023020');
}

function modelLoaded(){
    console.log('Posenet is Initialized')
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
}
