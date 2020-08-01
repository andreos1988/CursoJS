<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-tile>Most Used Words</v-toolbar-tile>  
    </v-app-bar>
    <v-content>
      <Home />
    </v-content>

  </v-app>
</template>

<script>

import Home from './components/Home'

export default {
  name: 'App',

  components: {
   Home
  },

  data: () => ({
    //
  }),
};
</script>
