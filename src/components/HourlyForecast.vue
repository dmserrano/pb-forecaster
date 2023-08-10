<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { format } from 'date-fns';

import { useForecastStore } from '@/stores/forecast';

const forecastStore = useForecastStore();

const { forecastDay } = storeToRefs(forecastStore);

const hourForecast = computed(() => {
    return forecastDay.value?.hour
        ? forecastDay.value.hour : [];
});

console.log(forecastDay.value.hour)
</script>

<template>
    <div class="text-h6 mt-2">
        Hourly Forecast
    </div>

    <div v-for="({
        chance_of_rain,
        time
    }) in hourForecast" :key="time">
        <div>{{ format(new Date(time), 'h a') }}</div>
        <div>{{ chance_of_rain }}</div>
    </div>
</template>