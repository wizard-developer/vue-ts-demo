<template>
  <div class="home">
    <h1>Home With Typescript</h1>
    <v-btn color="success">fuck</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'home',
})
export default class Home extends Vue {}
</script>
