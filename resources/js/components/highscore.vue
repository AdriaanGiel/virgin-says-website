<template>
    <div class="section highscore flex flex-center">
        <!--<h2 style="text-align: center">Highscore</h2>-->

        <div class=" flex flex-center">
            <md-card class="custom-card highscore-card">
                <md-card-header>
                    <div class="md-title">Highscores</div>
                </md-card-header>

                <md-card-content class="">
                        <p class="text-center">
                            Je kan hier en in de app bekijken of jij in de top 10 van de maand staat. Sta je er niet in, dan weet je wat jou te doen staat.
                        </p>
                    <highscore-items></highscore-items>
                </md-card-content>

            </md-card>


            <!--<div class="highscore-box md-elevation-3">-->
                <!--<h3 class="no-landscape">Highscores</h3>-->
                <!--<div class="highscore-item-content flex horizontal-flex">-->
                    <!--<highscore-items></highscore-items>-->
                <!--</div>-->
            <!--</div>-->
        </div>

    </div>

</template>

<script>
    import highscoreItems from './highscore-items';
    export default {
        name: "highscore",
        components:{
            'highscore-items': highscoreItems
        },
        data(){
            return {
                highscores: {}
            }
        },
        mounted(){
            this.getHighscores();
        },
        methods:{
            getHighscores(){
                Reqwest({
                    url: 'https://www.adriaangiel.me/api/highscores',
                    type: 'json'
                    , contentType: 'application/json'
                    , crossOrigin: true
                    , withCredentials: true
                    , success: this.fillHighscores
                    , error: this.showErrorMessage
                })
            },
            foo(e){
                console.log(e);
            },
            fillHighscores(data){
                console.log(data);
            },
            showErrorMessage(error){
                console.log(error);
            }
        }
    }
</script>

<style scoped>

</style>