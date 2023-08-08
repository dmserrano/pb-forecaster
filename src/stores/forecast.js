import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useForecastStore = defineStore('forecast', () => {
    const forecast = ref(null);
    const isLoading = ref(false);

    const setForecast = update => forecast.value = update;
    const setIsLoading = value => isLoading.value = value;

    return {
        forecast,
        isLoading,
        setForecast,
        setIsLoading,
    };
})
