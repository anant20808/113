nosex="";
nosey="";
function preload(){
    img=loadImage("https://i.postimg.cc/3JQT8kfB/tash.png")
}
function setup(){
canvas = createCanvas(300,400);
canvas.center();
video= createCapture(VIDEO);
video.size(300,400);
video.hide()
posenet = ml5.poseNet(video,modeloaded)
posenet.on('pose',gotpose)
}
function modeloaded(){
    console.log("model ready")
}
function gotpose(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nose x="+ results[0].pose.nose.x);
    console.log("nose y="+ results[0].pose.nose.y);
}
}
function draw(){
image(video,0,0,300,400);
image(img,nosex-15,nosey+7,30,30);

}
function take_snapshot(){
    save("img.png")
}