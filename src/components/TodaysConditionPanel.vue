<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useForecastStore } from '@/stores/forecast';

const forecastStore = useForecastStore();

const { forecastDay } = storeToRefs(forecastStore);

const getForecastDayValue = key => {
    if (forecastDay.value?.day[key] !== undefined) {
        return forecastDay.value?.day[key];
    }

    return 'N/A';
}

const astro = computed(() => {
    return forecastDay.value?.astro
        ? forecastDay.value?.astro : {}
});
</script>

<template>
    <v-expansion-panel class="bg-grey-darken-4 text-grey-lighten-4">
        <v-expansion-panel-title>
            <div class="text-overline mb-1">
                Today's Condtions
            </div>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
            <div class="text-body-1">
                Max Temp: {{ getForecastDayValue('avgtemp_f') }}º
            </div>

            <div class="text-body-1">
                Min Temp: {{ getForecastDayValue('mintemp_f') }}º
            </div>

            <div class="text-body-1">
                Total Precipitation: {{ getForecastDayValue('totalprecip_in') }} inches
            </div>

            <div class="text-body-1">
                Average Temp: {{ getForecastDayValue('avgtemp_f') }}º
            </div>

            <div class="text-body-1">
                Average Humidity: {{ getForecastDayValue('avghumidity') }}%
            </div>

            <div class="text-body-1">
                Max wind (mph): {{ getForecastDayValue('maxwind_mph') }}
            </div>

            <div class="text-body-1">
                Sunrise: {{ astro.sunrise }}
            </div>

            <div class="text-body-1">
                Sunset: {{ astro.sunset }}
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>