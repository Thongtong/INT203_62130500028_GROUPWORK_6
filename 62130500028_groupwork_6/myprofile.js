const constraints = {
    username: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
          }
    },
    password: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
          }
    
    },
    email: {
        presence: true,
        email: true
    },
    confirmPassword: {
        equality: "password"
      }
}

const app = {
    data() {
        return {    
            username: null,
            password: null,
            confirmPassword:null,
            email:null,
            errors: null,
            firstname: 'Thongtong',
            lastname: 'Tangsiripaisan',
            status: 'second years IT Student KMUTT ',
            img : 'images/user.jpg',
        
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({username: this.username,
                                    password: this.password,
                                    email:this.email,
                                    confirmPassword:this.confirmPassword
                                    },
                                    constraints)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
}

var mountedApp = Vue.createApp(app).mount('#app')
