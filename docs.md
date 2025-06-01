# Документация: Блок "Научная деятельность кафедры"

## Общее описание
Готовое веб-приложение будет использовано кафедрой ВМиИТ, для обработки данных студентов, упрощения составления и заполнения документов, предоставления информации об учебных ресурсах и научной деятельности кафедры.
Цель квалификационной выпускной работы — разработать и интегрировать клиентскую часть веб-приложения для кафедры ВМиИТ на платформе Node.js.
Модуль отображает научные мероприятия кафедры (конкурсы, олимпиады, семинары) с возможностью навигации между разделами и просмотра прикрепленных материалов.

---

## Структура проекта
### Директории и ключевые файлы

src/

├── assets/

│ ├── mock-json/ # Моковые данные для тестирования

│ └── images/ # Статические изображения

│
├── components/

│ └── ScienceLayer/ # Компоненты научного блока

│ ├── ScienceButtonComponent.vue # Навигационные кнопки

│ ├── ScienceContentComponent.vue # Контент разделов

│ ├── ScienceHeaderComponent.vue # Заголовок блока

│ └── ScienceScrollBarComponent.vue # Галерея/презентация материалов

│
├── layers/

│ └── ScienceLayer.vue # Основной слой (композит всех компонентов)

│

├── router/

│ └── index.js # Роутинг (маршрут '/science')

│
└── svgs/ # Иконки в SVG формате


---

## Компоненты

### 1. ScienceButtonComponent.vue
**Назначение**: Панель навигации между разделами научной деятельности.

#### Особенности:
- Адаптивные кнопки с анимацией при наведении
- Подсветка активного раздела
- Использует Vue Router для переключения

#### Пропсы:
Нет

#### Данные:
```javascript
const buttons = [
  { text: "Конкурсы", route: "/contests" },
  { text: "Олимпиады", route: "/olympiads" },
  { text: "Семинары", route: "/seminars" }
];
```
### Базовые классы
```css
.button-container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.25rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  gap: 0.25rem;
  backdrop-filter: blur(10px);
}
```
### Стили кнопок
```
.custom-button {
  width: 25%;
  border-radius: 0.5rem;
  padding: 0.5rem 2.5rem;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  text-align: center;
  background-color: #7D61F2;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: none;
}
```
### Псевдоэлементы и состояния
```/* Анимация при наведении */
.custom-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(to top, #7D61F2, #B949CB);
  transition: height 0.08s ease;
  z-index: -1;
}

/* Активная кнопка */
.active-button {
  background: linear-gradient(to top, #7D61F2, #B949CB);
  box-shadow: 0 4px 10px rgba(125, 97, 242, 0.3);
}
```
### 2. ScienceContentComponent.vue
Назначение: Отображает контент выбранного раздела.

Особенности:
Динамическая загрузка данных с бэкенда

Поддержка различных типов вложений (изображения, файлы)

Обработка ошибок загрузки

API:
```const API_BASE_URL = 'http://176.126.162.10:8000';
// Эндпоинт: /scienceevent/{section}/
// Параметры: ?id={event_id}&format=api
Методы:
fetchDataFromBackend() - загрузка данных
formatElements() - преобразование элементов для галереи
```
### Структурные стили
```
.news-border {
  border: 2px solid rgba(125, 97, 242, 1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.25rem;
}

.news-title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}

.news-title-highlight {
  color: #7D61F2;
}
```
### 3. ScienceScrollBarComponent.vue
Назначение: Галерея для просмотра прикрепленных материалов.

Функционал:
Карусель для изображений

Кнопка скачивания для файлов

Модальное окно для увеличения изображений

Анимации перехода

Пропсы:
```props: {
  elements: Array,  // Массив элементов {element_url, type}
  id: [String, Number]  // Идентификатор карточки
}
```

### Контейнер и навигация
```
.gallery-container {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  background-color: rgba(125, 97, 242, 0.3);
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;
}

.nav-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  z-index: 10;
  transition: opacity 0.3s;
}
```
### Элементы галереи
```
.gallery-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 2px solid rgba(125, 97, 242, 1);
  border-radius: 0.5rem;
  cursor: pointer;
}

.download-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
}
```
### 4. ScienceHeaderComponent.vue
Назначение: Заголовок блока с кнопкой возврата.

Маршрутизация
Роут /science подключает весь модуль:
```// router/index.js
{
  path: '/science',
  name: 'science',
  component: ScienceLayer
}
```
Интеграция
Модуль подключен в корневом компоненте App.vue:
```
<template>
  <div id="app">
    <!-- ... -->
    <router-view />
    <ScienceLayer /> <!-- Научный блок -->
  </div>
</template>
```
### Карусель
```
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.5s ease;
}

.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
```
## Взаимодействие с бэкендом
### Формат ответа API
```
{
  "title": "Название мероприятия",
  "description": "Описание",
  "elements": [
    {"url": "/media/file1.jpg", "type": "image"},
    {"url": "/media/document.pdf", "type": "file"}
  ]
}
```
##Особенности реализации
Анимации:

Плавные переходы между изображениями

Эффекты наведения для кнопок

Адаптивность:

Гибкая верстка с использованием Tailwind CSS

Корректное отображение на мобильных устройствах

Обработка ошибок:

Заглушки для битых изображений

Логирование ошибок загрузки данных

Производительность:

Ленивая загрузка компонентов

Кэширование данных
