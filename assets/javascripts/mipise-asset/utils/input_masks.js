export function loadCustomInputMasks() {
  // International phone number format
  const phoneNumberMask = Inputmask({
    mask: "9{1,3}9{4,15}",
    placeholder: ""
  });

  // Currency format
  const currencyMask = Inputmask("integer", {
    groupSeparator: " ",
    rightAlign: false,
    autoGroup: true
  });

  // Thousands separator
  const thousandsSeparatorMask = Inputmask("integer", {
    groupSeparator: " ",
    autoGroup: true,
    rightAlign: false
  });

  // Thousands decimal separator
  const thousandsDecimalSeparatorMask = Inputmask("decimal", {
    groupSeparator: " ",
    autoGroup: true,
    rightAlign: false
  });

  const ibanCodeMask = Inputmask({
    mask: "*",
    repeat: 5,
    greedy: false
  });

  const accountNumberMask = Inputmask({
    mask: "*",
    repeat: 19,
    greedy: false
  });

  const ibanKeyMask = Inputmask({
    mask: "*",
    repeat: 19,
    greedy: false
  });

  for (const phoneNumber of document.getElementsByClassName("intl_phone_mask"))
    phoneNumberMask.mask(phoneNumber);

  for (const currency of document.getElementsByClassName("currency_mask"))
    currencyMask.mask(currency);

  for (const thousandsSeparator of document.getElementsByClassName("thousands_separator_mask"))
    thousandsSeparatorMask.mask(thousandsSeparator);

  for (const thousandsDecimalSeparator of document.getElementsByClassName("thousands_separator_with_decimals_mask"))
    thousandsDecimalSeparatorMask.mask(thousandsDecimalSeparator);

  for (const ibanBankCode of document.getElementsByClassName("inputmask_iban_bank_code"))
    ibanCodeMask.mask(ibanBankCode);

  for (const ibanBankCode of document.getElementsByClassName("inputmask_iban_branch_code"))
    ibanCodeMask.mask(ibanBankCode);

  for (const ibanBankCode of document.getElementsByClassName("inputmask_iban_account_number"))
    accountNumberMask.mask(ibanBankCode);

  for (const ibanBankCode of document.getElementsByClassName("inputmask_iban_key"))
    ibanKeyMask.mask(ibanBankCode);
}
