Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 20
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hF9MAXo4Z/model.json',modelloaded);
function modelloaded(){
    console.log('model loaded');
}
function check(){
    img=document.getElementById('capture');
    classifier.classify(img,got_result);
}
function got_result(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_acc").innerHTML=result[0].confidence.toFixed(20);
    }
}