const app = Vue.createApp({
    data() {
        return {
            // title:"You don't js",
            // author:"anonymous",
            // age:"20",
            books: [
                {
                    title: "You don't js",
                    author: "anonymous",
                    age: 20,
                    img:"img/1.jpeg",
                    isFav: true,
                },

                {
                    title: "bok1",
                    author: "anonymous",
                    age: 20,
                    img: "img/2.jpeg",
                    isFav: false,
                },

                {
                    title: "book3",
                    author: "anonymous",
                    age: 20,
                    img: "img/3.jpeg",
                    isFav: true,
                }
            ],

            showbook: true,
            link: "http://www.google.com"


        }
    },

    methods: {
        // IncreaseAge(){
        //     this.age++
        // },
        // mouseHover(event){
        //     console.log("mouse hover is working",event.type);
        // },
        // mouseleafH(event){
        //     console.log("mose leaf is working",event.type);
        // },
        // mousedouble(event){
        //     console.log("mouse douvlie working,event",event.type);
        // }
        clickHandler(book){
            book.isFav=!book.isFav

        }
    },
    computed:{
        filterBooks(){
            return this.books.filter(book=>{
                return book.isFav;
            });
        }
    }

});

app.mount('#app');