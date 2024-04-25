const grayscale = function (d) {
  let bloco = Math.floor(img.width / d);
  let media = 0;
  console.log(d);
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += bloco) {
    for (let j = i; j < i + bloco; j += 4) {
      const avg = (data[j] + data[j + 1] + data[j + 2]) / 3;
      media += avg;
    }
    for (let k = i; k < i + bloco; k++) {
      data[k] = media / d; // red
      data[k + 1] = media / d; // green
      data[k + 2] = media / d; // blue
    }
    media = 0;
  }
  ctx.putImageData(imageData, 0, 0);
};

function mediaCores(imageData) {
  let rTotal = 0;
  let gTotal = 0;
  let bTotal = 0;

  for (let i = 0; i < imageData.data.length; i += 4) {
    rTotal += imageData.data[i];
    gTotal += imageData.data[i + 1];
    bTotal += imageData.data[i + 2];
  }

  const pixelCount = imageData.data.length / 4;
  const avgR = Math.round(rTotal / pixelCount);
  const avgG = Math.round(gTotal / pixelCount);
  const avgB = Math.round(bTotal / pixelCount);

  return (avgR + avgG + avgB) / 3;
}

const gameboy = function (d) {
  let bloco = img.width / d;
  let count = 0;
  canvas.style.display = "block";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  console.log(d);
  console.log(bloco);
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < img.width; i += bloco) {
    let media = 0;
    for (let j = 0; j < img.width; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);

      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      // let div = document.createElement("div");
      // div.classList.add("blocos");
      // div.style.left = `${left}px`;
      // div.style.top = `${top}px`;
      // if (color >= 0 && color < 63)
      //   div.style.backgroundColor = darkColor;
      // if (color >= 63 && color < 128)
      //   div.style.backgroundColor = mediumColor;
      // if (color >= 128 && color < 192)
      //   div.style.backgroundColor = lightColor1;
      // if (color >= 192 && color < 255)
      //   div.style.backgroundColor = lightColor2;

      // div.style.width = `${bloco}px`;
      // div.style.height = `${bloco}px`;
      // resultado.appendChild(div);
      if (color >= 0 && color < 63) ctx2.fillStyle = darkColor;
      if (color >= 63 && color < 128) ctx2.fillStyle = mediumColor;
      if (color >= 128 && color < 192) ctx2.fillStyle = lightColor1;
      if (color >= 192 && color < 255) ctx2.fillStyle = lightColor2;
      ctx2.fillRect(j, i, bloco+1, bloco+1);
      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
};


const pontos = function (d) {
  let bloco = img.width / d;
  let count = 0;
  canvas.style.display = "block";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  console.log(d);
  console.log(bloco);
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < img.width; i += bloco) {
    let media = 0;
    for (let j = 0; j < img.width; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }
      var indice = data.data.length;
      var rgbR = data.data[indice/2];
      var rgbG = data.data[(indice/2) + 1];
      var rgbB = data.data[(indice/2) + 2];
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      ctx2.fillStyle = `rgb(${rgbR}, ${rgbG}, ${rgbB})`;
      //ctx2.fillRect(j, i, bloco+1, bloco+1);
      ctx2.beginPath();
      ctx2.ellipse(j, i, bloco/2, bloco/2, 0, 0, 2 * Math.PI);
      ctx2.fill();

      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
};

const pontosGradiente = function (d) {
  let bloco = img.width / d;
  let count = 0;
  canvas.style.display = "block";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  console.log(d);
  console.log(bloco);
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < img.width; i += bloco) {
    let media = 0;
    for (let j = 0; j < img.width; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }
      
      let size = bloco;

      if (color >= 0 && color < 25) size =    Math.round(size/2);
      if (color >= 25 && color < 50) size =   Math.round(size/3);
      if (color >= 50 && color < 75) size =   Math.round(size/4);
      if (color >= 75 && color < 100) size =  Math.round(size/5);
      if (color >= 100 && color < 125) size = Math.round(size/6);
      if (color >= 125 && color < 150) size = Math.round(size/7);
      if (color >= 150 && color < 175) size = Math.round(size/8);
      if (color >= 175 && color < 200) size = Math.round(size/9);
      if (color >= 200 && color < 225) size = Math.round(size/10);
      if (color >= 225 && color < 255) size = Math.round(size/11);

      ctx2.fillStyle = `black`;
      //ctx2.fillRect(j, i, bloco+1, bloco+1);
      ctx2.beginPath();
      ctx2.ellipse(j, i, size, size, 0, 0, 2 * Math.PI);
      ctx2.fill();

      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
};


const blocos = function (d) {
  let bloco = img.width / d;
  let count = 0;
  canvas.style.display = "block";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  console.log(d);
  console.log(bloco);
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < img.width; i += bloco) {
    let media = 0;
    for (let j = 0; j < img.width; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }
      var indice = data.data.length;
      var rgbR = data.data[indice/2];
      var rgbG = data.data[(indice/2) + 1];
      var rgbB = data.data[(indice/2) + 2];
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      ctx2.fillStyle = `rgb(${rgbR}, ${rgbG}, ${rgbB})`;
      ctx2.fillRect(j, i, bloco+1, bloco+1);
      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
};

function ascii(d) {
  let bloco = img.width / d;
  let count = 0;
  canvas.style.display = "block";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  console.log(d);
  console.log(bloco);
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  ctx2.font = `${bloco}px`;
  for (let i = 0; i < img.width; i += bloco) {
    let media = 0;
    for (let j = 0; j < img.width; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);
      
      var indice = 0 + ((density.length - 0) / (255 - 0)) * (color - 255);
      
      ctx2.fillStyle = `#000`;
      ctx2.font = bloco + `px monospace`;
      console.log(ctx2.font);
      ctx2.fillText(density[Math.floor(indice*-1)], j, i);
      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
}

const medias = function (d) {
  let bloco = Math.floor(img.width / d);
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
      data[k] = avgR / d; // red
      data[k + 1] = avgG / d; // green
      data[k + 2] = avgB / d; // blue
    }
    media = 0;
    avgR = 0;
    avgG = 0;
    avgB = 0;
  }
  ctx.putImageData(imageData, 0, 0);
};

const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const img = new Image();
const darkColor = "#081820";
const mediumColor = "#346856";
const lightColor1 = "#88c070";
const lightColor2 = "#e0f8d0";
const pixelCount = document.getElementById("pixelCount");
const pixelCountValue = document.getElementById("pixelCountValue");
const imageInput = document.getElementById("arquivo");
const density = "                    _.,-=+:;cba!?0123456789$W#@Ñ";

const radioButtons = document.getElementsByName("estilo");
radioButtons[0].onclick = function () {
  if (radioButtons[0].checked) gameboy(qtdBlocos);
  return;
};

radioButtons[1].onclick = function () {
  if (radioButtons[1].checked) blocos(qtdBlocos);
  return;
};

radioButtons[2].onclick = function () {
  if (radioButtons[2].checked) ascii(qtdBlocos);
  return;
};

radioButtons[3].onclick = function () {
  if (radioButtons[3].checked) pontos(qtdBlocos);
  return;
};

radioButtons[4].onclick = function () {
  if (radioButtons[4].checked) pontosGradiente(qtdBlocos);
  return;
};

img.src = "mona.jpg";
pixelCount.value = 50;
pixelCountValue.textContent = pixelCount.value;
var qtdBlocos = pixelCount.value;

imageInput.onchange = function (event) {
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(imageInput.files[0]);
  }
};

pixelCount.onchange = function (e) {
  pixelCountValue.textContent = pixelCount.value;
  qtdBlocos = pixelCount.value;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  if (radioButtons[0].checked) gameboy(qtdBlocos);
  if (radioButtons[1].checked) blocos(qtdBlocos);
  if (radioButtons[2].checked) ascii(qtdBlocos);
  if (radioButtons[3].checked) pontos(qtdBlocos);
  if (radioButtons[4].checked) pontosGradiente(qtdBlocos);
};

img.onload = function () {
  let tamanho = this.width * this.height;
  canvas.width = this.width;
  canvas.height = this.height;
  ctx.drawImage(this, 0, 0);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  var radios = document.getElementsByName("estilo");
  radios.forEach((e) => {
    if (e.id == "gameBoy" && e.checked) gameboy(qtdBlocos);
    else if (e.id == "colors" && e.checked) blocos(qtdBlocos);
    else if (e.id == "ascii" && e.checked) ascii(qtdBlocos);
    else if (e.id == "pontos" && e.checked) pontos(qtdBlocos);
    else if (e.id == "pontosGradiente" && e.checked) pontosGradiente(qtdBlocos);
  });
};
