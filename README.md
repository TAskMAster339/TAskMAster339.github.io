# Резюме - Гришко Дмитрий Михайлович

Современное интерактивное резюме разработчика с опытом в Backend, ML/DL, размещенное на GitHub Pages.

## Технологии

- **HTML5** - семантическая разметка
- **CSS3** - современный дизайн с использованием:
  - Glassmorphism (эффект матового стекла)
  - CSS Grid и Flexbox для адаптивной верстки
  - CSS Custom Properties (переменные)
  - Плавные анимации и переходы
  - Mobile-first подход
- **JavaScript (ES6+)** - интерактивность (toggle скриншотов)

## Особенности дизайна

- ✨ Эффект glassmorphism (матовое стекло)
- 🎨 Современная градиентная цветовая схема
- 📱 Полностью адаптивный дизайн (mobile-first)
- 🖼️ Интерактивные скриншоты проектов (показ/скрытие по кнопке)
- 🌈 Поддержка темной/светлой темы (prefers-color-scheme)
- ♿ Доступность (accessibility)
- 🎭 Плавные анимации и микроинтеракции
- 🖨️ Оптимизация для печати

## Как добавить скриншоты проектов

В папке `images/` находятся placeholder-изображения (SVG) для каждого проекта. Замените их на реальные скриншоты:

1. Подготовьте изображение размером 800x450px (16:9)
2. Сохраните с одним из имен файлов в папке `images/`:
   - `game-backend.jpg` (или .png)
   - `film-it-easy.jpg` (или .png)
   - `etl-graph.jpg` (или .png)
3. Если меняете формат с SVG на JPG/PNG, обновите расширение в `index.html`

Подробные инструкции: [images/README.md](images/README.md)

## Как запустить локально

1. Склонируйте репозиторий:
```bash
git clone https://github.com/TAskMAster339/TAskMAster339.github.io.git
cd TAskMAster339.github.io
```

2. Откройте `index.html` в браузере или запустите локальный сервер:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

3. Перейдите по адресу `http://localhost:8000`

## Структура проекта

```
.
├── index.html       # Главная страница резюме
├── styles.css       # Стили (Glassmorphism, анимации)
├── script.js        # JavaScript для интерактивности
├── images/          # Изображения проектов
│   ├── README.md    # Инструкции по добавлению изображений
│   ├── game-backend.svg
│   ├── film-it-easy.svg
│   └── etl-graph.svg
├── data.txt         # Исходные данные резюме
└── README.md        # Документация
```

## Навыки

- **Языки**: Python
- **Фреймворки**: Django, pytest
- **ML/DL**: PyTorch, scikit-learn, pandas, numpy
- **Аналитика**: основы аналитики данных, визуализация
- **Инструменты**: Git, Docker, CI/CD (GitHub Actions)

## Live Demo

🌐 [https://taskmaster339.github.io](https://taskmaster339.github.io)

## Контакты

- **Telegram**: [@TAskMAster339](https://t.me/TAskMAster339)
- **Email**: dimagr3214@gmail.com
- **GitHub**: [TAskMAster339](https://github.com/TAskMAster339)

---

© 2026 Гришко Дмитрий Михайлович
