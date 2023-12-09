export const dateFormatter = (date, locale) => {
    const options = {month: 'long', day: 'numeric', year: 'numeric'};
    const formattedDate = date.toLocaleDateString(locale, options);
    return formattedDate;
};