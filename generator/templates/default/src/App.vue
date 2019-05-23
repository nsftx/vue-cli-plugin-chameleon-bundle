<template>
  <v-app>
    <v-toolbar app
              dark
              fixed
              clipped-left
              color="green darken-2">
      <v-toolbar-side-icon @click.stop="toggleDrawer = !toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-capitalize"><%= bundleName %> Playground</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-navigation-drawer app
                          clipped
                          fixed
                          class="green"
                          v-model="toggleDrawer"
                          dark>
        <v-list>
          <v-list-tile v-for="item in components"
                      :key="item.name"
                      :class="{ 'active': activeComponent && activeComponent.name === item.name }"
                      @click="onComponentChanged(item)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-container fluid>
        <v-layout row
                  wrap>
          <v-flex xs12 class="mb-3">
            <v-card>
              <v-jsoneditor :value="source"
                            @input="onSourceChanged">
              </v-jsoneditor>
            </v-card>
          </v-flex>
          <v-flex xs12
                  class="content">
            <v-card>
              <v-toolbar dense
                        dark
                        color="blue darken-1">
                <v-toolbar-title v-if="activeComponent">
                  {{ activeComponent.name }} Component
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text :class="{ 'pa-0': !!source }">
                <!-- CPage is always the root component inside Chameleon Builder and generated app -->
                <c-page v-if="source"
                        :definition="definition">
                </c-page>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VJsoneditor from 'vue-jsoneditor';
import { toLower, values } from 'lodash';
import 'vuetify/src/stylus/main.styl';
import * as components from './components/index.meta';

Vue.use(Vuetify);

const http = axios.create({
  timeout: 5000,
});

export default {
  name: 'app',
  components: {
    VJsoneditor,
  },
  data() {
    return {
      activeComponent: null,
      components: null,
      definition: null,
      source: null,
      toggleDrawer: true,
    };
  },
  methods: {
    onComponentChanged(component) {
      http.get(`/mocks/${toLower(component.name)}.json`).then((response) => {
        this.activeComponent = component;
        this.definition = response.data;
        this.source = this.definition;
      });
    },
    onSourceChanged(value) {
      this.definition = value;
    },
  },
  mounted() {
    this.components = values(components);
    if (this.components.length) this.onComponentChanged(this.components[0]);
  },
};
</script>

<style lang="stylus">
.content {
  border: 1px solid #1e88e5;
}

.v-list {
  .active {
    background-color: #388e3c;
  }
}
</style>
