// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue(App).$mount(document.body);
});
