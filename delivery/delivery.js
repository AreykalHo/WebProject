// Location suggestion for delivery

const baseEndpoint = "http://api.openweathermap.org/";
const apiKey = "f9a5203cbf432d2c17301894dbf366bf";
var isRaining = false;
const weatherAlert = document.querySelector("#weather-alert");

function endpointCurrent(lat, lon) {
  return `${baseEndpoint}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
}

function bindCurrentWeatherData(response) {
  let condition = response["weather"][0]["main"];
  let temp = response["main"]["temp"];

  console.log(condition);
  console.log(temp);

  if (condition == "Rain") {
    isRaining = true;
    // console.log(isRaining + " from above");
  }

  if (isRaining) {
    // console.log(isRaining + " from below");
    weatherAlert.textContent = "It is raining, please wait for a while";
    $("#weather-alert").show();
  } else {
    weatherAlert.textContent =
      "The weather so goods today. We will deliver your order asap";
    $("#weather-alert").show();
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(`Latitude: ${lat}, Longitude: ${lon}`);

  getWeatherData(lat, lon);
}

function getWeatherData(lat, lon) {
  let result = endpointCurrent(lat, lon);
  console.log(result);

  $.ajax({
    url: result,
    success: function (response) {
      bindCurrentWeatherData(response);
    },
    error: function (xhr, status, error) {
      console.log(`An error occurred: ${error}`);
    },
  });
}

// page animation
const takeItButton = document.querySelector("#take-it-button");
const takeForMeButton = document.querySelector("#take-for-me-button");
const deliveryMessage = document.querySelector("#delivery-message");

takeItButton.addEventListener("click", () => {
  takeItButton.classList.remove(
    "border-2",
    // "border-gray-300",
    "text-black",
    "bg-white",
    "border-slate-500"
  );
  takeItButton.classList.add("custom-button-color", "text-white");

  takeForMeButton.classList.remove("custom-button-color", "text-white");
  takeForMeButton.classList.add(
    "border-2",
    "border-slate-500",
    "text-black",
    "bg-white"
  );
  deliveryMessage.textContent =
    "Your Yummy Dessert Will Be Ready in 30 minutes";

  $("#weather-alert").hide();
});

takeForMeButton.addEventListener("click", () => {
  takeForMeButton.classList.remove(
    "border-2",
    "border-slate-500",
    "text-black",
    "bg-white"
  );
  takeForMeButton.classList.add("custom-button-color", "text-white");
  takeItButton.classList.remove("custom-button-color", "text-white");
  takeItButton.classList.add(
    "border-2",
    "border-slate-500",
    "text-black",
    "bg-white"
  );
  deliveryMessage.textContent =
    "Your Yummy Dessert Will Arrive at Your Door in 30 minutes";

  // check geolocation and wether condition, if it is raining, then show the message
  getLocation();
});

let btnPay = document.querySelector("#btn-pay");
btnPay.onclick = () => {
  window.location.href = "../checkout/checkout.html";
};

// getLocation();
