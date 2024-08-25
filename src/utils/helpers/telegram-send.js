export default async function telegramBotSend(message) {
    const URL = 'https://api.telegram.org/';
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
    const SENDED_MESSAGE = message;
    const { status } = await fetch(URL + BOT_TOKEN + '/sendMessage?chat_id='+CHAT_ID+'&text='+SENDED_MESSAGE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return status
}
