<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { format } from 'date-fns';

import { useForecastStore } from '@/stores/forecast';

const forecastStore = useForecastStore();

const { forecast } = storeToRefs(forecastStore);

const getForecastValue = key => {
    if (forecast.value[key] !== undefined) {
        return forecast.value[key];
    }

    return 'N/A';
};

const condition = computed(() => {
    return forecastStore.forecast.condition
        ? forecastStore.forecast.condition : 'N/A';
});
</script>

<template>
    <v-expansion-panel class="bg-grey-darken-4 text-grey-lighten-4">
        <v-expansion-panel-title>
            <div class="text-overline mb-1">
                Current Weather Outlook
            </div>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
            <div class="text-body-1">
                Last Updated: {{ format(
                    new Date(forecast.last_updated),
                    'h:mm a'
                ) }}
            </div>

            <div class="text-body-1">
                Temp: {{ getForecastValue('temp_f') }}º
            </div>

            <div class="text-body-1">
                Feels Like: {{ getForecastValue('feelslike_f') }}º
            </div>

            <div class="text-body-1">
                Condition: {{ condition.text }}
            </div>
            <!-- TODO: Render image or icon -->
            <!-- <img :src="forecast.condition.icon" /> -->

            <div class="text-body-1">
                Humidity: {{ getForecastValue('humidity') }}%
            </div>

            <div class="text-body-1">
                UV Index: {{ getForecastValue('uv') }}
            </div>

            <div class="text-body-1">
                Wind: {{ getForecastValue('wind_mph') }} mph
            </div>

            <div class="text-body-1">
                Wind Gust: {{ getForecastValue('gust_mph') }} mph
            </div>

            <div class="text-body-1">
                Wind Direction: {{ getForecastValue('wind_dir') }}
            </div>

            <div class="text-body-1">
                Rain: {{ getForecastValue('precip_in') }} inches
            </div>

            <div class="text-body-1">
                Cloud Coverage: {{ getForecastValue('cloud') }}%
            </div>

            <div class="text-body-1">
                Pressure: {{ getForecastValue('pressure_in') }} inches
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>