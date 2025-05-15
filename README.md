# E2E Tests for saucedemo.com

## Технологии
- Язык: JavaScript
- Фреймворк: Playwright
- Подход: Page Object Model

## Установка
1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запуск тестов:
   ```bash
   npx playwright test
   ```

3. Просмотр в режиме UI:
   ```bash
   npx playwright test --ui
   ```

## Структура
- `pages/` — Page Object классы
- `tests/` — тесты
- `playwright.config.js/` — конфиг

## Кейсы
- Успешная авторизация
- Неверный пароль
- Добавление товара
- Удаление товара
- Оплата и завершение заказа
