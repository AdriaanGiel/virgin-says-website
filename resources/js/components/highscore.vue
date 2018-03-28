<template>
    <div class="highscore flex flex-center">
        <div class="highscore-box md-elevation-3">
            <h2>Highscore</h2>
            <div class="highscore-item-content flex horizontal-flex">
                <highscore-items></highscore-items>
            </div>


        </div>
    </div>
</template>

<script>
    import highscoreItems from './highscore-items';
    export default {
        name: "highscore",
        components:{
            'highscore-items': highscoreItems
        }
    }
</script>

<style scoped>

</style>