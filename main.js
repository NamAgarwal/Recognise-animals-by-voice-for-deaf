dog = 0;
cat = 0;
cow = 0;
lion = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/F4tukY9jDs/model.json", modelReady);
}
function modelReady() {
    console.log('modelLoaded');
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        img = document.getElementById('image');

        if(results[0].label == "Barking"){
            dog = dog + 1;
            img.src = 'bark.png';
        }
         else if(results[0].label == "Meowing"){
            cat = cat + 1;
            img.src = 'cat.png';
        }
        else if(results[0].label == "Mooing"){
           cow = cow + 1;
            img.src = 'cow.jpg';
        }
        else if(results[0].label == "Roar"){
            lion = lion + 1;
            img.src = 'lion.jpg';
        }else{
            img.src = 'listen.gif';
        }
        
        document.getElementById("result_label").innerHTML = "The voice that has been detected is of "+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected dog - '+ dog +" times ,  Detected cat - "+ cat + " times , Detected cow - "+ cow + " times ,  Detected tiger - "+ lion + " times ,  ";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    }
}