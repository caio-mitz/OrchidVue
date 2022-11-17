<template>
  <div v-show="mostrarmodalLogin" class="modal-login">
    <div class="login">
      <div class="fundo-login">
        <!-- TÍTULO -->
        <div class="top-box top-box-orchid-logo">
          <router-link to="/"
            ><img
              class="logo-orchid-login"
              src="@/assets/logo-orchid.png"
              alt=""
          /></router-link>
          <form action="" class="form-login" id="login">
            <section class="showcase-login-1">
              <div class="top-box top-box-a-login">
                <h1>LOGIN</h1>
              </div>

              <div class="top-box top-box-b-3">
                <button class="google-btn">Entre com Google</button>
              </div>
            </section>
            <!-- FIM DO TÍTULO -->

            <!-- LINHA -->
            <section class="showcase-login-2">
              <div class="top-box top-box-a-login">
                <hr color="#B04141" />
              </div>

              <div class="top-box top-box-b-3">
                <p>OU</p>
              </div>

              <div class="top-box top-box-c-login">
                <hr color="#B04141" />
              </div>
            </section>
            <!-- FIM DA LINHA -->

            <!-- INPUTS -->

            <section class="showcase-login-4">
              <div class="top-box top-box-a-login">
                <input
                  v-model="usuario.username"
                  style="color: white"
                  type="text"
                  placeholder="Nome de usuário ou endereço de e-mail"
                  name="username"
                  class="input-register"
                />
              </div>
            </section>

            <section class="showcase-login-5">
              <div class="top-box top-box-a-login">
                <input
                  v-model="usuario.password"
                  style="color: white"
                  type="password"
                  placeholder="Senha"
                  name="senha"
                  class="input-register"
                />
              </div>
            </section>

            <section class="showcase-login-7">
              <div class="top-box top-box-b-3">
                <button
                  class="create-acc-btn"
                  @click.stop.prevent="submitLogin"
                >
                  Login
                </button>
              </div>
            </section>

            <section class="showcase-login-extra">
              <div class="top-box-a-login">
                <a href="#" class="forgot-pass">Esqueceu sua senha?</a>
              </div>
            </section>

            <!-- FIM DOS INPUTS -->
            <button @click="$emit('fecharmodal')" class="fechar-botao">
              Fechar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["mostrarmodalLogin"],
  mounted() {
    let dom = document.querySelector("html");
    const modal = document.getElementById("login");
    console.log(modal);
    dom.addEventListener("click", (e) => {
      let elementosFilhos = [];
      let todosOsElementos = e.path.splice(0, e.path.length - 3);
      todosOsElementos.forEach((element) => {
        element.classList.forEach((classe) => {
          if (classe == "form-login") {
            elementosFilhos.push(element);
          }
        });
      });
      if (
        this.mostrarmodalLogin == true &&
        e.target != document.querySelector("#abrir-login1")
      ) {
        if (elementosFilhos.length == 0) {
          console.log("fechando login!!");
          this.$emit("fecharmodal");
        }
      }
    });
  },
  data() {
    return {
      usuario: {},
    };
  },
  methods: {
    ...mapActions("auth", ["login", "getUsuario"]),
    async submitLogin() {
      await this.login(this.usuario);
      this.$emit("fecharmodal");
    },
  },
};
</script>

<style>
.modal-login {
  position: absolute;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fundo-login {
  backdrop-filter: blur(10 px);
  background-color: rgba(0, 0, 0, 0.7);
  height: 100rem;
  width: 500rem;
  padding-top: 200px;
  position: fixed;
}

.logo-orchid-login {
  display: grid;
  width: 280px;
  margin-top: 600px;
  margin-left: 2000px;
  z-index: 1;
}

.login {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  background: linear-gradient(#0c0e10, #24282e);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-top: 1000px;
  margin-bottom: 750px;
}

:root {
  --primary: #24282e;
  --secondary: #0c0e10;
  --light: #ffffff;
  --red: #b04141;
  --shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

* {
  margin: 0;
  padding: 0;
}
/* FORM */

.form-login {
  /* margin: 10rem auto; */
  border: solid #b04141;
  background: linear-gradient(#0c0e10, #24282e);
  border-width: 1px;
  padding: 2rem;
  width: 0rem;
  height: 0rem;
  display: grid;
  justify-content: center;
  z-index: 1;
  margin-left: 2000px;
  margin-top: 1200px;
  position: fixed;
  color: white;
}

.top-box-a-login {
  grid-area: top-box-a-login;
}

.top-box-b-3 {
  grid-area: top-box-b-3;
}

.top-box-c-login {
  grid-area: top-box-c-login;
}

.input-register {
  border: solid 1px var(--red);
  background-color: var(--primary);
  height: 40px;
}

.showcase-login-1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "top-box-a-login"
    "top-box-b-3";
}

.showcase-login-1 h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
  color: #ffffff;
}

.showcase-login-1 .google-btn {
  background-color: var(--primary);
  color: var(--light);
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: solid 1px;
  border-color: var(--red);
  width: 200px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
}

.showcase-login-1 .top-box-b-3 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-login-2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "top-box-a-login top-box-b-3 top-box-c-login";
}

.showcase-login-2 .top-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.showcase-login-2 .top-box-a-login {
  display: flex;
  align-items: center;
}

.showcase-login-2 .top-box-a-login hr {
  display: flex;
  align-items: center;
  width: 250px;
}

.showcase-login-2 .top-box-b-3 p {
  color: var(--red);
  font-weight: bold;
}

.showcase-login-2 .top-box-b-3 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-login-2 .top-box-c-login {
  display: flex;
  align-items: center;
}

.showcase-login-2 .top-box-c-login hr {
  display: flex;
  align-items: center;
  width: 250px;
}

.showcase-login-3 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "top-box-a-login top-box-b-3";
}

.showcase-login-3 .top-box {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
}

.showcase-login-3 .top-box-b-3 {
  display: flex;
  align-items: center;
  justify-content: right;
}

.showcase-login-3 .top-box-a-login {
  display: flex;
  align-items: center;
  justify-content: left;
}

.showcase-login-3 .top-box-a-login input {
  width: 383px;
}

.showcase-login-3 .top-box-b-3 input {
  width: 383px;
}

.showcase-login-4 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "top-box-a-login";
  height: 40px;
}

.showcase-login-4 .top-box {
  display: flex;
  align-items: center;
}

.showcase-login-4 .top-box-a-login input {
  width: 780px;
}

.showcase-login-5 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "top-box-a-login";
  height: 40px;
}

.showcase-login-5 .top-box {
  display: flex;
  align-items: center;
}

.showcase-login-5 .top-box-a-login input {
  width: 780px;
}

.showcase-login-6 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "top-box-a-login";
}

.showcase-login-6 .top-box {
  display: flex;
  align-items: center;
}

.showcase-login-6 .top-box-a-login input {
  width: 780px;
}

.showcase-login-7 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "top-box-b-3";
  height: 40px;
}

.showcase-login-7 .top-box {
  display: flex;
  align-items: center;
}

.showcase-login-7 .top-box-b-3 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-login-7 .top-box-a-login {
  display: flex;
  align-items: center;
  justify-content: left;
}

.showcase-login-7 .top-box-a-login input {
  width: 383px;
}

.showcase-login-7 .top-box-b-3 .create-acc-btn {
  background-color: var(--red);
  color: var(--light);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  border: 2px;
  width: 383px;
  height: 40px;
}

.showcase-login-extra {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "top-box-a-login";
}

.top-box-a-login .forgot-pass {
  text-decoration: none;
  color: var(--red);
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 20px;
}

.top-box-a-login .forgot-pass:hover {
  text-decoration: underline;
}
</style>