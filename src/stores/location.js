import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', () => {
  const location = ref(null);

  const setLocation = position => location.value = position;

  return {
    location,
    setLocation
  };
})
