// импорт метода createApp из модуля vue
import { createApp } from 'vue'

// подключение css библиотеки бутстрап, js и css
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// импорт компонента App
import App from './App.vue'

// вызов метода создания приложения, в параметр передаётся корневой компонент
// приложение добавляется в элемент с id=app в index.html
// использовать модуль VueMaterial в приложении
createApp(App).mount('#app');