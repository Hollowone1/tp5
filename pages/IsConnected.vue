<template>
  <div>
    <h1>{{ user }}</h1>
    <p>Vous êtes connecté</p>
    <p>Vous pouvez vous déconnecter en cliquant sur le bouton ci-dessous</p>
    <button type="submit" @click="logout"> Se déconnecter</button>
  </div>
</template>

<script setup>



const router = useRouter();




definePageMeta({
  middleware(to, from) {
    function getUser() {
      return localStorage.getItem('user')
    }
    // Récupérer l'utilisateur connecté du localStorage
    const user = getUser()

    if (!user) {
      return navigateTo('/');
    }
  }
});

function logout() {
  localStorage.removeItem('user');
  router.push('/');
}
</script>

<style>
h1 {
  color: #28b463;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 2rem 0;
}

button {
  background-color: #28b463;
  color: antiquewhite;
  padding: 10px;
  border-radius: 5px;
}
</style>