<template>
    <div>
        <promo-head></promo-head>
        <highscore></highscore>
        <download></download>
        <events></events>
        <!--<contact></contact>-->
        <location></location>
    </div>
</template>

<script>
    import PromoHead from '../components/promo-head';
    import highscore from '../components/highscore';
    import download from '../components/download';
    import events from '../components/events';
    import contact from '../components/contact';
    import location from '../components/location';

    export default {
        name: "promo",
        components:{
            'promo-head': PromoHead,
            'highscore': highscore,
            'download': download,
            'events': events,
            'contact': contact,
            'location': location
        }
    }
</script>

<style scoped>

</style>