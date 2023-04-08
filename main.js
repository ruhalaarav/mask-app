
function setup(){
canvas = createCanvas(300,300)
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y_Ku5XZtF/model.jason', modelLoaded)

}

function modelLoaded(){

    console.log('ModelLoaded');
}

function draw(){
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotResult);
}


function gotResult(error,results){

    if (error) {
        console.log(error)

    } else {
        console.log(result);
        document.getElementById("result_object_name").innerHTML= result[0].label;
        document.getElementById("result_object_accuracy").innerHTML= result[0].label.confidence.toFixed(3)
    }
}