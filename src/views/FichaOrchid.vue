<template>
  <div class="ficha-orchid">
    <section class="info-1">
      <!-- FOTO DO PERSONAGEM -->
      <div class="pos-foto">
        <div
          class="top-box foto-pers"
          :style="{ backgroundImage: 'url(' + ficha.imagem + ')' }"
        >
          <!-- FOTO DO PERSONAGEM -->
        </div>
      </div>
      <!-- FIM DA FOTO DO PERSONAGEM -->

      <section class="sub-info-1">
        <!-- INPUTS DOS STATS EM NÚMEROS -->
        <div class="top-box nex-pers">
          <!-- INPUT NEX DO PERSONAGEM -->
          <h1>NEX</h1>
          <input
            type="number"
            class="input-nex"
            min="0"
            max="99"
            disabled
            :value="ficha.nex"
          />
        </div>
        <div class="top-box perodada-pers">
          <!-- INPUT PE DO PERSONAGEM -->
          <h1>PE/RODADA</h1>
          <input type="number" class="input-perodada" min="0" />
        </div>
        <div class="top-box desl-pers">
          <!-- INPUT DESLOCAMENTO DO PERSONAGEM -->
          <h1>DESL.</h1>
          <input type="number" class="input-deslocamento" min="0" />
        </div>
        <div class="top-box quad-pers">
          <h1>QUAD.</h1>
          <input type="number" class="input-quadrados" min="0" />
          <!-- INPUT QUADRADOS DO PERSONAGEM -->
        </div>
        <div class="top-box pvtotal-pers">
          <h1>PV TOTAL</h1>
          <input type="number" class="input-pvtotal" min="0" />
          <!-- INPUT PV TOTAL DO PERSONAGEM -->
        </div>
        <div class="top-box pvatual-pers">
          <h1>PV ATUAL</h1>
          <input type="number" class="input-pvatual" min="0" />
          <!-- INPUT PV ATUAL DO PERSONAGEM -->
        </div>
        <div class="top-box santotal-pers">
          <h1>SAN TOTAL</h1>
          <input
            type="number"
            class="input-santotal"
            min="0"
            disabled
            :value="ficha.sani_max"
          />
          <!-- INPUT SAN TOTAL DO PERSONAGEM -->
        </div>
        <div class="top-box sanatual-pers">
          <h1>SAN ATUAL</h1>
          <input
            type="number"
            class="input-sanatual"
            min="0"
            disabled
            :value="ficha.sani_atu"
          />
          <!-- INPUT SAN ATUAL DO PERSONAGEM -->
        </div>
        <div class="top-box petotal-pers">
          <h1>PE TOTAL</h1>
          <input type="number" class="input-petotal" min="0" />
          <!-- INPUT PE TOTAL DO PERSONAGEM -->
        </div>
        <div class="top-box peatual-pers">
          <h1>PE ATUAL</h1>
          <input type="number" class="input-peatual" min="0" />
          <!-- INPUT PE ATUAL DO PERSONAGEM -->
        </div>
        <!-- FIM DOS INPUTS DOS STATS EM NÚMEROS -->
      </section>
    </section>

    <section class="info-2">
      <section class="sub-info-2">
        <!-- INPUTS INICIAIS -->
        <div class="top-box nome-pers">
          <h1>NOME DO PERSONAGEM:</h1>
          <input type="text" class="input-nome" :value="ficha.nome" disabled />
        </div>
        <div class="top-box classe-pers">
          <h1>CLASSE DO PERSONAGEM:</h1>
          <input
            type="text"
            class="input-classe"
            disabled
            :value="ficha.classe.nome"
          />
        </div>
        <div class="top-box jogador-pers">
          <h1>NOME DO JOGADOR:</h1>
          <input
            type="text"
            class="input-jogador"
            disabled
            :value="ficha.usuario.username"
          />
        </div>
        <div class="top-box origem-pers">
          <h1>ORIGEM DO PERSONAGEM:</h1>
          <input
            type="text"
            class="input-origem"
            disabled
            :value="ficha.origem.nome"
          />
        </div>
        <!-- FIM DOS INPUTS INICIAIS -->

        <!-- CAIXAS DE INFORMAÇÕES -->
        <div class="itens-pers">
          <h1 class="tit-caixas">ITENS</h1>
          <input class="input-itens" type="text" />
        </div>
        <div class="proef-pers">
          <h1 class="tit-caixas">PROEFICIÊNCIAS</h1>
          <input
            class="input-proef"
            type="text"
            :value="textoProfi()"
            disabled
          />
        </div>
        <div class="habil-pers">
          <h1 class="tit-caixas">HABILIDADES E RITUAIS</h1>
          <input
            class="input-habil"
            type="text"
            disabled
            :value="textoHabilidades()"
          />
        </div>

        <!-- CAIXAS DE INFORMAÇÕES -->
        <!-- HEXÁGONOS -->

        <div class="hex1">
          <h1>FOR</h1>
          <div class="hex1-pers">
            <input
              type="number"
              min="0"
              max="5"
              disabled
              :value="ficha.forca"
            />
          </div>
        </div>

        <div class="hex2">
          <h1>AGI</h1>
          <div class="hex2-pers">
            <input
              type="number"
              min="0"
              max="5"
              disabled
              :value="ficha.agili"
            />
          </div>
        </div>

        <div class="hex3">
          <h1>INT</h1>
          <div class="hex3-pers">
            <input
              type="number"
              min="0"
              max="5"
              disabled
              :value="ficha.intel"
            />
          </div>
        </div>

        <div class="hex4">
          <h1>VIG</h1>
          <div class="hex4-pers">
            <input
              type="number"
              min="0"
              max="5"
              disabled
              :value="ficha.vigor"
            />
          </div>
        </div>

        <div class="hex5">
          <h1>PRE</h1>
          <div class="hex5-pers">
            <input
              type="number"
              min="0"
              max="5"
              disabled
              :value="ficha.prese"
            />
          </div>
        </div>
      </section>
    </section>

    <section class="info-3">
      <section class="sub-info-3">
        <div class="pericias-pers">
          <div class="tabela">
            <div class="tit-pericia">
              <h1>PERÍCIAS</h1>
            </div>
            <div class="tit-agilidade">
              <h1>AGILIDADE:</h1>
            </div>
            <div class="lista-agilidade">
              <ul class="ul-1">
                <li class="a1">ACROBACIA</li>
                <li class="a2">CRIME</li>
                <li class="a3">FURTIVIDADE</li>
                <li class="a4">INICIATIVA</li>
                <li class="a5">PILOTAGEM</li>
                <li class="a6">PONTARIA</li>
                <li class="a7">REFLEXOS</li>
              </ul>
              <ul class="ul-2">
                <li class="q1">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q2">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q3">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q4">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q5">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q6">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q7">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
              </ul>
            </div>
            <div class="tit-forca">
              <h1>FORÇA:</h1>
            </div>
            <div class="lista-forca">
              <ul class="ul-1">
                <li class="a1">ATLETISMO</li>
                <li class="a2">LUTA</li>
              </ul>
              <ul>
                <li class="q1"></li>
                <li class="q2"></li>
              </ul>
            </div>
            <div class="tit-inteligencia">
              <h1>INTELIGÊNCIA:</h1>
            </div>
            <div class="lista-inteligencia">
              <ul class="ul-1">
                <li class="a1">ATUALIDADES</li>
                <li class="a2">CIÊNCIAS</li>
                <li class="a3">INTUIÇÃO</li>
                <li class="a4">INVESTIGAÇÃO</li>
                <li class="a5">MEDICINA</li>
                <li class="a6">OCULTISMO</li>
                <li class="a7">PROFISSÃO</li>
                <li class="a8">SOBREVIVÊNCIA</li>
                <li class="a9">TÁTICA</li>
                <li class="a10">TECNOLOGIA</li>
              </ul>
              <ul>
                <li class="q1">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q2">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q3">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q4">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q5">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q6">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q7">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q8">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q9">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q10">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
              </ul>
            </div>
            <div class="tit-presenca">
              <h1>PRESENÇA:</h1>
            </div>
            <div class="lista-presenca">
              <ul class="ul-1">
                <li class="a1">ADESTRAMENTO</li>
                <li class="a2">ARTES</li>
                <li class="a3">DIPLOMACIA</li>
                <li class="a4">ENGANAÇÃO</li>
                <li class="a5">INTIMIDAÇÃO</li>
                <li class="a6">PERCEPÇÃO</li>
                <li class="a7">RELIGIÃO</li>
                <li class="a8">VONTADE</li>
              </ul>
              <ul>
                <li class="q1">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q2">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q3">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q4">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q5">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q6">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q7">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
                <li class="q8">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
              </ul>
            </div>
            <div class="tit-vigor">
              <h1>VIGOR:</h1>
            </div>
            <div class="lista-vigor">
              <ul class="ul-1">
                <li class="a1">FORTITUDE</li>
              </ul>
              <ul>
                <li class="q1">
                  <input class="input-q" type="number" min="0" max="20" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  data() {
    return {
      ficha: {},
    };
  },

  async created() {
    await this.getFicha();
  },

  methods: {
    async getFicha() {
      const id = this.$route.params.id;

      const { data } = await axios.get("fichas");
      const [ficha] = data;

      this.ficha = ficha;

      console.log(this.ficha);
    },

    textoProfi() {
      let texto = "";

      this.ficha.classe.profi.forEach((profi, index) => {
        if (index > 0) {
          texto += ", ";
        }

        texto += profi.nome;
      });

      texto += ".";

      return texto;
    },

    textoHabilidades() {
      if (this.ficha.classe.habilidade2) {
        return `${this.ficha.classe.habilidade.nome}, ${this.ficha.classe.habilidade2.nome}.`;
      }

      return this.ficha.classe.habilidade.nome + ".";
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/fichaorchid.css";
</style>
