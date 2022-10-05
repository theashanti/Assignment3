Vue.createApp({
    data() {
        return {
            message: "",
            times:0,
            outputMessage: "",
            error: "Must be non-negative number:",
        }
    },
    methods: {
        repeat(){
            if(this.times >= 0){
                this.outputMessage = this.message.repeat(this.times);
            }
            else {
                this.outputMessage = this.error + this.times;
            }
        }
    }
}).mount("#app")