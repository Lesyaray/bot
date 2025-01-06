const TelegramBot = require('node-telegram-bot-api');

// Замените на ваш токен
const TOKEN = '7331912840:AAGWBCnjmn0XPlQJ0-OH--rbnglCKdRGdL8';

// Создаем экземпляр бота
const bot = new TelegramBot(TOKEN, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const text = `Привет, я бот-Полина, Вы наверняка замечали ярких людей в желтой одежде на улицах своего города они несут радость людям: ароматную пиццу, вкусные роллы и сочные бургеры!🍔 
Присоединяйтесь к партнеру сервиса Яндекс.Еда и несите счастье людям! 😊
Начните доставлять заказы и зарабатывать прямо сейчас!💸`;

    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Подробности о вакансии🧐', callback_data: 'button1' }]
            ]
        }
    };

    bot.sendMessage(chatId, text, options);
});

// Обработка нажатий на кнопки
bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;

    if (callbackQuery.data === 'button1') {
        const text = `Партнер сервиса Яндекс.Еда предлагает тебе стать курьером!
Для этого желательно иметь гаджет на базе Android или iOS и желание получать до 3400 рублей в день!💸
Есть возможность доставлять заказы клиентов пешком, на автомобиле, на велосипеде и самокате.
Что предлагаем?🧐
✅ Возможность выбора локаций доставок
✅ Самостоятельный выбор времени доставок
✅ Первая выплата поступает через две недели, далее для самозанятых, выплаты ежедневные 

Присоединяйся к партнеру сервиса Яндекс Еда, ждем тебя!

`;

        const options = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔥Хочу работать!🔥', callback_data: 'button2' }]
                ]
            }
        };

        bot.editMessageText(text, { chat_id: chatId, message_id: callbackQuery.message.message_id, reply_markup: options.reply_markup });
    } else if (callbackQuery.data === 'button2') {
        const text = `Отлично, теперь Вы можете перейти по ссылке для регистрации и начать зарабатывать:
https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=1fb4bc287cf2486085c6ff3964eb7b21&utm_content=blank.
Возник вопрос в процессе регистрации? Задай его нашему менеджеру - @Eda_yandex_partners`;

        bot.editMessageText(text, { chat_id: chatId, message_id: callbackQuery.message.message_id });
    }
});

