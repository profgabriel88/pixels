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
  resultado.style.display = "none";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  
  let imgHeight = useCamera ? video.videoHeight : img.height;
  let imgWidth = useCamera ? video.videoWidth : img.width;
  
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < imgHeight; i += bloco) {
    let media = 0;
    for (let j = 0; j < imgWidth; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);

      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      if (color >= 0 && color < 63) ctx2.fillStyle = darkColor;
      if (color >= 63 && color < 128) ctx2.fillStyle = mediumColor;
      if (color >= 128 && color < 192) ctx2.fillStyle = lightColor1;
      if (color >= 192 && color < 255) ctx2.fillStyle = lightColor2;
      ctx2.fillRect(j, i, bloco + 1, bloco + 1);
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
  resultado.style.display = "none";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  
  let imgHeight = useCamera ? video.videoHeight : img.height;
  let imgWidth = useCamera ? video.videoWidth : img.width;
  
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < imgHeight; i += bloco) {
    let media = 0;
    for (let j = 0; j < imgWidth; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }
      var indice = data.data.length;
      var rgbR = data.data[indice / 2];
      var rgbG = data.data[(indice / 2) + 1];
      var rgbB = data.data[(indice / 2) + 2];
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      ctx2.fillStyle = `rgb(${rgbR}, ${rgbG}, ${rgbB})`;
      //ctx2.fillRect(j, i, bloco+1, bloco+1);
      ctx2.beginPath();
      ctx2.ellipse(j, i, bloco / 2, bloco / 2, 0, 0, 2 * Math.PI);
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
  resultado.style.display = "none";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  
  let imgHeight = useCamera ? video.videoHeight : img.height;
  let imgWidth = useCamera ? video.videoWidth : img.width;
  
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < imgHeight; i += bloco) {
    let media = 0;
    for (let j = 0; j < imgWidth; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      let size = bloco;

      if (color >= 0 && color < 25) size = Math.round(size / 2);
      if (color >= 25 && color < 50) size = Math.round(size / 3);
      if (color >= 50 && color < 75) size = Math.round(size / 4);
      if (color >= 75 && color < 100) size = Math.round(size / 5);
      if (color >= 100 && color < 125) size = Math.round(size / 6);
      if (color >= 125 && color < 150) size = Math.round(size / 7);
      if (color >= 150 && color < 175) size = Math.round(size / 8);
      if (color >= 175 && color < 200) size = Math.round(size / 9);
      if (color >= 200 && color < 225) size = Math.round(size / 10);
      if (color >= 225 && color < 255) size = Math.round(size / 11);

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
  resultado.style.display = "none";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  
  let imgHeight = useCamera ? video.videoHeight : img.height;
  let imgWidth = useCamera ? video.videoWidth : img.width;

  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, 600, 600);
  for (let i = 0; i < imgHeight; i += bloco) {
    let media = 0;
    for (let j = 0; j < imgWidth; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }
      var indice = data.data.length;
      var rgbR = data.data[indice / 2];
      var rgbG = data.data[(indice / 2) + 1];
      var rgbB = data.data[(indice / 2) + 2];
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }

      ctx2.fillStyle = `rgb(${rgbR}, ${rgbG}, ${rgbB})`;
      ctx2.fillRect(j, i, bloco + 1, bloco + 1);
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
  resultado.style.display = "none";
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  
  let imgHeight = useCamera ? video.videoHeight : img.height;
  let imgWidth = useCamera ? video.videoWidth : img.width;
  
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, img.width, img.height);
  ctx2.font = `${bloco}px`;
  for (let i = 0; i < imgHeight; i += bloco) {
    let media = 0;
    for (let j = 0; j < imgWidth; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);

      var indice = 0 + ((density.length - 0) / (255 - 0)) * (color - 255);

      ctx2.fillStyle = `#000`;
      ctx2.font = bloco + `px monospace`;
      
      ctx2.fillText(density[Math.floor(indice * -1)], j, i);
      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
}

function asciiHtml(d) {
  let bloco = img.width / d;
  let count = 0;
  canvas.style.display = "block";
  resultado.style.display = "block";
  
  let blocos = document.getElementsByClassName('blocos');
  if (blocos.length > 0) {
    blocosArray = Array.from(blocos);
    blocosArray.forEach(b => {
      resultado.removeChild(b);
    })
  }
  
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  
  let imgHeight = useCamera ? video.videoHeight : img.height;
  let imgWidth = useCamera ? video.videoWidth : img.width;
  
  ctx.drawImage(img, 0, 0);
  ctx2.clearRect(0, 0, img.width, img.height);
  for (let i = 0; i < imgHeight; i += bloco) {
    let media = 0;
    for (let j = 0; j < imgWidth; j += bloco) {
      const data = ctx.getImageData(j, i, bloco, bloco);
      var color = mediaCores(data);

      var indice = 0 + ((density.length - 0) / (255 - 0)) * (color - 255);
      
      if (count == d) {
        top += bloco;
        left = canvas.getBoundingClientRect().left;
        count = 0;
      }
    
      let div = document.createElement("div");
      div.classList.add("blocos");
      div.style.left = `${left}px`;
      div.style.top = `${top}px`;
      div.style.font = bloco + `px monospace`;
      div.innerText = density[Math.floor(indice * -1)];
      resultado.appendChild(div);
      // ctx2.fillText(density[Math.floor(indice * -1)], j, i);
      media = 0;
      left += bloco;
      count++;
    }
  }
  canvas.style.display = "none";
  
}

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

const startbutton = document.getElementById("startbutton");
let video = document.getElementById("video");
let useCamera = false;
let getFrames;

startbutton.addEventListener(
  "click",
  (ev) => {
    toggleUseCamera();
    ev.preventDefault();
  },
  false,
);

function startup() {
  let streaming = false;
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });
  video.addEventListener(
    "canplay",
    (ev) => {
      if (!streaming) {
        streaming = true;
      }
    },
    false,
  );
}

function takepicture() {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, img.width, img.height);
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  const data = canvas.toDataURL("image/png");
  img.setAttribute("src", data);
}

function toggleUseCamera() {
  useCamera = !useCamera;
  
  if (useCamera) {
    startup();
    getFrames = setInterval(() => {
      takepicture();
    },50)
  }
  else {
    clearInterval(getFrames);
  }
  
}

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
  if (radioButtons[3].checked) asciiHtml(qtdBlocos);
  return;
};

radioButtons[4].onclick = function () {
  if (radioButtons[4].checked) pontos(qtdBlocos);
  return;
};

radioButtons[5].onclick = function () {
  if (radioButtons[5].checked) pontosGradiente(qtdBlocos);
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
  if (radioButtons[3].checked) asciiHtml(qtdBlocos);
  if (radioButtons[4].checked) pontos(qtdBlocos);
  if (radioButtons[5].checked) pontosGradiente(qtdBlocos);
};

img.onload = function () {
  let tamanho = this.width * this.height;
  canvas.width = this.width;
  canvas.height = this.height;
  canvas2.style.width = this.width + 'px';
  canvas2.style.height = this.height + 'px';
  ctx.drawImage(this, 0, 0);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  var radios = document.getElementsByName("estilo");
  radios.forEach((e) => {
    if (e.id == "gameBoy" && e.checked) gameboy(qtdBlocos);
    else if (e.id == "colors" && e.checked) blocos(qtdBlocos);
    else if (e.id == "ascii" && e.checked) ascii(qtdBlocos);
    else if (e.id == "asciiHtml" && e.checked) asciiHtml(qtdBlocos);
    else if (e.id == "pontos" && e.checked) pontos(qtdBlocos);
    else if (e.id == "pontosGradiente" && e.checked) pontosGradiente(qtdBlocos);
  });
};