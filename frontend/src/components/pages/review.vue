<template>
<div class="flex justify-center">
  <div class="w-10/12 lg:w-8/12">
  <div><div class="steps-container">
      <ul class="steps-list">
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">1</div>
          </div>
          <div class="step-label ">Commitment</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">2</div>
          </div>
          <div class="step-label ">Knowledge of the subject matter</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">3</div>
          </div>
          <div class="step-label ">Teacher for independent learning</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">4</div>
          </div>
          <div class="step-label ">Management of Learnings</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">5</div>
          </div>
          <div class="step-label ">Comments</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step-last">
          <div class="step-bubble-active">
            <div class="count">6</div>
          </div>
          <div class="step-label">Review</div>
        </li>
      </ul>
    </div>
  </div>
  <div> <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="font-semibold">Review and Submit</div>
    </div>
      <div class="stepper-panels">
        <div class="stepper-quest">
          <p>1. Demonstrates sensitivity to student’s ability to attend and absorb content information.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          
          <p>2. Integrates sensitivity his/her learning objectives with those of the students in a collaborative way.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>3. Makes self available to students beyond official time.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>4. Regularly comes to class on time, well - groomed and well - prepared to complete assigned responsibilities.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
          <p>5. Keeps accurate record of students’ performance and prompt submission of the same.</p>
          
          <div class="buttons">
          <button class="rouded-full">5. Outstanding</button>
          <button>4. Very Satisfaction</button>
          <button>3. Satisfaction</button>
          <button>2. Fair</button>
          <button>1. Poor</button>
          </div>
        </div> 
        <div class="next">
            <a href="/Review"><button class=" btn button-next">Submit</button></a> 
          </div>
      </div>
      
  </div></div>
  </div>
</div>

    
  
   
  
  
  </template>
  <style>
  .steps-container{
    width: 90%;
    margin: 3rem;
  }
  .steps-list{
    display: flex;
    list-style: none;
  }
  .step{
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
    height: 60px;
  }
  .step-last{
    display: flex;
    align-items: center;
    max-width: 100%;
    position: relative;
    height: 60px;
  }
  .step-bubble{
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border:1px solid;
    border-color: gray;
    background-color: white;
    transition:all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .step-bubble-active{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border:1px solid;
    border-color: green;
    background-color: green;
    transition:all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .step-label{
  color: black;
  font-size: 15px;
  position: absolute;
  margin-top: 7rem;
  opacity: .3;
  }
  .step-line{
    width: 100%;
    height: 5px;
    background-color: gray;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -10;
  }
  .step-line-active{
    width: 100%;
    height: 5px;
    background-color: green;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -10;
  }
  
  
  
  .stepper-panel{
      color: #333;
      border: solid 1px;
      margin:5rem;
      border-radius: 3px;
      border-color: #c7c3c3;
      border-bottom: none;
      padding: 5px;
      
  }
  
  
  .stepper-panels{
      color: #333;
      border: solid 1px;
      margin:5rem;
      border-radius: 3px;
      border-color: #c7c3c3;
      margin-top: -5rem;
  }
  .stepper-quest{
    margin: 2rem;
    font-size: 18px;
  }
  button{
    width: 90%;
    border: solid 1px;
    border-radius: 3px;
    margin-bottom: 4px;
    text-align: left;
    padding-left: 2rem;
  }
  
  p{
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .next{
    direction: rtl;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
  button:hover{
  background-color: rgb(121, 207, 121);
}
  </style>