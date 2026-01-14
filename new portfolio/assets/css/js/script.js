function updateClock(){
  const now = new Date();
  document.querySelector(".clock").innerText =
    now.toLocaleTimeString();
}
setInterval(updateClock,1000);
updateClock();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if(form){
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerText = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.innerText = "❌ Oops! Something went wrong.";
      }
    } catch (error) {
      status.innerText = "❌ Network error. Try again.";
    }
  });
}
