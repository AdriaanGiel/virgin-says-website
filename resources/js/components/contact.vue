<template>
    <div>
        <div  id="contact" class=" flex flex-center">
            <md-button @click="showForm" class="md-raised md-accent">Accent</md-button>
        </div>

        <transition name="fade">
            <div v-if="displayForm"  id="contact-form" class=" flex flex-center">
                <md-card class="custom-card contact-card md-primary">
                    <md-card-header>
                        <div class="md-title">Contact formulier</div>
                    </md-card-header>

                    <md-card-content>
                        <form novalidate @submit.prevent="addTodo" style="width:100%">
                            <md-field>
                                <label>Naam</label>
                                <md-input v-model="initial"></md-input>
                            </md-field>
                            <md-field>
                                <label>Email</label>
                                <md-input v-model="initial"></md-input>
                            </md-field>
                            <md-field>
                                <md-textarea v-model="textarea"></md-textarea>
                            </md-field>
                        </form>

                    </md-card-content>

                    <md-card-actions class="flex flex-center">
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                    </md-card-actions>
                </md-card>

            </div>
        </transition>


    </div>

</template>

<script>
    export default {
        name: "contact",
        data(){
          return {
              displayForm: false
          }
        },
        methods:{
            /**
             * Method to show form on click button
             */
            showForm(){
                this.displayForm = !this.displayForm;
            }
        }
    }
</script>

<style scoped>

</style>