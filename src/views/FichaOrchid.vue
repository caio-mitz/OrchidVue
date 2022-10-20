<template>
  <div class="ficha-orchid">
    <section class="info-1">
      <section class="sub-info-1">
        <div class="top-box foto-pers">
          <!-- FOTO DO PERSONAGEM -->a
        </div>
        <div class="top-box nex-pers">
          <!-- INPUT NEX DO PERSONAGEM -->a
        </div>
        <div class="top-box perodada-pers">
          <!-- INPUT PE DO PERSONAGEM -->a
        </div>
        <div class="top-box desl-pers">
          <!-- INPUT DESLOCAMENTO DO PERSONAGEM -->a
        </div>
        <div class="top-box quad-pers">
          <!-- INPUT QUADRADOS DO PERSONAGEM -->a
        </div>
        <div class="top-box pvtotal-pers">
          <!-- INPUT PV TOTAL DO PERSONAGEM -->a
        </div>
        <div class="top-box pvatual-pers">
          <!-- INPUT PV ATUAL DO PERSONAGEM -->a
        </div>
        <div class="top-box santotal-pers">
          <!-- INPUT SAN TOTAL DO PERSONAGEM -->a
        </div>
        <div class="top-box sanatual-pers">
          <!-- INPUT SAN ATUAL DO PERSONAGEM -->a
        </div>
        <div class="top-box petotal-pers">
          <!-- INPUT PE TOTAL DO PERSONAGEM -->a
        </div>
        <div class="top-box peatual-pers">
          <!-- INPUT PE ATUAL DO PERSONAGEM -->a
        </div>
      </section>
    </section>
    <section class="info-2">
      <div class="top-box top-box-a">
        <!-- FOTO DE PERFIL -->
      </div>
    </section>
    <section class="info-3">
      <div class="top-box top-box-a">
        <!-- FOTO DE PERFIL -->
      </div>

    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ficha-orchid {
  display: grid;
  grid-template-columns: 1fr, 2fr, 1fr;
  grid-template-areas:
    'info-1 info-2 info-2 info-3';
}

.info-1 {
  grid-area: info-1;
}

.sub-info-1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'foto-pers foto-pers'
    'nex-pers perodada-pers'
    'desl-pers quad-pers'
    'pvtotal-pers pvatual-pers'
    'santotal-pers sanatual-pers'
    'petotal-pers peatual-pers';
}

/* REFERENCIANDO GRID AREAS */

.info-2 {
  grid-area: info-2;
}

.info-3 {
  grid-area: info-3;
}

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
</style>