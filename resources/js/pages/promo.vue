<template>
    <div>
        <promo-head></promo-head>
        <highscore></highscore>
        <download></download>
        <events></events>
        <contact></contact>
    </div>
</template>

<script>
    import PromoHead from '../components/promo-head';
    import highscore from '../components/highscore';
    import download from '../components/download';
    import events from '../components/events';
    import contact from '../components/contact';

    export default {
        name: "promo",
        components:{
            'promo-head': PromoHead,
            'highscore': highscore,
            'download': download,
            'events': events,
            'contact': contact
        }
    }
</script>

<style scoped>

</style>