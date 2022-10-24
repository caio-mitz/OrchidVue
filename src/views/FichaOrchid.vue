<template>
  <div class="ficha-orchid">
    <section class="info-1">
      <!-- FOTO DO PERSONAGEM -->
      <div class="pos-foto">
      <div class="top-box foto-pers"><!-- FOTO DO PERSONAGEM -->a
      </div>
      </div>
      <section class="sub-info-1">
        <!-- FIM DA FOTO DO PERSONAGEM -->

        <!-- INPUTS DOS STATS EM NÚMEROS -->
        <div class="top-box nex-pers">
          <!-- INPUT NEX DO PERSONAGEM -->
          <h1>NEX</h1>
          <input type="text" class="input-nex">
        </div>
        <div class="top-box perodada-pers">
          <!-- INPUT PE DO PERSONAGEM -->
          <h1>PE/RODADA</h1>
          <input type="text" class="input-perodada">
        </div>
        <div class="top-box desl-pers">
          <!-- INPUT DESLOCAMENTO DO PERSONAGEM -->
          <h1>DESL.</h1>
          <input type="text" class="input-deslocamento">
        </div>
        <div class="top-box quad-pers">
          <h1>QUAD.</h1>
          <input type="text" class="input-quadrados">
          <!-- INPUT QUADRADOS DO PERSONAGEM -->
        </div>
        <div class="top-box pvtotal-pers">
          <h1>PV TOTAL</h1>
          <input type="text" class="input-pvtotal">
          <!-- INPUT PV TOTAL DO PERSONAGEM -->
        </div>
        <div class="top-box pvatual-pers">
          <h1>PV ATUAL</h1>
          <input type="text" class="input-pvatual">
          <!-- INPUT PV ATUAL DO PERSONAGEM -->
        </div>
        <div class="top-box santotal-pers">
          <h1>SAN TOTAL</h1>
          <input type="text" class="input-santotal">
          <!-- INPUT SAN TOTAL DO PERSONAGEM -->
        </div>
        <div class="top-box sanatual-pers">
          <h1>SAN ATUAL</h1>
          <input type="text" class="input-sanatual">
          <!-- INPUT SAN ATUAL DO PERSONAGEM -->
        </div>
        <div class="top-box petotal-pers">
          <h1>PE TOTAL</h1>
          <input type="text" class="input-petotal">
          <!-- INPUT PE TOTAL DO PERSONAGEM -->
        </div>
        <div class="top-box peatual-pers">
          <h1>PE ATUAL</h1>
          <input type="text" class="input-peatual">
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
          <input type="text" class="input-nome">
        </div>
        <div class="top-box classe-pers">
          <h1>CLASSE DO PERSONAGEM:</h1>
          <input type="text" class="input-classe">
        </div>
        <div class="top-box jogador-pers">
          <h1>NOME DO JOGADOR:</h1>
          <input type="text" class="input-jogador">
        </div>
        <div class="top-box origem-pers">
          <h1>ORIGEM DO PERSONAGEM:</h1>
          <input type="text" class="input-origem">
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

        <div class="hex1">
          <h1>FOR</h1>
          <div class="hex1-pers">
            <!-- HEXÁGONO -->
          </div>
        </div>

        <div class="hex2">
          <h1>AGI</h1>
          <div class="hex2-pers">
            <!-- HEXÁGONO -->
          </div>
        </div>

        <div class="hex3">
          <h1>INT</h1>
          <div class="hex3-pers">
            <!-- HEXÁGONO -->
          </div>
        </div>

        <div class="hex4">
          <h1>VIG</h1>
          <div class="hex4-pers">
            <!-- HEXÁGONO -->
          </div>
        </div>

        <div class="hex5">
          <h1>PRE</h1>
          <div class="hex5-pers">
            <!-- HEXÁGONO -->
          </div>
        </div>

      </section>
    </section>

    <section class="info-3">
      <section class="sub-info-3">
        <div class="top-box logo-ordem">
          <img src="@/assets/Ordem_Paranormal_Logo.png" alt="">
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

.pos-foto {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* CONFIGURAÇÕES GERAIS */

:root {
    --primary: #24282E; 
    --secondary: #0c0e10;
    --light: #ffffff;
    --red: #B04141;
    --dark: #101214;
    --shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
}

/* FIM DAS CONFIGURAÇÕES GERAIS */

/* CONFIGURAÇÃO DA PÁGINA DA FICHA */

.ficha-orchid {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  color: #ffffff;
  font-size: 10px;
  background: linear-gradient(#0c0e10, #24282E);
  display: grid;
  grid-template-columns: 1fr, 2fr, 1fr;
  grid-template-areas: "info-1 info-2 info-2 info-3";
}

/* FIM DA CONFIGURAÇÃO DA PÁGINA DA FICHA */

/* INFORMAÇÕES INICIAIS DO PERSOGANEM (INPUTS) */

.foto-pers {
  width: 203px;
  height: 168px;
  background-color: #0c0e10;
  border: solid #B04141;
}

.input-nome {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 240px;
  font-size: 20px;
  color: #ffffff;
}

.input-classe {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 240px;
  font-size: 20px;
  color: #ffffff;
}

.input-jogador {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 240px;
  font-size: 20px;
  color: #ffffff;
}

.input-origem {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 240px;
  font-size: 20px;
  color: #ffffff;
}

/* FIM DOS INPUTS */

/* INFORMAÇÕES DE STATUS DO PERSONAGEM (INPUTS) */

.input-nex {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}

.input-perodada {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}
.input-deslocamento {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}
.input-quadrados {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}
.input-pvtotal {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}
.input-pvatual {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}

.input-santotal {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}

.input-sanatual {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}

.input-petotal {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}

.input-peatual {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 63px;
  width: 86px;
  font-size: 40px;
  color: #ffffff;
}

/* FIM DOS INPUTS */

/* CAIXAS DOS PODERES, ITENS, ETC. */

.itens-pers {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 172px;
  width: 414px;
}

.proef-pers {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 121px;
  width: 414px;
}

.habil-pers {
  background-color:#101214;
  border: solid var(--red) 2px;
  height: 172px;
  width: 414px;
}

/* FIM DAS CAIXAS */

/* HEXÁGONOS */

.hex1 {
  padding: 10px;
}

.hex2 {
  padding: 10px;
}

.hex3 {
  padding: 10px;
}

.hex4 {
  padding: 10px;
}

.hex5 {
  padding: 10px;
}

.hex1-pers {
  height: 60px;
  width: 60px;
  background-color: #101214;
  clip-path: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%);
  border: solid #B04141;
  border-radius: 25px;
}

.hex2-pers {
  height: 60px;
  width: 60px;
  background-color: #101214;
  clip-path: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%);
  border: solid #B04141;
  border-radius: 25px;
}

.hex3-pers {
  height: 60px;
  width: 60px;
  background-color: #101214;
  clip-path: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%);
  border: solid #B04141;
  border-radius: 25px;
}

.hex4-pers {
  height: 60px;
  width: 60px;
  background-color: #101214;
  clip-path: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%);
  border: solid #B04141;
  border-radius: 25px;
}

.hex5-pers {
  height: 60px;
  width: 60px;
  background-color: #101214;
  clip-path: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%);
  border: solid #B04141;
  border-radius: 25px;
}

/* FIM DOS HEXÁGONOS */






.logo-ordem img {
  width: 223px;
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