import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', () => {
  const location = ref(null);
  const search = ref(null);

  const setLocation = position => location.value = position;
  const setSearch = searchString => search.value = searchString;

  const locationName = computed(() => {
    const value = location.value;
    if (value) {
      return `${value.name}, ${value.region}`;
    }
    return 'N/A';
  });

  return {
    search,
    location,
    locationName,
    setLocation,
    setSearch
  };
})
