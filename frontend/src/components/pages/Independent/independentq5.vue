<script>
import Stepperind from '../Stepper/stepperind.vue';
import Stepperq5 from '../Stepper/stepperq5.vue';
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
    Stepperq5
  }
}
</script>
<template>
  <div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div> <div class="steps-container">
      <Stepperind />
      <Stepperq5 />
    </div></div>
  <div><div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="py-5">C. Teacher for independent learning</div>
    </div>
      <div class="stepper-panels py-8">
        <div class="stepper-quest">
           
          <p class="font-semibold">5. Encourages students to learn beyond what is required and help/guide the students how to apply the concepts learned.</p>
          
          <div class="buttons">
            <button @click="color = 'green'"  class="rouded-full indep20">5. Outstanding</button>
            <button  @click="color1 = 'green'" class="indep21">4. Very Satisfaction</button>
            <button  @click="color2 = 'green'" class="indep22">3. Satisfaction</button>
            <button  @click="color3 = 'green'" class="indep23">2. Fair</button>
            <button  @click="color4 = 'green'" class="indep24">1. Poor</button>
          </div>
        </div> 
        <div class=" ml-5 mt-10">
            <!--<div class="Preview">
            <a href="/Independentq4"><button class=" btn button-next ">Preview</button></a> 
        </div>
            -->
          <div class="next">
            <a href="/Management"><button class=" btn button-next ">Next</button></a> 
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