export default async function telegramBotSend(message, chatId) {
    const URL = 'https://api.telegram.org/';
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;

    const { status } = await fetch(
        `${URL}${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${message}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    );
    return status;
}
