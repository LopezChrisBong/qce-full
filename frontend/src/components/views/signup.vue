<template>
    <div class="">
        <div class="flex justify-center">
        <p class="text-lg font-semibold">Sign Up</p>
        </div>
        <div class="flex justify-center">
        <form >
            <div>
                <input type="text" v-model="model.user.name" placeholder="Enter Name"  class="border mb-2 px-12 py-1" required/><br/>
                <input type="email"  placeholder="Enter Username" class="border mb-2 px-12 py-1" v-model="model.user.username" :rules="[rules.required, rules.email]"/> <br/>
                <input type="password"  placeholder="Enter Password" class="border px-12 py-1" v-model="model.user.password" /> <br/>
            </div>
            <div class="flex justify-center" >
            <button type="button" class="bg-green-600 "  @click="saveUser">Save</button>
        </div>
            <div class="flex mt-5 justify-between mx-8 ">
                <a href="/" class="bg-green-400 p-1 rounded-md">Log In</a>

               <a href="signup" class="bg-green-400 p-1 rounded-md">signup</a>
            </div>
           
 </form>    
        </div>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
    export default{
        name: 'addUser',
        data(){
            return{
                model:{
                    user:{
                        name:'',
                        username:'',
                        password:'',
                    }                                                                  
                },
                rules:{
          required: value => !! value  || "This field is required",
          email: v => /.+@.+\..+/.test(v) || "Must be a valid email"
        }, 
            }
        }, 
        methods:{
            saveUser(){

                if((this.model.user.username === "" || this.model.user.password  === "") ){
                    alert('Plese fill-up all fields');
                }
                else{
                    
             
                
                axios.post('http://localhost:3000/auth/local/signUp',this.model.user).then(response =>{
                    if(response.status == 201){
                    alert('successfully added')
                    router.push({path:'/'})
                }
                else if(response.status == 400){
                    console.log(error)
                }
                } ).catch(error => console.log(error))  
             }
              
            },
        }
    }
</script>