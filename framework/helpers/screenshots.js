class Screenshot {
    
    constructor(page) {
        this.page = page;
      }
// TODO refactor
    async getScreenshot () {
        
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

        await this.page.waitForTimeout(8000);
        await this.page.screenshot({ path: `${getRandomInt(100)}screenshot.png`, fullPage: true });
    }
}

module.exports = {Screenshot}

