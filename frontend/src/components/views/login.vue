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
    <div id="googleSignInBtn" class="g_id_signin"></div>
        </div>
    <!--

    -->
    </div>
</template>
<style>
    .google_g{
        display: inline-flex !important;
    }
</style>
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
    mounted(){
            window.addEventListener("resize", this.widthResizeHandler);
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENTID,
                callback:this.handleCredentialResponse,
            })

        },
    
    methods:{

        

        async handleCredentialResponse(response){
            let data ={
                    google_token:response.credential
            }
            // const toast = useToast();
            // console.log(response.credential)
            //different module
             const cred = await axios.post('http://localhost:3000/auth/google/login',data); 
             console.log(cred)
            //  localStorage.setItem('access_token',cred.data.access_token);
            //  console.log(cred.data.access_token)
             this.$router.push('/home');
        },

        async handleSubmit(){
            let data ={
                    username: this.Admin.username,
                    password: this.Admin.password
            }
         
                const response = await axios.post('http://localhost:3000/auth/local/signIn', data)
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
        },
        
       
    }

</script>