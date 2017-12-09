<template>
<div class="app">
  <h1>Simple Meteor example using Vue</h1>
  <p>
    You pressed the button {{count}} times.
  </p>
  <my-button :label="buttonLabel" @click="addOne"></my-button>
  <p>
    Learn more about the vue integration <a href="https://github.com/Akryum/meteor-vue-component">on GitHub</a>.
  </p>

   <v-dialog v-model="dialog2" max-width="500px">
      <v-card>
        <v-card-title>
          Dialog 2
        </v-card-title>
        <v-card-text>
          <v-select
            v-bind:items="select"
            label="A Select List"
            item-value="text"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="dialog2 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
import {Session} from 'meteor/session';

Session.setDefault("counter", 0);

let labels = ['Click me!', 'Click me again!', 'Here! Click here!', 'Again! Again!',
'Don\'t click me! No, I\'m just kidding. You can.', 'You like that?',
'Can you stratch me in the back please?', 'You are soooo nice! Click!',
'Hmmmm...', 'You know, you are wasting time clicking me.',
'No really, you can click me as much as you want.', 'Click me to level up!'];

export default {
  data() {
    return {
      buttonLabel: 'Click me!',
      count: 0,
      dialog2: false,
      select: ["Item 1", "Item 2", "Item 3"]
    }
  },
  meteor: {
    data: {
      count() {
        return Session.get('counter');
      }
    }
  },
  methods: {
    addOne() {
      Session.set('counter', this.count + 1);

      this.buttonLabel = labels[Math.round(Math.random()*(labels.length - 1))];
    }
  }
}
</script>

<style>
body {
  margin: 30px;
}

a {
  color: #40b883;
  text-decoration: none;
}

h1 {
  font-weight: normal;
}
</style>
