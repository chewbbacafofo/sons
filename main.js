
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2eOFQ-CFX/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('orelha_ouvindo-removebg-preview.png');
        img1 = document.getElementById('galinha.jpeg');
        img2 = document.getElementById('leao-126767138.jpg');
        img3 = document.getElementById('baixados.jpeg');
        img4 = document.getElementById('cachorro.jpg');

        if (results[0].label == "latido"){
            img4.src = 'cachorro.jpg';
         
        } else if (results[0].label == "miado"){
            img3.src = 'baixados.jpeg';   
        } else if (results[0].label == "rugido"){
            img2.src = 'leao-126767138.jpg';
        } else if (results[0].label == "cacarejo"){
            img1.src = 'galinha.jpeg';
        }
    }
}