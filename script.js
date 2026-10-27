//your JS code here. If required.
const form = document.querySelector("form");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

// Apply saved cookies on page load
const cookies = document.cookie.split("; ");

cookies.forEach(cookie => {
  const [name, value] = cookie.split("=");

  if (name === "fontsize") {
    fontsize.value = value;
    document.documentElement.style.setProperty(
      "--fontsize",
      value + "px"
    );
  }

  if (name === "fontcolor") {
    fontcolor.value = value;
    document.documentElement.style.setProperty(
      "--fontcolor",
      value
    );
  }
});

// Save preferences
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const size = fontsize.value;
  const color = fontcolor.value;

  document.cookie = "fontsize=" + size + "; path=/";
  document.cookie = "fontcolor=" + color + "; path=/";

  // Apply immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    size + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    color
  );
});