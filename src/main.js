// импорт метода createApp из модуля vue
import { createApp } from 'vue'
// импорт метода для создания vuex
import { createStore } from "vuex";
// импорт компонента App
import App from './App.vue'

// создание приложения с корневым компонентом App
const app = createApp(App);
// создание хранилища vuex
const store = createStore({
    state () {
        return {
            todos: []
        }
    },
    mutations: {
        add_new_todo(state, todo) {
            state.todos.push(todo);
        },
        delete_todo(state, key) {
            state.todos.splice(key, 1);
        }
    }
});

// подключение css библиотеки бутстрап, js и css
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// подключение модуля vuex
app.use(store);
// приложение добавляется в элемент с id=app в index.html
app.mount('#app');

