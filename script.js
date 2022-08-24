// const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
// const tamanho = density.length - 1;
// const img = new Image();
// img.crossOrigin = "anonymous";
// img.src = "./dog.jpg";

// var resultado = document.getElementById("resultado");

// var charcount = 0;

// var caracteres = [];

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// img.onload = function () {
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     0,
//     0,
//     canvas.width,
//     canvas.height
//   );
//   img.style.display = "none";
//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const data = imageData.data;
//   for (let i = 0; i < data.length; i += 4) {
//     const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//     data[i] = avg; // red
//     data[i + 1] = avg; // green
//     data[i + 2] = avg; // blue
//     let caracter = Math.floor((1 / (255 / avg)) * tamanho);

//     caracteres.push(density[caracter].toString());
//   }

//   // ctx.putImageData(imageData, 0, 0);
//   criaAscii();
// };

// function criaAscii() {
//   caracteres.forEach((c) => {
//     let p = document.createElement("p");
//     p.style.display = "inline";
//     p.innerText = c != " " ? c : "#";
//     resultado.appendChild(p);
//     charcount++;

//     if (charcount == 1000) {
//       let br = document.createElement("br");
//       resultado.appendChild(br);
//       charcount = 0;
//     }
//   });
// }

// const original = function () {
//   ctx.drawImage(img, 0, 0);
// };

// const grayscale = function () {
//   ctx.drawImage(img, 0, 0);
//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const data = imageData.data;
//   for (let i = 0; i < data.length; i += 4) {
//     const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//     data[i] = avg; // red
//     data[i + 1] = avg; // green
//     data[i + 2] = avg; // blue
//   }
//   ctx.putImageData(imageData, 0, 0);
// };

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();

const rInput = document.getElementById('range');

rInput.addEventListener('input', (e) => {
  rInput.max = img.width;
  medias(rInput.value);
  // console.log(rInput.value)
})

img.onload = function() {
  let tamanho = this.width * this.height;
  canvas.width = this.width;
  canvas.height = this.height;
  // ctx.drawImage(this, 0, 0)
  // div.appendChild(this);
  medias(10);
}
img.src = 'dog.jpg';

const grayscale = function (d) {
    let bloco = Math.floor(img.width/d);
    let media = 0;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += bloco) {
      for (let j = i; j < i + bloco; j += 4) {
        const avg = (data[j] + data[j + 1] + data[j + 2]) / 3;
        media += avg;
      }
      for (let k = i; k < i + bloco; k++) {
        data[k] = media/d; // red
        data[k + 1] = media/d; // green
        data[k + 2] = media/d; // blue
      }
      media = 0;
    }
    ctx.putImageData(imageData, 0, 0);
  };

  const medias = function (d) {
    let bloco = Math.floor(img.width/d);
    console.log(bloco);
    let media = 0;
    let avgR = 0;
    let avgG = 0;
    let avgB = 0;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += bloco) {
      for (let j = i; j < i + bloco; j += 4) {
        avgR += data[j];
        avgG += data[j + 1];
        avgB += data[j + 2];
      }
      for (let k = i; k < i + bloco; k++) {
        data[k] = avgR/d; // red
        data[k + 1] = avgG/d; // green
        data[k + 2] = avgB/d; // blue
      }
      media = 0;
      avgR = 0;
      avgG = 0;
      avgB = 0;
    }
    ctx.putImageData(imageData, 0, 0);
  };