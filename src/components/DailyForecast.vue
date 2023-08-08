<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { format } from 'date-fns';

import { useForecastStore } from '@/stores/forecast';
import { useLocationStore } from '@/stores/location';

const forecastStore = useForecastStore();
const locationStore = useLocationStore();

const { forecast } = storeToRefs(forecastStore);

const getValue = key => {
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
    <v-card class="mx-auto" max-width="344" variant="outlined" v-if="forecast">
        <v-card-item>
            <div>
                <div class="text-overline mb-1">
                    Current Weather Outlook
                </div>

                <div class="text-h6">
                    {{ locationStore.locationName }}
                </div>

                <div class="text-subtitle-1">
                    Date: {{ format(
                        new Date(forecast.last_updated),
                        'MM/dd/yyyy'
                    ) }}
                </div>

                <div class="text-body-1">
                    Last Updated: {{ format(
                        new Date(forecast.last_updated),
                        'h:mm a z'
                    ) }}
                </div>

                <div class="text-body-1">
                    Temp: {{ getValue('temp_f') }}º
                </div>

                <div class="text-body-1">
                    Feels Like: {{ getValue('feelslike_f') }}º
                </div>

                <div class="text-body-1">
                    Condition: {{ condition.text }}
                </div>
                <!-- TODO: Render image or icon -->
                <!-- <img :src="forecast.condition.icon" /> -->

                <div class="text-body-1">
                    Humidity: {{ getValue('humidity') }}%
                </div>

                <div class="text-body-1">
                    UV Index: {{ getValue('uv') }}
                </div>

                <div class="text-body-1">
                    Wind: {{ getValue('wind_mph') }} mph
                </div>

                <div class="text-body-1">
                    Wind Gust: {{ getValue('gust_mph') }} mph
                </div>

                <div class="text-body-1">
                    Wind Direction: {{ getValue('wind_dir') }}
                </div>

                <div class="text-body-1">
                    Rain: {{ getValue('precip_in') }} inches
                </div>

                <div class="text-body-1">
                    Cloud Coverage: {{ getValue('cloud') }}%
                </div>

                <div class="text-body-1">
                    Pressure: {{ getValue('pressure_in') }} inches
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
