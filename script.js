// Array of images
const images = [
    "../Mosquito copy/mosquitoA.png", //A
    "../Mosquito copy/mosquitoB.png", //B
    "../Mosquito copy/mosquitoC.png", //C
    "../Mosquito copy/mosquitoD.png", //D
    "../Mosquito copy/mosquitoE.png", //E
    "../Mosquito copy/mosquitoF.png", //F
    "../Mosquito copy/mosquitoG.png", //G
    "../Mosquito copy/mosquitoH.png", //H
    "../Mosquito copy/mosquitoI.png", //I
    "../Mosquito copy/mosquitoJ.png", //J
    "../Mosquito copy/mosquitoK.png", //K
    "../Mosquito copy/mosquitoL.png", //L
    "../Mosquito copy/mosquitoM.png", //M
    "../Mosquito copy/mosquitoN.png", //N
    "../Mosquito copy/mosquitoO.png", //O
    "../Mosquito copy/mosquitoP.png", //P
    "../Mosquito copy/mosquitoQ.png", //Q
    "../Mosquito copy/mosquitoR.png", //R
    "../Mosquito copy/mosquitoS.png", //S
    "../Mosquito copy/mosquitoT.png", //T
    "../Mosquito copy/mosuqitoU.png", //U
    "../Mosquito copy/mosquitoV.png", //V
    "../Mosquito copy/mosquitoW.png", //W
    "../Mosquito copy/mosquitoX.png", //X
    "../Mosquito copy/mosquitoY.png", //Y
    "../Mosquito copy/mosquitoZ.png"  //Z
];

function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");

    // Assign an image based on character (A-Z)
    const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
    if (index >= 0 && index < images.length) {
        imgElement.src = images[index];
        imgElement.style.display = "block";
    } else {
        // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
        imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";
        imgElement.style.display = "block";
    }
    imgElement.style.display = "block";
    imgElement.style.left = "0";
}

// Attach event listener to button
document.getElementById("submitButton").addEventListener("click", displayImage);
