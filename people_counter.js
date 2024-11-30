let eintrittZähler = 0;
let btn1 = document.getElementById("eintritt_El");
let btn2 = document.getElementById("zuvor");
let btn3 = document.getElementById("btn3");
let hover1 = document.getElementById("btn1");
let zurücksetzen = 0;

function eingetreten_btn() {
	eintrittZähler += 1;
	btn1.textContent = eintrittZähler;
}

function speichern_btn() {
	let aufzählerStrg = eintrittZähler + " - ";
	btn2.textContent += aufzählerStrg;
	aufzählerStrg = 0;
	eintrittZähler = 0;
}

function zurücksetzen_btn() {
	btn1.textContent = zurücksetzen;
	eintrittZähler = zurücksetzen;
}
