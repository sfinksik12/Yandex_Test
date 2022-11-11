import { test } from '@playwright/test';
import { AppUI } from '../framework/base/base_ui_app';


let app_ui;


test.beforeEach(async ({ page }) => {
  app_ui = new AppUI(page);
  app_ui.Yandex_Subsystems_Page.loadPage();
  await app_ui.Yandex_Subsystems_Page.goToYandexMarket();
});


test('Поиск черного платья', async () => {
  await test.step('Ввод в поисковую строку переменной', async () => {
    await app_ui.Main_YandexMarket_Page.enterSearchWord('Черное платье');
  }),

  await test.step('Проверка видимости выпадающего списка', async () => {
    await app_ui.Main_YandexMarket_Page.checkHintList();
  })

  await test.step('Выбор элемента из выпадающего списка', async () => {
    await app_ui.Main_YandexMarket_Page.chooseElementByValue(1);
  })

  await test.step('Сделать скриншот', async () => {
    await app_ui.Screenshot.getScreenshot();
  })
});


