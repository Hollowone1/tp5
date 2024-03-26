<template>
    <div class="box">
      <form @submit.prevent="login">
        <h1> Login</h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="email" type="email" class="input" required>
          </div>
        </div>
  
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input v-model="password" type="password" class="input" required>
          </div>
        </div>
  
        <div class="field">
          <div class="control">
            <button type="submit" class="button-green" :class="{ 'is-loading': isLoading }" :disabled="isLoading">
              Se connecter
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isLoading: false
      }
    },
    methods: {
      async login() {
        this.isLoading = true
        try {
          this.$store.commit('auth/setUser', { email: this.email })
          this.$router.push('/')
        } catch (error) {
          console.error(error)
        } finally {
          this.isLoading = false
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #f2f2f2;
}

form {
  width: 50%;
  height: 50%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin-left: 12px;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px;
  width: 100%;
  font-size: 16px;
  color: #333;
}

button[type="submit"] {
  background-color: #28b463;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 40px;
}

button[type="submit"]:hover {
  background-color: #1c8d46;
}

h1{
    color: #28b463;
    margin-bottom: 40px;
}

  </style>