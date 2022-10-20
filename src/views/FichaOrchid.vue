<template>
  <div class="ficha-orchid">
    <section class="info-1">
      <section class="sub-info-1">
        <!-- FOTO DO PERSONAGEM -->
        <div class="top-box foto-pers"><!-- FOTO DO PERSONAGEM -->a</div>
        <!-- FIM DA FOTO DO PERSONAGEM -->

        <!-- INPUTS DOS STATS EM NÚMEROS -->
        <div class="top-box nex-pers">
          <!-- INPUT NEX DO PERSONAGEM -->
          a
        </div>
        <div class="top-box perodada-pers">
          <!-- INPUT PE DO PERSONAGEM -->
          a
        </div>
        <div class="top-box desl-pers">
          <!-- INPUT DESLOCAMENTO DO PERSONAGEM -->
          a
        </div>
        <div class="top-box quad-pers">
          <!-- INPUT QUADRADOS DO PERSONAGEM -->
          a
        </div>
        <div class="top-box pvtotal-pers">
          <!-- INPUT PV TOTAL DO PERSONAGEM -->
          a
        </div>
        <div class="top-box pvatual-pers">
          <!-- INPUT PV ATUAL DO PERSONAGEM -->
          a
        </div>
        <div class="top-box santotal-pers">
          <!-- INPUT SAN TOTAL DO PERSONAGEM -->
          a
        </div>
        <div class="top-box sanatual-pers">
          <!-- INPUT SAN ATUAL DO PERSONAGEM -->
          a
        </div>
        <div class="top-box petotal-pers">
          <!-- INPUT PE TOTAL DO PERSONAGEM -->
          a
        </div>
        <div class="top-box peatual-pers">
          <!-- INPUT PE ATUAL DO PERSONAGEM -->
          a
        </div>
        <!-- FIM DOS INPUTS DOS STATS EM NÚMEROS -->
      </section>
    </section>

    <section class="info-2">
      <section class="sub-info-2">
        <!-- INPUTS INICIAIS -->
        <div class="top-box nome-pers">
          <!-- NOME DO PERSONAGEM -->
          a
        </div>
        <div class="top-box classe-pers">
          <!-- CLASSE DO PERSONAGEM -->
          a
        </div>
        <div class="top-box jogador-pers">
          <!-- NOME DO JOGADOR -->
          a
        </div>
        <div class="top-box origem-pers">
          <!-- ORIGEM DO PERSONAGEM -->
          a
        </div>
        <!-- FIM DOS INPUTS INICIAIS -->

        <!-- CAIXAS DE INFORMAÇÕES -->
        <div class="itens-pers">
          <!-- ITENS -->
          a
        </div>
        <div class="proef-pers">
          <!-- PROEFICIÊNCIAS E OUTROS -->
          a
        </div>
        <div class="habil-pers">
          <!-- HABILIDADES, RITUAIS E PODERES -->
          a
        </div>
        <!-- CAIXAS DE INFORMAÇÕES -->

        <!-- HEXÁGONOS -->
        <div class="hex1-pers">
          <!-- HEXÁGONO -->
          a
        </div>
        <div class="hex2-pers">
          <!-- HEXÁGONO -->
          a
        </div>
        <div class="hex3-pers">
          <!-- HEXÁGONO -->
          a
        </div>
        <div class="hex4-pers">
          <!-- HEXÁGONO -->
          a
        </div>
        <div class="hex5-pers">
          <!-- HEXÁGONO -->
          a
        </div>
      </section>
    </section>

    <section class="info-3">
      <section class="sub-info-3">
        <div class="top-box logo-ordem">
          <!-- LOGO DO ORDEM -->
          a
        </div>
        <div class="pericias-pers">
          a
          <!-- PERICIAS -->
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ficha-orchid {
  display: grid;
  grid-template-columns: 1fr, 2fr, 1fr;
  grid-template-areas: "info-1 info-2 info-2 info-3";
}

.info-1 {
  grid-area: info-1;
}

.sub-info-1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "foto-pers foto-pers"
    "nex-pers perodada-pers"
    "desl-pers quad-pers"
    "pvtotal-pers pvatual-pers"
    "santotal-pers sanatual-pers"
    "petotal-pers peatual-pers";
}

.info-2 {
  grid-area: info-2;
}

.sub-info-2 {
  display: grid;
  grid-template-columns: repeat (4, 1fr);
  grid-template-areas:
    "nome-pers nome-pers classe-pers classe-pers"
    "jogador-pers jogador-pers origem-pers origem-pers"
    "itens-pers itens-pers itens-pers hex1-pers"
    "itens-pers itens-pers itens-pers hex2-pers"
    "proef-pers proef-pers proef-pers hex3-pers"
    "habil-pers habil-pers habil-pers hex4-pers"
    "habil-pers habil-pers habil-pers hex5-pers";
}

.info-3 {
  grid-area: info-3;
}

.sub-info-3 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "logo-ordem"
    "pericias-pers";
}

/* REFERENCIANDO GRID AREAS */

.foto-pers {
  grid-area: foto-pers;
}

.nex-pers {
  grid-area: nex-pers;
}

.perodada-pers {
  grid-area: perodada-pers;
}

.desl-pers {
  grid-area: desl-pers;
}

.quad-pers {
  grid-area: quad-pers;
}

.pvtotal-pers {
  grid-area: pvtotal-pers;
}

.pvatual-pers {
  grid-area: pvatual-pers;
}

.santotal-pers {
  grid-area: santotal-pers;
}

.sanatual-pers {
  grid-area: sanatual-pers;
}

.petotal-pers {
  grid-area: petotal-pers;
}

.peatual-pers {
  grid-area: peatual-pers;
}

.nome-pers {
  grid-area: nome-pers;
}

.classe-pers {
  grid-area: classe-pers;
}

.jogador-pers {
  grid-area: jogador-pers;
}

.origem-pers {
  grid-area: origem-pers;
}

.itens-pers {
  grid-area: itens-pers;
}

.habil-pers {
  grid-area: habil-pers;
}

.proef-pers {
  grid-area: proef-pers;
}

.logo-ordem {
  grid-area: logo-ordem;
}

.pericias-pers {
  grid-area: pericias-pers;
}
</style>