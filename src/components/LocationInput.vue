<script setup>
import { onMounted, watch } from 'vue';

import { getCurrentPosition } from '@/services/geolocation';
import { getCurrentRealTimeForecast } from '@/services/weather';
import { useForecastStore } from '@/stores/forecast';
import { useLocationStore } from '@/stores/location';

const forecastStore = useForecastStore();
const locationStore = useLocationStore();

const handleLocationChange = async () => {
    if (!locationStore.search) return;

    const { current, location } = await getCurrentRealTimeForecast(locationStore.search);
    forecastStore.setForecast(current);

    if (location.name && location.region) {
        locationStore.setLocation(location);
    }
}

onMounted(() => {
    getCurrentPosition(locationStore.setSearch);
});

watch(() => locationStore.search, async (newPosition, oldPosition) => {
    if (newPosition && oldPosition === null) {
        handleLocationChange();
    }
});
</script>

<template>
    <v-container class="align-center">
        <v-row no-gutters class="d-flex justify-space-around align-items-center">
            <v-col cols="8" sm="8">
                <v-text-field label="Location (enter city or zipcode)" v-model="locationStore.search"
                    @keyup.enter="handleLocationChange">
                    <template v-slot:append>
                        <v-btn icon="mdi-send" :disabled="!locationStore.search" @click="handleLocationChange" />
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>