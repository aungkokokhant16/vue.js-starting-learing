const app=Vue.createApp({
    data(){
        return{
            title:"You don't js",
            author:"anonymous",
            age:"20",
            showbook:true,


        }
    },

    methods:{
        IncreaseAge(){
            this.age++
        },
        mouseHover(event){
            console.log("mouse hover is working",event.type);
        },
        mouseleafH(event){
            console.log("mose leaf is working",event.type);
        },
        mousedouble(event){
            console.log("mouse douvlie working,event",event.type);
        }
    }
   
});

app.mount('#app');