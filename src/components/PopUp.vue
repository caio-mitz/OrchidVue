<template>
  <div v-show="mostrarmodal" class="modal-cadastro">
    <div class="cadastro">
    <div class="top-box top-box-orchid-logo">
        <router-link to="/"><img class="logo-orchid-cadastro" src="@/assets/logo-orchid.png" alt=""></router-link>
    <form action="" class="form-cadastro">

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
            <input type="text" placeholder="Confirme sua senha" name="senha-1" class="input-register">
        </div>

        <div class="top-box top-box-b-cadastro">
            <button class="create-acc-btn">Criar conta</button>
        </div>
    </section>
</form>
</div>
  <button @click="$emit('fecharmodal')">button</button>
  </div>
</div>
</template>

<script>
export default {
    props: ['mostrarmodal'],
}
</script>

<style>

.modal-cadastro {
    position: absolute;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>