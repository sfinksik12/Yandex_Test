class Screenshot {
    
    constructor(page) {
        this.page = page;
      }

    async getScreenshot () {
        await this.page.waitForTimeout(10000);
        await this.page.screenshot({ path: '123.png', fullPage: true });
    }
}

module.exports = {Screenshot}

