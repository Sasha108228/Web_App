from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo


bot = Bot("6168841421:AAF1Te0tegtkqBc9hV_yxuHymJMG8YHmoHQ")
dp = Dispatcher(bot)


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
	markup = types.ReplyKeyboardMarkup()
	markup.add(types.KeyboardButton('open web-app', web_app=WebAppInfo(url='https://github.com/Sasha108228/Web_App/blob/96453455fe13c2f2039a64d41f42e660aa31e560/html/index.html')))
	await message.answer('Hi', reply_markup=markup)



executor.start_polling(dp)
