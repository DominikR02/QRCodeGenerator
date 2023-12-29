function generateQr() {
    const inputValue = document.querySelector("input").value.trim();
    const qrcodeContainer = document.querySelector(".qrcode");

    // QRCode-Instanz löschen und neu erstellen
    qrcodeContainer.innerHTML = "";
    let qrcode = new QRCode(qrcodeContainer);

    // Immer den QR-Code generieren, auch wenn das Eingabefeld leer ist
    if (inputValue !== "") {
        qrcode.makeCode(inputValue); // Neuen QR-Code generieren
    }
}

function downloadQrCode() {
    const qrcodeContainer = document.querySelector(".qrcode");
    const canvas = qrcodeContainer.querySelector("canvas");
    const filenameInput = document.getElementById("filenameInput");

    // Überprüfe, ob ein Canvas vorhanden ist
    if (canvas) {
        // Erstelle einen Download-Link
        const link = document.createElement('a');

        // Setze den Dateinamen basierend auf dem Input-Feld oder standardmäßig auf 'qrcode.png'
        const filename = filenameInput.value.trim() !== "" ? filenameInput.value.trim() + '.png' : 'qrcode.png';

        link.href = canvas.toDataURL("image/png");
        link.download = filename;

        // Klicke auf den Link, um den Download zu starten
        link.click();

        document.getElementById('textInput').value = "";
        document.getElementById('filenameInput').value = "";
        generateQr();
    } else {
        alert("Generiere zuerst einen QR-Code, bevor du ihn herunterlädst.");
    }
}


