<template>
  <v-container>
    <v-row class="text-center mt-3 align-start">
      <v-col cols="12" md="5" class="d-flex align-center px-5 flex-column justify-center">
        <v-img
          :src="require('@/assets/main.png')"
          contain
          width="100%"
          class="hidden-md-and-down"
        />
        <v-audio-player
          :src="require('@/assets/mosh.mp3')"
          track-title="Мох "
          track-subtitle="oXXXimiron"
          :compact="$vuetify.breakpoint.smAndDown"
          :autoplay="false"
          :album-art="require('@/assets/main.png')"
          color="#066b01"
          track-color="#7ab078"
        >
        </v-audio-player>

        <v-expansion-panels>
          <v-expansion-panel class="mt-3">
            <v-expansion-panel-header>
              <h1 class="display-1 font-weight-bold text-center">
                Мох - oXXXymiron
              </h1>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <pre class="text-left overflow-x-auto">
                {{ mossText }}
              </pre>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" md="7" class="mb-4 px-5">
        <h2 class="display-1 font-weight-bold text-center">
          Oxxxymiron
        </h2>
        <p class="text-left mt-3" v-html="oxyDescription" />

        <h2 class="display-0 font-weight-bold text-left mt-5">
          Последние релизы:
        </h2>
        <v-list three-line>
          <template v-for="(item, index) in links">
            <v-list-item :key="index" :href="item.link" target="_blank">
              <v-list-item-avatar :width="$vuetify.breakpoint.smAndDown ? '150px' : '120px'" :height="$vuetify.breakpoint.smAndDown ? '100px' : '95px'">
                <div>
                  <v-img :src="item.photo" class="image-realise"></v-img>
                </div>
              </v-list-item-avatar>

              <v-list-item-title v-html="item.label"></v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mossText, oxyDescription} from '@/constants/text';
import sv from '@/assets/sv.jpeg';
import kiu from '@/assets/kiu.jpeg';
import VAudioPlayer from '@/components/external/VuetifyAudioPlayer';

export default {
  name: 'Main',

  components: {
    VAudioPlayer,
  },

  data: () => ({
    mossText,
    oxyDescription,
    links: [
      {
        label: 'Красота и уродство',
        link: 'https://band.link/KRASOTAIURODSTVO',
        photo: kiu,
      },
      {
        label: 'Смутное время',
        link: 'https://band.link/SMUTNOEVREMYA',
        photo: sv,

      },
    ],
  }),
};
</script>

<style scoped>
h1 {
    color: #066b01;
}

.image-realise {
    width: 100px !important;
    height: 100px !important;
}
</style>
