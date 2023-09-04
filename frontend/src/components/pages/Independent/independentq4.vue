<script>
import Stepperind from '../Stepper/stepperind.vue';
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
    Stepperind,
    Stepperq4
  }
}
</script>
<template>
  <div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div> <div class="steps-container">
      <Stepperind />
      <Stepperq4 />
    </div></div>
  <div><div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="py-5">C. Teacher for independent learning</div>
    </div>
      <div class="stepper-panels py-8">
        <div class="stepper-quest">
          <p class="font-semibold">4. Allows students to think independently and make their own decisions and holding them accountable for their performance based largely on their success in executing decisions.</p>
          
          <div class="buttons">
            <button @click="color = 'green'"  class="rouded-full indep15">5. Outstanding</button>
            <button @click="color1 = 'green'" class="indep16">4. Very Satisfaction</button>
            <button @click="color2 = 'green'" class="indep17">3. Satisfaction</button>
            <button @click="color3 = 'green'" class="indep18">2. Fair</button>
            <button @click="color4 = 'green'" class="indep19">1. Poor</button>
          </div>
        
        </div> 
        <div class=" ml-5 mt-10">
            <!--<div class="Preview">
            <a href="/Independentq3"><button class=" btn button-next ">Preview</button></a> 
        </div>
            -->
          <div class="next">
            <a href="/Independentq5"><button class=" btn button-next ">Next</button></a> 
          </div>
        </div>
      </div>
      
  </div></div>
  </div>
</div>
  </template>
  <style>
.indep {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.indep1 {
  background-color: v-bind(color1);
}
.indep2 {
  background-color: v-bind(color2);
}
.indep3 {
  background-color: v-bind(color3);
}
.indep4 {
  background-color: v-bind(color4);
}
  </style>