<template>
    <div class="events flex flex-center">
        <md-card class="custom-card event-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Kies een evenement</div>
                    <div class="md-subhead">Nieuwemarkt</div>
                </md-card-header-text>
            </md-card-header>


            <div class="md-layout-item event-select-box flex flex-center">
                <md-field>
                    <label for="country">Country</label>
                    <md-select v-model="country" name="country" id="country" md-dense>
                        <md-option value="australia">Australia</md-option>
                        <md-option value="brazil">Brazil</md-option>
                        <md-option value="japan">Japan</md-option>
                        <md-option value="united-states">United States</md-option>
                    </md-select>
                </md-field>
            </div>


        </md-card>


    </div>
</template>

<script>
    export default {
        name: "events"
    }
</script>

<style scoped>

</style>