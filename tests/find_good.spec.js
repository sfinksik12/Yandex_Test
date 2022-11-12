import { test, expect } from '@playwright/test';
import { AppUI } from '../framework/base/base_ui_app';
import search_words from '../framework/data/search_words';


// Arrange
let app_ui;


test.beforeEach(async ({ page }) => {
  app_ui = new AppUI(page);
  app_ui.Yandex_Subsystems_Page.loadPage();
  await app_ui.Yandex_Subsystems_Page.goToYandexMarket();
});


// Act
search_words.forEach(data => {
  test(`Поиск товара: ${data.search_word}`, async () => {   

    await test.step(`Ввод в поисковую строку товара: ${data.search_word}`, async () => {
      await app_ui.Main_YandexMarket_Page.enterSearchWord(data.search_word);
    })

    await test.step('Проверка видимости выпадающего списка', async () => {
      await app_ui.Main_YandexMarket_Page.checkHintList();  
    })

    const drop_down_word = await test.step(`Взять текст из строки ${data.search_string} в выпадающем списке`, async () => {
      return await app_ui.Main_YandexMarket_Page.getTextElementByValueDropDown(data.search_string);
    })

    await test.step(`Выбор строки ${data.search_string} из выпадающего списка`, async () => {
      await app_ui.Main_YandexMarket_Page.chooseElementByValue(data.search_string);
    })

    await test.step('Сделать скриншот', async () => {
      await app_ui.Screenshot.getScreenshot();
    })

    const search_field_word = await test.step('Взять текст из строки поиска', async () => {
      return await app_ui.Main_YandexMarket_Page.getTextElementByValueSearchField();
    })

// Assert
    await test.step(`Сравнить данные из строки ${data.search_string} выпадающего списка и строки поиска`, async () => {
      expect(drop_down_word).toEqual(search_field_word);
    })
  })
})



