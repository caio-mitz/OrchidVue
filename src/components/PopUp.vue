<template>
    <div v-show="mostrarmodal" class="modal-cadastro">
        <div class="cadastro">
            <div class="fundo">
                <div class="top-box top-box-orchid-logo">
                    <router-link to="/"><img class="logo-orchid-cadastro" src="@/assets/logo-orchid.png" alt="">
                    </router-link>
                    <form action="" class="form-cadastro" id="cadastro">

                        <!-- TÍTULO -->
                        <section class="showcase-cadastro-1">
                            <div class="top-box top-box-a-cadastro">
                                <h1>CADASTRE-SE GRATUITAMENTE</h1>
                            </div>

                            <div class="top-box top-box-b-cadastro">
                                <button class="google-btn">Cadastre-se com Google</button>
                            </div>
                        </section>
                        <!-- FIM DO TÍTULO -->

                        <!-- LINHA -->
                        <section class="showcase-cadastro-2">
                            <div class="top-box top-box-a-cadastro">
                                <hr color="#B04141">
                            </div>

                            <div class="top-box top-box-b-cadastro">
                                <p>OU</p>
                            </div>

                            <div class="top-box top-box-c-cadastro">
                                <hr color="#B04141">
                            </div>
                        </section>
                        <!-- FIM DA LINHA -->

                        <!-- INPUTS -->
                        <section class="showcase-cadastro-3">
                            <div class="top-box top-box-a-cadastro">
                                <input type="text" placeholder="Nome" name="nome" class="input-register">
                            </div>

                            <div class="top-box top-box-b-cadastro">
                                <input type="text" placeholder="Sobrenome" name="sobrenome" class="input-register">
                            </div>
                        </section>

                        <section class="showcase-cadastro-4">
                            <div class="top-box top-box-a-cadastro">
                                <input type="text" placeholder="Nome de usuário" name="username" class="input-register">
                            </div>
                        </section>

                        <section class="showcase-cadastro-5">
                            <div class="top-box top-box-a-cadastro">
                                <input type="text" placeholder="Endereço de e-mail" name="email" class="input-register">
                            </div>
                        </section>

                        <section class="showcase-cadastro-6">
                            <div class="top-box top-box-a-cadastro">
                                <input type="text" placeholder="Crie sua senha" name="senha-1" class="input-register">
                            </div>
                        </section>

                        <section class="showcase-cadastro-7">
                            <div class="top-box top-box-a-cadastro">
                                <input type="text" placeholder="Confirme sua senha" name="senha-1"
                                    class="input-register">
                            </div>

                            <div class="top-box top-box-b-cadastro">
                                <button class="create-acc-btn">Criar conta</button>
                            </div>
                        </section>
                        <button @click="$emit('fecharmodal')" class="fechar-botao">Fechar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['mostrarmodal'],
    mounted() {
        let dom = document.querySelector('html')
        const modal = document.getElementById('cadastro')
        console.log(modal)
        dom.addEventListener('click', (e) => {
            let elementosFilhos = []
            let todosOsElementos = e.path.splice(0, e.path.length - 3)
            todosOsElementos.forEach(element => {
                element.classList.forEach(classe => {
                    if (classe == 'form-cadastro') {
                        elementosFilhos.push(element)
                    }
                })
            })
            if (this.mostrarmodal == true && e.target != document.querySelector('#abrir-cadastro') && e.target != document.querySelector('#abrir-cadastro1')) {
                if (elementosFilhos.length == 0) {
                    console.log('fechando!!')
                    this.$emit('fecharmodal')

                }
            }
        })
    }
}
</script>

<style>
.fechar-botao {
    color: #B04141;
    text-decoration: none;
    padding: 0.8rem;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: none;
    border: none;
    width: 100px;
    height: 10px;
}

.fundo {
    /* backdrop-filter: blur(10 px); */
    background-color: rgba(0, 0, 0, 0.7);
    height: 100rem;
    width: 500rem;
    padding-top: 200px;
}

.modal-cadastro {
    position: absolute;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;

}

.top-box-orchid-logo {
    z-index: 1;
    /* backdrop-filter: blur(10px); */

}

.cadastro {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    /* background: linear-gradient(#0c0e10, #24282E); */
    width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-areas:
        'logo-orchid-cadastro'
        'form-cadastro';
    position: fixed;
    z-index: 1;
    z-index: 1;
}

.logo-orchid-cadastro {
    display: grid;
    width: 280px;
    margin-left: 2000px;
    margin-bottom: 200px;
}

.form-cadastro {
    border: solid #B04141;
    border-width: 1px;
    padding: 2rem;
    width: 50rem;
    height: 30rem;
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0;
    background: linear-gradient(#0c0e10, #24282E);
    z-index: 1;
    margin-left: 2000px;
    margin-top: 500px;
    position: fixed;
}


.top-box-a-cadastro {
    grid-area: top-box-a-cadastro;
}

.top-box-b-cadastro {
    grid-area: top-box-b-cadastro;
}

.top-box-c-cadastro {
    grid-area: top-box-c-cadastro;
}

.input-register {
    border: solid 1px var(--red);
    background-color: var(--primary);
    height: 40px;
}

.showcase-cadastro-1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'top-box-a-cadastro'
        'top-box-b-cadastro';
}

.showcase-cadastro-1 h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    color: #fff
}

.showcase-cadastro-1 .google-btn {
    background-color: var(--primary);
    color: var(--light);
    padding: 0.6rem 1.3rem;
    margin-top: 10px;
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
    cursor: pointer;
}

.showcase-cadastro-1 .top-box-b-cadastro {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-cadastro-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        'top-box-a-cadastro top-box-b-cadastro top-box-c-cadastro';
}

.showcase-cadastro-2 .top-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.showcase-cadastro-2 .top-box-a-cadastro {
    display: flex;
    align-items: center;
}

.showcase-cadastro-2 .top-box-a-cadastro hr {
    display: flex;
    align-items: center;
    width: 250px;
}

.showcase-cadastro-2 .top-box-b-cadastro p {
    color: var(--red);
    font-weight: bold;
}

.showcase-cadastro-2 .top-box-b-cadastro {
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-cadastro-2 .top-box-c-cadastro {
    display: flex;
    align-items: center;
}

.showcase-cadastro-2 .top-box-c-cadastro hr {
    display: flex;
    align-items: center;
    width: 250px;
}

.showcase-cadastro-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        'top-box-a-cadastro top-box-b-cadastro';
    /* height: 40px; */
}

.showcase-cadastro-3 .top-box {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
}

.showcase-cadastro-3 .top-box-b-cadastro {
    display: flex;
    align-items: center;
    justify-content: right;
}

.showcase-cadastro-3 .top-box-a-cadastro {
    display: flex;
    align-items: center;
    justify-content: left;
}

.showcase-cadastro-3 .top-box-a-cadastro input {
    width: 383px;
}

.showcase-cadastro-3 .top-box-b-cadastro input {
    width: 383px;
}

.showcase-cadastro-4 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'top-box-a-cadastro';
}

.showcase-cadastro-4 .top-box {
    display: flex;
    align-items: center;
}

.showcase-cadastro-4 .top-box-a-cadastro input {
    width: 780px;
}

.showcase-cadastro-5 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'top-box-a-cadastro';
}

.showcase-cadastro-5 .top-box {
    display: flex;
    align-items: center;
}

.showcase-cadastro-5 .top-box-a-cadastro input {
    width: 780px;
}

.showcase-cadastro-6 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'top-box-a-cadastro';
}

.showcase-cadastro-6 .top-box {
    display: flex;
    align-items: center;
}

.showcase-cadastro-6 .top-box-a-cadastro input {
    width: 780px;
}

.showcase-cadastro-7 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        'top-box-a-cadastro top-box-a-cadastro top-box-b-cadastro';
}

.showcase-cadastro-7 .top-box {
    display: flex;
    align-items: center;
}

.showcase-cadastro-7 .top-box-b-cadastro {
    display: flex;
    align-items: center;
    justify-content: right;
}

.showcase-cadastro-7 .top-box-a-cadastro {
    display: flex;
    align-items: center;
    justify-content: left;
}


.showcase-cadastro-7 .top-box-a-cadastro input {
    width: 383px;
}

.showcase-cadastro-7 .top-box-b-cadastro .create-acc-btn {
    background-color: var(--red);
    color: var(--light);
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    border: 2px;
    width: 383px;
    height: 40px;
    cursor: pointer;
}
</style>