let tg = window.Telegram.WebApp;

tg.expand();

// tg.MainButton.textColor = '#fff';
// tg.MainButton.color = '#ff00ff';


const onClose = () => {
	tg.close();
}

var test = tg.initDataUnsafe?.user?.username;
document.getElementById('username').value = test;
