**Основная ветка frontend разработки.**
*Именно сюда происходит слияние всех веток разработчиков.*

Запуск проекта производится с помощью команды в директории frontend:
```bash
npm run dev
```

Все компоненты называются с большой буквы в CamelCase.vue.

В директории src/layers/ создаются слои, т.е. отображаемые страницы, на которые пользователь может перейти.

В директории src/components/ создаются компоненты, наполняющие слои. В случае, если для компоненты необходимы вложенные компоненты, создаётся каталог src/components/<название родительской компоненты с маленькой буквы>/ и в ней создаются вложенные компоненты.

В случае, если в проект добавляется package, обязательно указывайте это в commit comment.
