// LOGIN CHECK
function checkLogin() {
  const user = document.getElementById("userid").value;
  const pass = document.getElementById("password").value;
  if (user === "My Adhiiiii" && pass === "Nikitha") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Try again Sweetee 💖";
  }
}

// LETTER POPUP
function openLetter() {
  document.getElementById("letterPopup").style.display = "block";
}
function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";
}

// RESPONSE BOX
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("nikiiiBtn");
  if (btn) {
    btn.addEventListener("click", function() {
      document.getElementById("responseBox").style.display = "block";
    });
  }

  let saved = localStorage.getItem("nikiiiReply");
  if (saved) {
    document.getElementById("savedResponse").innerText = "Her Reply: " + saved;
    document.getElementById("responseBox").style.display = "none";
  }
});

function saveResponse() {
  let response = document.getElementById("nikiiiResponse").value;
  if (response.trim() !== "") {
    localStorage.setItem("nikiiiReply", response);
    document.getElementById("savedResponse").innerText = "Her Reply: " + response;
    document.getElementById("responseBox").style.display = "none";
  }
}
