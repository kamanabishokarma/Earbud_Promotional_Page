(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [ 
    { title: "Noise Cancellation", text: "This feature helps to make the sound better", image: "images/airpod-2.jpg" },
    { title: "Earbuds", text: "Designed to control calls, play music, and adjust volume", image: "images/airpod-3.jpg" },
    { title: "Power Indicator", text: "LED lights show available charge", image: "images/airpod-4.jpg" }
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`.Hotspot[slot="hotspot-${index + 1}"]`);

      const title = document.createElement("h2");
      title.textContent = infoBox.title;

      const text = document.createElement("p");
      text.textContent = infoBox.text;

      const image = document.createElement("img");
      image.src = infoBox.image;
      image.style.width = "80%";

      selected.appendChild(image);
      selected.appendChild(title);
      selected.appendChild(text);
    });
  }

  function showInfo(event) {
    const selected = event.currentTarget.querySelector(".HotspotAnnotation");
    gsap.to(selected, { autoAlpha: 1, duration: 1 });
  }

  function hideInfo(event) {
    const selected = event.currentTarget.querySelector(".HotspotAnnotation");
    gsap.to(selected, { autoAlpha: 0, duration: 1 });
  }

  model.addEventListener("load", loadInfo);

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
