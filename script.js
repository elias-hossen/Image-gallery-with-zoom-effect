const gallery = document.querySelector(".gallery-area");

const images = document.querySelectorAll("img");
const newZoomImage = document.querySelector(".img-zoom");

images.forEach((img) =>
  img.addEventListener("click", function (e) {
    let oldImage = img;
    images.forEach((e) => (e.parentElement.className = "hidden"));
    e.target.parentElement.className = "ok";
    newZoomImage.classList.remove("hidden");
    const imageZoom = function (imgID, resultID) {
      imgs = document.getElementById(imgID);
      result = document.getElementById(resultID);
      const zoom = document.createElement("div");
      zoom.setAttribute("class", "zoomed-image2");
      img.parentElement.insertBefore(zoom, img);
      let ix = resultID.offsetWidth / zoom.offsetWidth;
      let iy = resultID.offsetHeight / zoom.offsetHeight;
      resultID.style.backgroundImage = "url(" + img.src + ")";
      resultID.style.backgroundSize =
        img.width * ix + "px " + img.height * iy + "px";

      const getCursorPos = function (ex) {
        let x = 0,
          y = 0;
        const e = ex || window.event;
        const a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
      };

      imgID.addEventListener("mousemove", hovers);

      function hovers(e) {
        const pos = getCursorPos(e);
        const x = pos.x - zoom.offsetWidth / 1;
        const y = pos.y - zoom.offsetHeight / 1;
        zoom.style.left = x + "px";
        zoom.style.top = y + "px";

        resultID.style.backgroundPosition = "-" + x * 4 + "px -" + y * 4 + "px";
        console.log(x);
      }
    };
    imageZoom(img, newZoomImage);
  })
);
