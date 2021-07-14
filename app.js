const app=Vue.createApp({
    data(){
        return{
            title:"You don't js",
            author:"anonymous",
            age:"20"

        }
    },

    methods:{
        IncreaseAge(){
            // this.age++
        }
    }
   
});

app.mount('#app');