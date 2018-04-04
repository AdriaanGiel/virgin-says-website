<template>
    <div class="promo-head flex flex-center">
        <md-card class="custom-card promo-card ">
            <md-card-header>
                <div class="md-title">
                    <h2>
                        NieuweMarkt Rotterdam
                    </h2>
                </div>
            </md-card-header>

            <md-card-content>
                Kom snel en speel een potje "Virgin Says", een leuk en gezellig spel om met je vrienden te spelen. Voor uitleg hoe de spel werkt klik dan
                <router-link to="uitleg">Hier</router-link>.
            </md-card-content>

        </md-card>
    </div>
</template>

<script>
    export default {
        name: "promo-head"
    }
</script>

<style scoped>

</style>