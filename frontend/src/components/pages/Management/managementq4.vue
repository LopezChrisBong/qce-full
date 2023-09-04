<script>
import Steppermanage from '../Stepper/steppermanage.vue';
import Stepperq4 from '../Stepper/stepperq4.vue';
export default {
  data() {
    return {
      color: 'none',
      font: {
      },
      color1: 'none',
      font: {
      },
      color2: 'none',
      color3: 'none',
      color4: 'none',
     
    }
  },
  components:{
    Steppermanage,
    Stepperq4
  }
}
</script>
<template>
<div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div> <div class="steps-container">
     
    <Steppermanage />
    <Stepperq4 />
    </div></div>
  <div><div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="py-5">D. Management of Learnings</div>
    </div>
      <div class="stepper-panels py-8">
        <div class="stepper-quest">
          <p class="font-semibold">4. Structures/re-structures learning and teaching - learning context to enhance attainment of collective learning objectives.</p>
          
          <div class="buttons">
            <button @click="color = 'green'"  class="rouded-full manage15">5. Outstanding</button>
            <button @click="color1 = 'green'" class="manage16">4. Very Satisfaction</button>
            <button @click="color2 = 'green'" class="manage17">3. Satisfaction</button>
            <button @click="color3 = 'green'" class="manage18">2. Fair</button>
            <button @click="color4 = 'green'" class="manage19">1. Poor</button>
          </div>
        </div> 
        <div class=" ml-5 mt-10">
            <!--<div class="Preview">
            <a href="/Managementq3"><button class=" btn button-next ">Preview</button></a> 
        </div>
            -->
          <div class="next">
            <a href="/Managementq5"><button class=" btn button-next ">Next</button></a> 
          </div>
        </div>
      </div>
      
  </div></div>
  </div>
</div>
  
  </template>
  <style>

.manage {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.manage1 {
  background-color: v-bind(color1);
}
.manage2 {
  background-color: v-bind(color2);
}
.manage3 {
  background-color: v-bind(color3);
}
.manage4 {
  background-color: v-bind(color4);
}
  </style>