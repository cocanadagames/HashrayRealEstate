const selectorBasic = document.querySelector(".selectorBasic");
const priceBasic = document.querySelector(".priceBasic");
const FPBasic = document.querySelector(".FPBasic");
const VTBasic = document.querySelector(".VTBasic");


const selectorStandard = document.querySelector(".selectorStandard");
const priceStandard = document.querySelector(".priceStandard");
const FPStandard = document.querySelector(".FPStandard");
const VTStandard = document.querySelector(".VTStandard");

const selectorProfessional = document.querySelector(".selectorProfessional");
const priceProfessional = document.querySelector(".priceProfessional");
const FPProfessional = document.querySelector(".FPProfessional");
const VTProfessional = document.querySelector(".VTProfessional");

const selectorStateOfTheArt = document.querySelector(".selectorStateOfTheArt");
const priceStateOfTheArt = document.querySelector(".priceStateOfTheArt");



selectorBasic.onchange = (ev) => {
    console.log("Selected value is: " + selectorBasic.value);
    priceBasic.innerHTML = selectorBasic.value;

    if (selectorBasic.value == 149) {
        FPBasic.innerHTML = "Floor Plan ($99)";
        VTBasic.innerHTML = "360 Virtual Tour ($149)";
    }
    else if (selectorBasic.value == 199) {
        FPBasic.innerHTML = "Floor Plan ($129)";
        VTBasic.innerHTML = "360 Virtual Tour ($199)";
    }
    else if (selectorBasic.value == 249) {
        FPBasic.innerHTML = "Floor Plan ($149)";
        VTBasic.innerHTML = "360 Virtual Tour ($249)";
    }

}

selectorStandard.onchange = (ev) => {
    console.log("Selected value is: " + selectorStandard.value);
    priceStandard.innerHTML = selectorStandard.value;

    if (selectorStandard.value == 349) {
        FPStandard.innerHTML = "Floor Plan ($99)";
        VTStandard.innerHTML = "360 Virtual Tour ($149)";
    }
    else if (selectorStandard.value == 449) {
        FPStandard.innerHTML = "Floor Plan ($129)";
        VTStandard.innerHTML = "360 Virtual Tour ($199)";
    }
    else if (selectorStandard.value == 549) {
        FPStandard.innerHTML = "Floor Plan ($149)";
        VTStandard.innerHTML = "360 Virtual Tour ($249)";
    }
}

selectorProfessional.onchange = (ev) => {
    console.log("Selected value is: " + selectorProfessional.value);
    priceProfessional.innerHTML = selectorProfessional.value;

    if (selectorProfessional.value == 549) {
        FPProfessional.innerHTML = "Floor Plan ($99)";
        VTProfessional.innerHTML = "360 Virtual Tour ($149)";
    }
    else if (selectorProfessional.value == 599) {
        FPProfessional.innerHTML = "Floor Plan ($129)";
        VTProfessional.innerHTML = "360 Virtual Tour ($199)";
    }
    else if (selectorProfessional.value == 699) {
        FPProfessional.innerHTML = "Floor Plan ($149)";
        VTProfessional.innerHTML = "360 Virtual Tour ($249)";
    }
}

selectorStateOfTheArt.onchange = (ev) => {
    console.log("Selected value is: " + selectorStateOfTheArt.value);
    priceStateOfTheArt.innerHTML = selectorStateOfTheArt.value;
}



