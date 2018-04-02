<template>
    <div class="download flex flex-center">
        <div class="flex flex-row">
            <div class="app-buttons flex flex-column">
                <a href="">
                    <object style="height: 5em" data="images/App_Store_Badge.svg" type="image/svg+xml" class="app-store-button"></object>
                </a>

                <a href="">
                    <object style="height: 4.5em" data="images/google-play-badge.svg" type="image/svg+xml" class="google-play-button"></object>
                </a>


            </div>
            <div class="phone flex flex-center">
                <div class="device-wrapper">
                    <div class="device" data-device="iPhone6" data-orientation="portrait" data-color="black">
                        <div class="screen">
                            <!-- PUT CONTENTS HERE -->
                            TEST
                        </div>
                        <div class="button">
                            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="phone flex flex-center">
                <div class="device-wrapper">
                    <div class="device" data-device="galaxyS5"  data-orientation="portrait" data-color="black">
                        <div class="screen">
                            <!-- PUT CONTENTS HERE -->
                            TEST
                        </div>
                        <div class="button">
                            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "download"
    }
</script>

<style scoped>

</style>