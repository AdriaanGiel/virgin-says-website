<template>
    <div class="events flex horizontal-center">
        <md-card>
            <div class="md-layout-item">
                <md-field>
                    <md-select v-model="country" name="country" id="country" placeholder="Country">
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