<template>
    <div class="">
        <div class="flex justify-center">
        <p class="text-lg font-semibold">Login</p>
        </div>
        <div class="flex justify-center">
    <form @submit.prevent="handleSubmit">
            <div>
                <input type="email" v-model="Admin.username" placeholder="Enter username" class="border mb-2 px-12 py-1 " required/><br/>
                <input type="password" v-model="Admin.password" placeholder="Enter Password" class="border px-12 py-1" required /> <br/>
            </div>
            <div class="flex mt-5 justify-between mx-8 ">
                <button class="border-none bg-green-400 text-center p-1 w-16">Login</button>
               <a href="signup" class="bg-green-400 p-1 rounded-md">signup</a>
            </div>
           
    </form>    
        </div>
    <!--

    -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'login',
    data(){

        return{
            Admin:{
                username:'',
                password:'',
            }
            
        }
    },
    
    methods:{
      async handleSubmit(){
            let data ={
                    username: this.Admin.username,
                    password: this.Admin.password
            }
                const response = await axios.post('http://localhost:3000/auth/local/signIn',data);
                console.log(response)
                localStorage.setItem('access_token', response.data.access_token);
                this.$router.push('/home');


        //     axios.post('http://localhost:3000/auth/local/signIn',data ).then((res)=>{
             
        //      alert('Successfully Login');
        //      console.log("Success",res.data.message);
        //          this.$router.push({path:'/home'})
            

        //  })
        
      },
            // var data = new formData();
            // data.append(this.Admin.username);
            // data.append(this.Admin.password);
           
            // .catch((err)=>{
            //     console.log("error",err)
            // })

            // alert("im working");
        }
    }

</script>