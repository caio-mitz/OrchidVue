<template>
  <div>
    <div class="minhas-fichas">
      <div class="criar-button" @click="$router.push({ path: '/criarficha' })">
        <PlusIcon />
        <div>CRIAR FICHA</div>
      </div>
      <div class="cards">
        <div
          class="conteudo1"
          v-for="ficha of fichas"
          :key="ficha.id"
          @click="$router.push({ name: 'ficha', params: { id: ficha.id } })"
        >
          <div class="ficha1">
            <div class="cont-1">
              <div
                class="foto1"
                :style="{ backgroundImage: 'url(' + ficha.imagem + ')' }"
              ></div>
            </div>
            <div class="cont-2">
              <div class="desc1">
                <h1 class="titulo">{{ ficha.nome }}</h1>
                <div class="det1">
                  <h1 class="det-nex-classe">NEX</h1>
                  <h1 class="det-nex-classe">CLASSE</h1>
                </div>
                <div class="det2">
                  <h1 class="detnum">{{ ficha.nex }}</h1>
                  <h1 class="detnum">{{ ficha.classe.nome }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from "vue-material-design-icons/Plus.vue";
import axios from "../plugins/axios";

export default {
  data() {
    return {
      fichas: [],
    };
  },

  components: {
    PlusIcon,
  },

  async created() {
    const { data } = await axios.get("fichas");
    this.fichas = data;
  },
};
</script>

<style scoped>
@import "@/assets/styles/minhasfichas.css";
</style>