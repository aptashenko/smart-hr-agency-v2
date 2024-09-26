export const findPromoCode = () => {
    const query = new URLSearchParams(window.location.search);
    const promocode = query.get('promo');
    return promocode;
}
