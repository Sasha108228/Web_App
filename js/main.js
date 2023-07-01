let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#fff';
tg.MainButton.color = '#ff00ff';

let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
	tg.MainButton.setText("Message send!");
	tg.MainButton.show();
	tg.sendData("sendTestMessage");
});
