import telegramBotSend from "@/utils/helpers/telegram-send.js";
import {useI18n} from "vue-i18n";

export function useSendOrder() {
    const { t } = useI18n();
    const onSubmit = async (payload, onSuccess) => {
        const { fName, lName, email, telegram, linkedin, phone, companyName } = payload;
        const orderMessage =
            `Новая заявка!%0AИмя: ${fName}%0AФамилия: ${lName}%0AEmail: ${email}%0ATelegram: ${telegram || '-'}%0ALinkedIn: ${linkedin || '-'}%0AТелефон: ${phone}%0AНазвание компании: ${companyName || '-'}`;
        const status = await telegramBotSend(orderMessage)
        if (status === 200 || status === 201) {
            onSuccess()
        }
        else alert('error')
    }

    return {
        onSubmit
    }
}
