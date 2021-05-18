var images = ["1.png", "2.png", "3.png", "4.png", "5.jpg", "6.png"];
var prefix = "url(\'./backgrounds/";
var suffix = "\')";

function randomBg() {
  const random = Math.floor(Math.random() * images.length);
  console.log(prefix.concat(images[random]), suffix);
  document.body.style.backgroundImage = prefix.concat(images[random], suffix);
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "repeat-y";
  document.body.style.backgroundSize = "cover";
}
