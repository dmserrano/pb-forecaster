<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <header>
      <div class="wrapper">
        <div class="text-h4">
          Pickleball Forecaster <v-icon icon="mdi-weather-sunny" color="yellow" />
        </div>

        <!-- <nav> -->
        <!-- No links needed yet -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- </nav> -->
      </div>
    </header>

    <div class="router-container">
      <RouterView />
    </div>

    <footer>
      <div class="text-overline">
        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
      </div>
    </footer>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header .wrapper {
  display: flex;
  flex-direction: column;
  place-items: center;
  flex-wrap: wrap;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
}

.router-container {
  flex-grow: 1;
}
</style>
