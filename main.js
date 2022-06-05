const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    qrImage = wrapper.querySelector(".qr-code img"),
    generateBtn = wrapper.querySelector(".form button");
    let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating...";
    //API and passing the API returned image source to qrImage
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});