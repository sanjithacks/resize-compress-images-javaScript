document.addEventListener("paste", function (event) {
  const items = event.clipboardData.items;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf("image") !== -1) {
      const file = items[i].getAsFile();
      const i_z = Math.floor(Math.log(file.size) / Math.log(1024)),
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      let as = (file.size / Math.pow(1024, i_z)).toFixed(2) + " " + sizes[i_z];
      //console.log(`Actual file size: ${as}`);
      if (!file) return;
      previewImg.src = URL.createObjectURL(file);
      previewImg.style.border = "1px solid #000000";
      previewImg.addEventListener("load", () => {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".wrapper").classList.add("active");
      });
    }
  }
});

const uploadBox = document.querySelector(".upload-box"),
  fileInput = uploadBox.querySelector("input"),
  previewImg = uploadBox.querySelector("img"),
  widthInput = document.querySelector(".width input"),
  heightInput = document.querySelector(".height input"),
  customQuality = document.querySelector(".quality input"),
  ratioInput = document.querySelector(".ratio input"),
  qualityInput = document.querySelector(".quality input"),
  downloadBtn = document.querySelector(".download-btn");

let ogImageRatio;

const loadFile = (e) => {
  const file = e.target.files[0];
  //console.log((file.size * 9.537 * 1) / 10 ** 7);
  const i = Math.floor(Math.log(file.size) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let as = (file.size / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
  //console.log(`Actual file size: ${as}`);
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  previewImg.style.border = "1px solid #000000";
  previewImg.addEventListener("load", () => {
    widthInput.value = previewImg.naturalWidth;
    heightInput.value = previewImg.naturalHeight;
    ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
    document.querySelector(".wrapper").classList.add("active");
  });
};

widthInput.addEventListener("keyup", () => {
  const height = ratioInput.checked
    ? widthInput.value / ogImageRatio
    : heightInput.value;
  heightInput.value = Math.floor(height);
});

heightInput.addEventListener("keyup", () => {
  const width = ratioInput.checked
    ? heightInput.value * ogImageRatio
    : widthInput.value;
  widthInput.value = Math.floor(width);
});

const resizeAndDownload = () => {
  downloadBtn.classList.add("disabled");
  downloadBtn.innerText = "Downloading Image...";

  const canvas = document.createElement("canvas");
  const a = document.createElement("a");
  const ctx = canvas.getContext("2d");
  const imgQuality = qualityInput.checked ? 0.6 : 1.0;

  canvas.width = widthInput.value;
  canvas.height = heightInput.value;

  setTimeout(() => {
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    a.download = new Date().getTime();
    a.click();

    downloadBtn.classList.remove("disabled");
    downloadBtn.innerText = "Download Image";
  }, 500);
};

downloadBtn.addEventListener("click", resizeAndDownload);
fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
