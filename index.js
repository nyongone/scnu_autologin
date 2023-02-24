function isLoginFailed() {
	var url_1 = "https://login.scnu.ac.kr/authentication/idpw/loginProcess";
	var url_2 = "https://login.scnu.ac.kr/logout.html";
	var referrer = document.referrer;
	return url_1 == referrer || url_2 == referrer;
}

window.onload = () => {
	let input_id = document.querySelector("input#id");
	let input_pw = document.querySelector("input#pw");
	let btn_submit = document.getElementById("btn-login");

	chrome.storage.local.get(["uid"], (res) => {
		input_id.value = res.uid;
	});

	chrome.storage.local.get(["pw"], (res) => {
		input_pw.value = res.pw;
	});

	if (!isLoginFailed())
		setTimeout(() => {
			btn_submit.click();
		}, 10);
};
