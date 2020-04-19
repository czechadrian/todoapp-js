const path = require("path");
const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: path.join(__dirname, "src/app/intl/messages"),
  translationsDirectory: path.join(__dirname, "src/app/intl/locales/"),
  languages: ["en", "pl"],
});
