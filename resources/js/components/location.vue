<template>
    <gmap-map
            :center="center"
            :zoom="15"
            style="width: 100%; height: 50vh"
    >
        <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
        ></gmap-marker>
    </gmap-map>
</template>
<script>
    import * as VueGoogleMaps from 'vue2-google-maps';
    import Vue from 'vue';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyCrKHNNWt1-5Gi-fL_yTGlbdukLqnAJl4Q',
        }
    });
    export default {
        name: "location",
        data () {
            return {
                center: {lat: 51.922279, lng: 4.488319},
                markers: [{
                    position: {lat: 51.922279, lng: 4.488319}
                }]
            }
        }
    }
</script>
