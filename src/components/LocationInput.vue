<script setup>
import { onMounted, watch } from 'vue';

import { getCurrentPosition } from '@/services/geolocation';
import { getCurrentRealTimeForecast } from '@/services/weather';
import { useForecastStore } from '@/stores/forecast';
import { useLocationStore } from '@/stores/location';

const forecastStore = useForecastStore();
const locationStore = useLocationStore();

const handleLocationChange = async update => {
    const { location = {}, current = {} } = await getCurrentRealTimeForecast(update);
    forecastStore.setForecast(current);

    if (location.name && location.region) {
        locationStore.setLocation(
            `${location.name}, ${location.region}`
        );
    }
}

onMounted(() => {
    getCurrentPosition(locationStore.setLocation);
});

watch(() => locationStore.location, async (newPosition, oldPosition) => {
    if (newPosition && oldPosition === null) {
        handleLocationChange(newPosition);
    }
});
</script>

<template>
    <v-container class="align-center">
        <v-row no-gutters class="d-flex justify-space-around align-items-center">
            <v-col cols="8" sm="8">
                <v-text-field label="Location (enter city or zipcode)" v-model="locationStore.location">
                    <template v-slot:append>
                        <v-btn icon="mdi-send" :disabled="!locationStore.location" />
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>