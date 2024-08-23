import countryCodes from 'country-codes-list';

export const phoneCodeList = () => {
 const codesList = countryCodes.customList(
  'countryCode',
  '{"name": "{countryNameLocal}", "countryCode": "{countryCode}", "code": "+{countryCallingCode}"}',
 );
 const values = Object.values(codesList);
 return values.map((item) => JSON.parse(item));
};
