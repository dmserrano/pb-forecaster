import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useForecastStore = defineStore('forecast', () => {
    const forecast = ref(null);

    const setForecast = update => forecast.value = update;

    return {
        forecast,
        setForecast
    };
})
