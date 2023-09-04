<script>
import Steppercom from '../Stepper/steppercom.vue'
import Stepperq5 from '../Stepper/stepperq5.vue'
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
  Steppercom,
  Stepperq5
 }
}
</script>
<template>
<div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div>
    <div class="steps-container">
      <Steppercom />
      <Stepperq5 />
  </div>
  </div>
  <div>
    
  <div class="stepper-content">
  
  <div class="stepper-panel">
    <div class="py-5">A. Commitment</div>
  </div>
    <div class="stepper-panels py-8">
      <div class="stepper-quest ">
       
        <p class="font-semibold">5. Keeps accurate record of students’ performance and prompt submission of the same.</p>
        
        <div class="buttons">
        <button @click="color = 'green'"  class="rouded-full buto20">5. Outstanding</button>
        <button  @click="color1 = 'green'" class="buto21">4. Very Satisfaction</button>
        <button  @click="color2 = 'green'" class="buto22">3. Satisfaction</button>
        <button  @click="color3 = 'green'" class="buto23">2. Fair</button>
        <button  @click="color4 = 'green'" class="buto24">1. Poor</button>
        </div>
     
        
      </div> 
      <div class=" ml-5 mt-10">
           <!--<div class="Preview">
            <a href="/Commitmentq4"><button class=" btn button-next ">Preview</button></a> 
             </div>
        --> 
          <div class="next">
            <a href="/Knowledge"><button class=" btn button-next ">Next</button></a> 
          </div>
        </div>
    </div>
    
</div>
  </div>
  </div>
</div>

  <div class="">

  </div>

</template>
<style>

.buto {
  background-color: v-bind(color);
  /* wrapped in quotes */
  font-weight: v-bind('font.weight');
}

.buto1 {
  background-color: v-bind(color1);
}
.buto2 {
  background-color: v-bind(color2);
}
.buto3 {
  background-color: v-bind(color3);
}
.buto4 {
  background-color: v-bind(color4);
}
</style>