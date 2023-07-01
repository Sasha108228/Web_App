let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#fff';
tg.MainButton.color = '#ff00ff';

// let btn = document.getElementById("btn");

const onClose = () => {
	tg.close()
	tg.sendData('SendText')
}
