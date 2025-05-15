# E2E Tests for saucedemo.com

## Технологии
- Язык: JavaScript
- Фреймворк: [Playwright](https://playwright.dev/)
- Подход: Page Object Model (POM)
- Браузеры: Chromium, Firefox, Google Chrome

## Установка
1. Установить [репазиторий](https://github.com/OlegKiyashov/saucedemo-e2e-tests.git)
2. Установить зависимости:
- `npm install`
- `npx playwright install`
   
3. Запуск тестов во всех браузерах - `npm test`

4. Запуск тестов только в Chromium - `npm run test:chromium`

5. Запуск тестов только в Firefox - `npm run test:firefox`

6. Запуск тестов только в Chrome - `npm run test:chrome`

7. Просмотр в режиме UI - `npx playwright test --ui`

## Открытие отчета
8. После выполнения тестов - `npm run report`

## Структура
- `pages/` — Page Object классы
- `tests/` — Файлы с тестами
- `playwright.config.js/` — Конфигурация Playwright
- `package.json` - Скрипты и зависимости проекта
- `README.md` - Документация проекта

## Кейсы
- Успешная авторизация
- Авторизация с неверным паролем
- Добавление товара в корзину
- Удаление товара из корзины
- Завершение оформления заказа
