<script>
import Stepperknow from '../Stepper/Stepperknow.vue';
import Stepperq2 from '../Stepper/stepperq2.vue';
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
    Stepperknow,
    Stepperq2
  }
}
</script>
<template>
  <div class="flex justify-center">
    <div class="w-10/12  lg:w-8/12">
  <div><div class="steps-container">
    
    <Stepperknow />
    <Stepperq2 />
    </div></div>
  <div>    <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="py-5">B. Knowledge of the subject matter</div>
    </div>
      <div class="stepper-panels py-8">
        <div class="stepper-quest">
          
          <p class="font-semibold">2. Draws and share information on the state on the art of theory and practice in his/her discipline.</p>
          
          <div class="buttons">
            <button @click="color = 'green'"  class="rouded-full Know5">5. Outstanding</button>
            <button @click="color1 = 'green'" class="Know6">4. Very Satisfaction</button>
            <button @click="color2 = 'green'" class="Know7">3. Satisfaction</button>
            <button @click="color3 = 'green'" class="Know8">2. Fair</button>
            <button @click="color4 = 'green'" class="Know9">1. Poor</button>
          </div>
        </div> 
        <div class=" ml-5 mt-10">
          <!--<div class="Preview">
            <a href="/Knowledge"><button class=" btn button-next ">Preview</button></a> 
        </div>
        -->  
          <div class="next">
            <a href="/Knowledgeq3"><button class=" btn button-next ">Next</button></a> 
          </div>
        </div>
      
      </div>
      
  </div></div>
  </div>
</div>
    
  
  

  
  
  </template>
  <style>


.Know {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.Know1 {
  background-color: v-bind(color1);
}
.Know2 {
  background-color: v-bind(color2);
}
.Know3 {
  background-color: v-bind(color3);
}
.Know4 {
  background-color: v-bind(color4);
}
  </style>