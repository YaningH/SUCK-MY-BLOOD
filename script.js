// Array of images
const images = [
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoA.png", //A
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoB.png", //B
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoC.png", //C
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoD.png", //D
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoE.png", //E
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoF.png", //F
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoG.png", //G
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoH.png", //H
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoI.png", //I
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoJ.png", //J
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoK.png", //K
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoL.png", //L
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoM.png", //M
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoN.png", //N
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoO.png", //O
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoP.png", //P
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoQ.png", //Q
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoR.png", //R
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoS.png", //S
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoT.png", //T
    "../SUCK-MY-BLOOD/Mosquito copy/mosuqitoU.png", //U
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoV.png", //V
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoW.png", //W
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoX.png", //X
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoY.png", //Y
    "../SUCK-MY-BLOOD/Mosquito copy/mosquitoZ.png"  //Z
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
