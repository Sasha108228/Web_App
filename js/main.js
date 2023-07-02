let tg = window.Telegram.WebApp;

tg.expand();

// tg.MainButton.textColor = '#fff';
// tg.MainButton.color = '#ff00ff';


const onClose = () => {
	tg.close();
}

document.getElementById('username').value = tg.initDataUnsafe?.user?.username
