class MainYandexMarketPage {
    
    constructor(page) {
        this.page = page;
        // Elements
        this.SEARCH_INPUT_FIELD = page.locator("#header-search")
        this.HINT_LIST = page.locator('ul.mini-suggest__popup-content[role=listbox]')
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

    async getTextElementByValueDropDown (value) {
        const text = await this.page.locator(`li.mini-suggest__item.mini-suggest__item_inline[data-index="${value}"]`).innerText();
        return text;
    }

    async getTextElementByValueSearchField () {
        const text = await this.page.evaluate(() => document.getElementById('header-search').value);
        return text;
    }

}


module.exports = {MainYandexMarketPage}

