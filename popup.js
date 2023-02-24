document.addEventListener("DOMContentLoaded", () => {
	let uid = document.getElementById("uid");
	let pw = document.getElementById("password");
	chrome.storage.local.get(["uid"], (res) => {
		if (res.uid) uid.value = res.uid;
	});
	chrome.storage.local.get(["pw"], (res) => {
		if (res.pw) pw.value = res.pw;
	});

	let pw_vis = document.getElementById("pw-vis");
	let pw_invis = document.getElementById("pw-invis");

	let savebtn = document.getElementById("save");

	let helpbtn = document.getElementById("help");
	let helpbox = document.getElementById("helpbox");
	let helpclosebtn = document.getElementById("close");

	pw_vis.addEventListener("click", () => {
		pw.type = "password";
		pw_vis.classList.add("hide");
		pw_invis.classList.remove("hide");
	});

	pw_invis.addEventListener("click", () => {
		pw.type = "text";
		pw_invis.classList.add("hide");
		pw_vis.classList.remove("hide");
	});

	savebtn.addEventListener("click", () => {
		uid_value = document.getElementById("uid").value;
		pw_value = document.getElementById("password").value;
		var alert = document.getElementById("alert");
		if (uid_value === "" || pw_value === "") {
			alert.style = "";
			alert.innerHTML = "입력을 확인해 주세요.";
			alert.style =
				"top: 10px; background-color: rgb(220, 72, 62); color: #fff";
			setTimeout(() => {
				alert.style = "top: -50px";
				alert.style = "background-color: rgb(220, 72, 62); color: #fff;";
			}, 1500);
		} else {
			chrome.storage.local.set({ uid: uid_value }, () => {});
			chrome.storage.local.set({ pw: pw_value }, () => {});
			alert.innerHTML = "성공적으로 저장되었습니다.";
			alert.style = "top: 10px;";
			setTimeout(() => {
				alert.style = "top: -50px";
			}, 1500);
		}
	});

	helpbtn.addEventListener("click", () => {
		helpbox.classList.remove("hide");
		helpbtn.classList.add("hide");
		helpclosebtn.classList.remove("hide");
	});

	helpclosebtn.addEventListener("click", () => {
		helpbox.classList.add("hide");
		helpbtn.classList.remove("hide");
		helpclosebtn.classList.add("hide");
	});
});
