<template>
  <div>
    <div class="tudo">
      <header class="top-header">
        <nav class="main-nav">
          <ul>
            <div class="junta">
              <section class="logo">
                <li>
                  <router-link to="/"
                    ><img src="@/assets/logo-orchid.png" alt=""
                  /></router-link>
                </li>
              </section>
              <section class="main-left">
                <li>
                  <a class="link" href="#">Fichas</a>
                  <linha>|</linha>
                  <router-link class="link" to="/equipes">Equipes</router-link>
                </li>
              </section>
            </div>
            <section class="main-right">
              <li class="botaologin" v-if="!loggedIn">
                <div
                  class="link"
                  @click="mostrarmodalLogin = true"
                  id="abrir-login1"
                >
                  Login
                </div>
                <linha>|</linha>
                <div
                  class="link createacc"
                  @click="mostrarmodal = true"
                  id="abrir-cadastro1"
                >
                  Criar conta
                </div>
              </li>
              <li v-else class="botaologin" style="color: white">
                Olá, {nomedeUsuario}
              </li>
            </section>
          </ul>
        </nav>
      </header>
    </div>
    <PopUp :mostrarmodal="mostrarmodal" @fecharmodal="mostrarmodal = false" />
    <PopUpLogin
      :mostrarmodalLogin="mostrarmodalLogin"
      @fecharmodal="mostrarmodalLogin = false"
    />
  </div>
</template>

<script>
import PopUp from "@/components/PopUp.vue";
import PopUpLogin from "@/components/PopUpLogin.vue";
import { mapState } from "vuex";

export default {
  components: {
    PopUp,
    PopUpLogin,
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  data() {
    return {
      mostrarmodal: false,
      mostrarmodalLogin: false,
    };
  },
};
</script>

<style scoped>
.linha {
  margin-top: 15px;
}
.botaologin {
  display: flex;
}

.botaologin .link {
  cursor: pointer;
}

.tudo {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

.top-header {
  display: flex;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
  background-color: #0c0e10;
  width: 100%;
}

.main-nav {
  display: flex;
  width: 100%;
}

.logo {
  grid-area: logo;
  margin-left: 2rem;
}

.logo li a {
  display: flex;
  justify-content: left;
  height: 100px;
}

.main-left {
  align-items: center;
}

/* .main-left .box-a {
    margin-right: 500px;
} */

.main-right {
  align-items: center;
}

.main-nav .main-left {
  display: flex;
  justify-content: left;
  align-items: center;
  list-style: none;
}

.main-nav .main-right {
  display: flex;
  justify-content: right;
  align-items: center;
  list-style: none;
}

.main-nav ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  list-style: none;
  /* grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-template-areas: 
        'logo main-left main-right'; */
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
}

.main-nav ul:last-child {
  margin-right: 50px;
}

.main-nav .junta {
  display: flex;
}

.main-nav .link {
  color: #b04141;
  text-decoration: none;
  padding: 0.8rem;
  font-size: 20px;
  font-weight: bold;
}
</style>