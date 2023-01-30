import { createRouter, createWebHistory } from "vue-router";
import AppNewContact from './pages/AppNewContact.vue';
import AppNotFound from './pages/AppNotFound.vue'; 
import App from './App.vue'; 

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: "/", 
            name: "home", 
            component: App
        }, 
        {
            path: "/about", 
            name: "about", 
            component: AppNewContact
        }, 

        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: AppNotFound
      },
    ]

}); 

export {router}; 