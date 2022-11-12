class YandexSubsystemsPage {
    
    constructor(page) {
        this.page = page;
        this.endpoint = '/all';
        // Elements
        this.YANDEX_MARKET_TITLE = this.page.locator("#services-big-item-market-title")
      }

    async loadPage () {
        await this.page.goto(this.endpoint);
    }

    async goToYandexMarket () {
        await this.YANDEX_MARKET_TITLE.click();
        await this.page.waitForNavigation();
    }

}


module.exports = {YandexSubsystemsPage}

