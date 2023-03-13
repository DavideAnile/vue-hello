/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.



Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/



const { createApp } = Vue

  createApp({
    data() {
      return {
        
        title : " primo messaggio scritto con VUE.js ",
        titleClass : "red",
        buttonTitle: "CAMBIA COLORE",
        buttonImg : "CAMBIA IMMAGINE",
        imgSrc: "https://www.creativefabrica.com/wp-content/uploads/2020/09/23/WELCOME-Graphics-5632158-1.jpg"
      }
    },

    methods: {

     changeColor: function changeColor(){

        if(this.titleClass == "red"){

            
            this.titleClass = "blue"
        } else {

            
            this.titleClass = "red"
            
        }
    },


    changeImg : function changeImg(){

        if(this.imgSrc == "https://www.creativefabrica.com/wp-content/uploads/2020/09/23/WELCOME-Graphics-5632158-1.jpg"){

        this.imgSrc = "https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg"

        } else {

        this.imgSrc = "https://www.creativefabrica.com/wp-content/uploads/2020/09/23/WELCOME-Graphics-5632158-1.jpg"

        }
    }
            
            


    }

  }).mount('#app')