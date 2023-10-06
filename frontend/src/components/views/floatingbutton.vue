<template>

<ejs-fab content='Add'></ejs-fab>

</template>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
</style>
<script>
import { FabComponent } from "@syncfusion/ej2-vue-buttons";
export default {
         name: "App",
         components: {
         "ejs-fab": FabComponent
         }
     }
</script>
