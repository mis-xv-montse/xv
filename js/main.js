AOS.init();

const partyDate = new Date("2026-06-06T14:00:00");

window.addEventListener("load", function() {
    updateDateTimer();
    setInterval(updateDateTimer, 2000); // 2 seconds
});

function updateDateTimer() {
    let diferencia = partyDate - new Date();
	
	if (diferencia <= 0) {
		document.querySelector("#party-date-days span").innerHTML = 0;
		document.querySelector("#party-date-hours span").innerHTML = 0;
		document.querySelector("#party-date-minutes span").innerHTML = 0;
		document.querySelector("#party-date-seconds span").innerHTML = 0;
		return;
	}
	
    document.querySelector("#party-date-days span").innerHTML = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    document.querySelector("#party-date-hours span").innerHTML = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector("#party-date-minutes span").innerHTML = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector("#party-date-seconds span").innerHTML = Math.floor((diferencia % (1000 * 60)) / 1000);
}