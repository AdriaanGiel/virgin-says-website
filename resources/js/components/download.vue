<template>
    <div class="download section">
        <h2 class="text-center big-title">Download de App!</h2>
        <div class="md-layout mobile-flex-column mobile-landscape-flex-column full-height">
            <div class="app-buttons flex flex-center flex-column mobile-flex-column md-layout-item">

                <a href="">
                    <object style="height: 4.5em" data="images/google-play-badge.svg" type="image/svg+xml"
                            class="google-play-button"></object>
                </a>
                <a href="">
                    <object style="height: 5em" data="images/App_Store_Badge.svg" type="image/svg+xml"
                            class="app-store-button"></object>
                </a>

            </div>
            <div class="md-layout-item phone-box relative flex flex-center">
                <div class="phone android">
                    <div class="device-wrapper">
                        <div class="device" data-device="Pixel" data-orientation="portrait" data-color="black">
                            <div class="screen flex flex-center" style="background-color: white">
                                <div class="flex flex-center">
                                    <img height="50" width="50"  src="images/logo.jpg" alt="Logo">
                                </div>
                            </div>
                            <div class="button">
                                <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="phone iphone">
                    <div class="device-wrapper">
                        <div class="device" data-device="iPhone6" data-orientation="portrait" data-color="gold">
                            <div class="screen flex flex-center" style="background-color: white">
                                <div class="flex flex-center">
                                    <img height="50" width="50"  src="images/logo.jpg" alt="Logo">
                                </div>
                            </div>
                            <div class="button">
                                <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                            </div>
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