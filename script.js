/*
 **--------- Project21: Geolocation ---------**

 Goal: We're learning about Geolocation's heading which is like a compass which tells us who is at which distance and who is running at what speed

 */

//Chrome❌: We can fake coordiante but we cannot fake speed and heading of geolocation
//iOS simulator✔ using Xcode: We can use geolocation's speed and heading.

const arrow = document.querySelector(".arrow");
const speed = document.querySelector("speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
    alert("Hey, you gotta allow that to happen");
  }
);
