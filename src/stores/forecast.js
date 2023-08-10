import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useForecastStore = defineStore('forecast', () => {
    const forecast = ref(null);
    const forecastDay = ref(null);
    const isLoading = ref(false);

    const setForecast = update => forecast.value = update;
    const setForecastDay = update => forecastDay.value = update;
    const setIsLoading = value => isLoading.value = value;

    return {
        forecast,
        forecastDay,
        isLoading,
        setForecast,
        setForecastDay,
        setIsLoading,
    };
})
