<template> 
    <div class="" style="width: 100%;">
        <div class="flex justify-center">
        <div class="w-10/12  lg:w-6/12 border rounded-lg mt-5 mb-5">
        <div class="flex justify-center">
        <p class="text-lg font-semibold">Login</p>
        </div>
        <div class="flex justify-center bg-green-100 ">
    <form @submit.prevent="handleSubmit">
            <div class="mt-5">
                <input type="email" v-model="Admin.username" placeholder="Enter username" class="border mb-2 px-12 py-1 " required/><br/>
                <input type="password" v-model="Admin.password" placeholder="Enter Password" class="border px-12 py-1" required /> <br/>
            </div>
            <div class="flex mt-5 justify-between mx-8 ">
                <button class="border-none bg-green-400 text-center p-1 w-16">Login</button>
               <a href="signup" class="bg-green-400 p-1 rounded-md">signup</a>
            </div> 
            <div class="">
               <div id="googleSignInBtn" class="g_id_signin" style="margin-top: 1rem; margin-left: .3rem; padding: 1rem;"></div> 
            </div>
        <!-- <GoogleLogin :callback="callback" prompt auto-login/> -->

            
    </form> 
    <div>
    </div>
   
</div>   
    </div>
    </div>
    </div>
</template>
<style>
    .google_g{
        display: inline-flex !important;
    }
</style>
<script>
import axios from 'axios'
import { decodeCredential } from 'vue3-google-login';
// import GoogleLogo from './assets/google.svg';
// import { getGoogleUrl } from '../../utils/getGoogleUrl';

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
        //     let user = localStorage.getItem('user-info');
        //     if(user){
        //     this.$router.push({name:'home'})
        // }

        },
    
    methods:{

        

        async handleCredentialResponse(response){
            let data ={
                    google_token:response.credential
            }
            // const toast = useToast();
            //  console.log(data.google_token)
            //different module
            // console.log(decodeCredential(data.google_token))

            let user = decodeCredential(data.google_token)

            let data_user ={
                        email: user.email,
                        name: user.name,
                        picture: user.picture,
                        verified: user.email_verified,
            }
            //  console.log(data_user)
            // console.log(user.email)
            const res = await axios.post('http://localhost:3000/auth/google/SignUp',data_user).then(response =>{
             console.log(response)
             localStorage.setItem('access_token',response.data.access_token);
             this.$store.dispatch('SET_USER',response.data.user)
            //   const users_data = this.$store.state.user;
            //   console.log(users_data)
            //  localStorage.setItem('name',user.name)
            //  console.log(this.$store.state.user)
            // console.log(users_data)
            //  console.log(this.$store.commit('UPDATE_USER',response.data.user))
             this.$router.push('/home');
            }); 

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
        async googleSubmit(){
            const request = await axios.get('http://localhost:3000/auth/callback')
        }

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