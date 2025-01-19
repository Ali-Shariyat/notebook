import App from "./app";
import loadDatabase from "./repositories/loadDatabase";

(async () => {
  await loadDatabase();
  App();
})();
