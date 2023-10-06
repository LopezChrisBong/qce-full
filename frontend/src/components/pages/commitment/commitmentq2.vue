<script>
import Steppercom from '../Stepper/steppercom.vue';
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
 }
}
</script>
<template>
<div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div>
    <div class="steps-container" >
      <Steppercom />
    </div>
  </div>
  <div style="margin-top: 7rem;">
    <div class="quest1" >Question 1</div>
    <div class="quest1" style="position: relative; border-right: none; background-color: white; ">Question 2</div>
    <div class="quest1">Question 3</div>
    <div class="quest1">Question 4</div>
    <div class="quest1">Question 5</div>
  </div>

<div  style="margin-top:-25.3rem; margin-left: 2.8rem;">
  <div class="stepper-panel">
    
    <div class=" font-semibold">A. Commitment</div>
  </div>
    <div class="stepper-panels" style="background-color: #fff;">
     
      <div class="stepper-quest ">
        <p class="font-semibold">2. Integrates sensitivity his/her learning objectives with those of the students in a collaborative way.</p>
        <div class="buttons">

        <button @click="color = 'green'"  class="rouded-full buto">5. Outstanding</button>
        <button @click="color1 = 'green'" class="buto1">4. Very Satisfaction</button>
        <button @click="color2 = 'green'" class="buto2"> 3. Satisfaction</button>
        <button @click="color3 = 'green'" class="buto3">2. Fair</button>
        <button @click="color4 = 'green'" class="buto4">1. Poor</button>
        </div>
      
      </div> 
        <div class="next">
         <a href="/Commitmentq3"><button class=" btn button-next ">Next</button></a> 
        </div>
    </div>
  </div>
</div>
  
  </div>

</template>
<style>
.quest1{
  width: 8rem; 
  padding: 1rem;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 15px;
  background-color: rgb(141, 255, 141);
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  
}

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