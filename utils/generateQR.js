const QRCode = require("qrcode");

function generateQR(data, filePath) {
    return QRCode.toFile(filePath, data);
}

module.exports = generateQR;
