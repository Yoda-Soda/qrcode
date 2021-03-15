import QRCode from "qrcode";
var canvas = document.getElementById("canvas");

// Generate QRcode to canvas
QRCode.toCanvas(canvas, "Hello! world", function (error) {
  if (error) console.error(error);
  console.log("success!");
});
