<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { format } from 'date-fns';

import CurrentForecastPanel from './CurrentForecastPanel.vue';
// import HourlyForecast from './HourlyForecast.vue';
import TodaysConditionPanel from './TodaysConditionPanel.vue';

import { useForecastStore } from '@/stores/forecast';
import { useLocationStore } from '@/stores/location';

const forecastStore = useForecastStore();
const locationStore = useLocationStore();

const { forecast, isLoading } = storeToRefs(forecastStore);

const CURRENT_PANEL = 'current';
const TODAY_PANEL = 'today';
const panels = ref([CURRENT_PANEL]);
</script>

<template>
    <div class="text-center" v-if="isLoading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <div v-if="!isLoading && forecast">
        <v-container class="align-center">
            <v-row no-gutters class="d-flex justify-space-around">
                <v-col cols="12" sm="8" md="8" lg="6" class="text-grey-lighten-4">
                    <div class="text-h6">
                        {{ locationStore.locationName }}
                    </div>

                    <div class="text-subtitle-1">
                        Date: {{ format(
                            new Date(forecast.last_updated),
                            'MM/dd/yyyy'
                        ) }}
                    </div>
                </v-col>
            </v-row>

            <v-row class="mt-2 d-flex" no-gutters justify-md="center" justify-sm="center">
                <v-col cols="12" sm="8" md="8" lg="6">
                    <v-expansion-panels v-model="panels">
                        <CurrentForecastPanel :value="CURRENT_PANEL" />

                        <TodaysConditionPanel :value="TODAY_PANEL" />
                    </v-expansion-panels>
                </v-col>

                <!-- TODO: release later -->
                <!-- <v-col cols="12" sm="8" md="8" lg="6">
                    <HourlyForecast />
                </v-col> -->
            </v-row>
        </v-container>
    </div>
</template>
