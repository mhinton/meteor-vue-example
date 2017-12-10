// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify/dist/vuetify.min.js";
// import Vuetify from "vuetify";

Vue.use(Vuetify);

// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue(App).$mount(document.body);
});
