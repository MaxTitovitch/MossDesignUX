<template>
  <v-app>
    <v-app-bar
      app
      color="#066b01"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Oxxxymiron Logo"
          class="shrink mr-2"
          contain
          src="/img/logo.png"
          transition="scale-transition"
          width="40"
        />
        МОХ
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :href="latestRealiseLing"
        target="_blank"
        text
      >
        <span class="mr-2">Последний релиз</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    latestRealiseLing: 'https://band.link/KRASOTAIURODSTVO',
  }),
};
</script>

<style>

body::-webkit-scrollbar {
    width: 12px;
}

body::-webkit-scrollbar-thumb {
    background-color: #066b01;
    border-radius: 20px
}
</style>
