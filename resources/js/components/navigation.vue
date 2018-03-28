<template>
    <div>
        <md-toolbar class="md-accent primary-color" md-elevation="1">
            <div class="md-small-hide">
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
            </div>

            <h3 class="md-title" style="flex: 1">Title</h3>
            <md-button to="/home">Home</md-button>
            <md-button to="uitleg" class="md-primary">Uitleg</md-button>
        </md-toolbar>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>