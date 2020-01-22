var message = document.getElementById("message");
btn = document.getElementById("klik");
output = document.getElementById("output");

btn.addEventListener("click", function() {
    socket.emit("terima", {
       message: message.value
    });
 });