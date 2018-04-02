<template>
    <div>
        <h2 style="text-align: center">Highscore</h2>
        <div>
            <md-card-content>
                Je kan hier en in de app bekijken of jij in de top 10 van de maand staat. Sta je er niet in, dan weet je wat jou te doen staat.
            </md-card-content>
        </div>


        <div class="highscore flex flex-center">
            <div class="highscore-box md-elevation-3">
                <h3>Highscores</h3>
                <div class="highscore-item-content flex horizontal-flex">
                    <highscore-items></highscore-items>
                </div>
            </div>
        </div>
        <!--<div class="md-layout">-->
            <!--<div class="highscore flex flex-center md-layout-item" style="padding: 0 1em">-->
                <!--<md-content>-->
                    <!--<md-card class="custom-card">-->
                        <!--<md-card-header>-->
                            <!--<div class="md-title">Bekijk hier alle huidige highscores</div>-->
                        <!--</md-card-header>-->

                        <!--<md-card-content>-->
                            <!--Je kan hier en in de app bekijken of jij in de top 10 van de maand staat. Sta je er niet in, dan weet je wat jou te doen staat.-->
                        <!--</md-card-content>-->
                    <!--</md-card>-->
                <!--</md-content>-->

            <!--</div>-->
        <!--</div>-->

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