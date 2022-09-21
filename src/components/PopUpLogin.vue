<template>
    <div v-show="mostrarmodal" class="modal-login">
        <div class="login">
        <!-- TÍTULO -->
            <div class="top-box top-box-orchid-logo">
            <router-link to="/"><img class="logo-orchid-login" src="@/assets/logo-orchid.png" alt=""></router-link>
            <form action="" class="form-login">
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
                    <hr color="#B04141">
                </div>

                <div class="top-box top-box-b-3">
                    <p>OU</p>
                </div>

                <div class="top-box top-box-c-login">
                    <hr color="#B04141">
                </div>
            </section>
        <!-- FIM DA LINHA -->

        <!-- INPUTS -->

            <section class="showcase-login-4">
                <div class="top-box top-box-a-login">
                    <input type="text" placeholder="Nome de usuário ou endereço de e-mail" name="username" class="input-register">
                </div>
            </section>

            <section class="showcase-login-5">
                <div class="top-box top-box-a-login">
                    <input type="text" placeholder="Senha" name="senha" class="input-register">
                </div>
            </section>

            <section class="showcase-login-7">

                <div class="top-box top-box-b-3">
                    <button class="create-acc-btn">Login</button>
                </div>
            </section>

            <section class="showcase-login-extra">
                <div class="top-box-a-login">
                    <a href="#" class="forgot-pass">Esqueceu sua senha?</a>
                </div>
            </section>
            
        <!-- FIM DOS INPUTS -->
        <button @click="$emit('fecharmodal')" class="fechar-botao">Fechar</button>
        </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    props: ['mostrarmodal'],
    mounted() {
        let dom = document.querySelector('html')
        const modal = document.getElementById('login')
        console.log(modal)
        dom.addEventListener('click', (e) => {
            let elementosFilhos = []
            let todosOsElementos = e.path.splice(0, e.path.length - 3)
            todosOsElementos.forEach(element => {
                element.classList.forEach(classe => {
                    if (classe == 'form-login') {
                        elementosFilhos.push(element)
                    }
                })
            })
            if (this.mostrarmodal == true && e.target != document.querySelector('#abrir-login') && e.target != document.querySelector('#abrir-login1')) {
                if (elementosFilhos.length == 0) {
                    console.log('fechando!!')
                    this.$emit('fecharmodal')

                }
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>