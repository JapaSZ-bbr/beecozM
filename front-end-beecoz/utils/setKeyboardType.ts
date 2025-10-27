export const setKeyboardType = (type: string) => {
    switch (type) {
        case "email":
          return "email-address";
        case "phone":
          return "phone-pad";
        case "password":
          return "default";
        case "CPF":
          return "number-pad";
        case "CPNJ":
          return "number-pad";
        default:
          break;
      }
}