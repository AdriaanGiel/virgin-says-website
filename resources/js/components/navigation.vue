<template>
    <div id="navbar">
        <md-toolbar class=" primary-color" md-elevation="1">
            <div class="mobile">
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
            </div>

            <h3 class="md-title" style="flex: 1">The Virgin of Holland Says</h3>
            <md-button class="desktop md-title" to="/home">Home</md-button>
            <md-button class="desktop md-title" to="uitleg">Uitleg</md-button>

        </md-toolbar>

        <md-drawer :md-fixed="true" :md-active.sync="showNavigation" style="background-color: white">
            <md-toolbar md-elevation="2">
                <span class="md-title">The Virgin Says</span>
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>move_to_inbox</md-icon>
                    <md-button class="md-list-item-text" to="/home">Home</md-button>
                </md-list-item>

                <md-list-item>
                    <md-icon>send</md-icon>
                    <md-button class="md-list-item-text" to="uitleg">Uitleg</md-button>
                </md-list-item>
            </md-list>
        </md-drawer>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data() {
            return {
                showNavigation: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #navbar
        a
            color black


</style>