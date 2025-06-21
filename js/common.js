var stick_show_height = 100;
var navbar_height_minus = 82;
window.onscroll = function () {
  myFunction();
};
var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector(".navbar").offsetHeight;

function myFunction() {
  if (window.pageYOffset >= sticky + navbar_height + stick_show_height) {
    // console.log('IF window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.add("sticky");
    document.body.style.paddingTop = navbar_height - navbar_height_minus + "px";
  } else {
    //console.log('ELSE window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.remove("sticky");
    document.body.style.paddingTop = "0";
  }
}

// Display current date
const dateElem = document.getElementById("nav-date");
const now = new Date();
dateElem.textContent = now.toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Fetch weather (Open-Meteo, no API key needed)
const weatherElem = document.getElementById("nav-weather");
// Rajnagar, Odisha, India approx coords
const lat = 20.57,
  lon = 86.71;
fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
)
  .then((res) => res.json())
  .then((data) => {
    if (data.current_weather) {
      const temp = Math.round(data.current_weather.temperature);
      const code = data.current_weather.weathercode;
      // Simple weather code to emoji
      const icons = {
        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌦️",
        53: "🌦️",
        55: "🌦️",
        61: "🌧️",
        63: "🌧️",
        65: "🌧️",
        80: "🌦️",
        81: "🌦️",
        82: "🌧️",
        95: "⛈️",
        96: "⛈️",
        99: "⛈️",
      };
      const icon = icons[code] || "";
      weatherElem.textContent = ` ${icon} ${temp}°C`;
    }
  })
  .catch(() => {
    weatherElem.textContent = "";
  });

$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );
});
