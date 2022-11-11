class MainYandexMarketPage {
    
    constructor(page) {
        this.page = page;
        this.SEARCH_INPUT_FIELD = page.locator("#header-search")
        this.HINT_LIST = page.locator('ul.mini-suggest__popup-content[role=listbox]')
        this.DATA = page.locator('li.mini-suggest__item.mini-suggest__item_inline[data-index="0"]')
      }

    async enterSearchWord (Word) {
        await this.SEARCH_INPUT_FIELD.fill(Word);
    }

    async checkHintList () {
        await this.HINT_LIST.isVisible();
    }

    async chooseElementByValue (value) {
        await this.page.locator(`li.mini-suggest__item.mini-suggest__item_inline[data-index="${value}"]`).click();
    }

}


module.exports = {MainYandexMarketPage}

