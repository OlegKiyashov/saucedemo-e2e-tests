# E2E Tests for saucedemo.com

## Технологии
- Язык: JavaScript
- Фреймворк: Playwright
- Подход: Page Object Model

## Установка
1. Установите зависимости:
   ```bash
   npm install
   npx playwright install
   ```

2. Запуск тестов во всех браузерах:
   ```bash
   npm test
   ```

3. Запуск тестов только в Chromium:
   ```bash
   npm run test:chromium
   ```

4. Запуск тестов только в Firefox:
   ```bash
   npm run test:firefox
   ```

5. Просмотр в режиме UI:
   ```bash
   npx playwright test --ui
   ```

## Просмотр отчета
6. После выполнения тестов:
   ```bash
   npm run report
   ```

## Структура
- `pages/` — Page Object классы
- `tests/` — тесты
- `playwright.config.js/` — конфиг
- `package.json`
- `README.md`

## Кейсы
- Успешная авторизация
- Неверный пароль
- Добавление товара
- Удаление товара
- Оплата и завершение заказа
