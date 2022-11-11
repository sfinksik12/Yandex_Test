import { YandexSubsystemsPage } from '../ui_pages/yandex_subsystems_page';
import { MainYandexMarketPage } from '../ui_pages/main_yandex_market_page';
import { Screenshot } from '../helpers/screenshots';


class AppUI {
    constructor(page) {
        this.page = page;
        // Helpers
        this.Screenshot = new Screenshot(page);

        // Pages
        this.Yandex_Subsystems_Page = new YandexSubsystemsPage(this.page);
        this.Main_YandexMarket_Page = new MainYandexMarketPage(this.page);
      }
}

module.exports = {AppUI}