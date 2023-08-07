<script setup>
import { storeToRefs } from 'pinia';

import { useForecastStore } from '@/stores/forecast';

const forecastStore = useForecastStore();
const { forecast } = storeToRefs(forecastStore);
console.log({ forecast: forecast.value });
</script>

<template>
    <div v-if="forecast">
        {{ forecast.last_updated }}
    </div>
</template>
