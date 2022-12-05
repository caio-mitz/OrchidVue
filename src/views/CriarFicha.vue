<template>
    <div class="criar-ficha">
        <div class="form">
            <div class="area1">
                <input type="text" class="inputnome" v-model="ficha.nome" placeholder="NOME DO PERSONAGEM">
                <input type="number" class="inputnex" @change="limitarNex(ficha.nex, 99, $event)" v-model="ficha.nex" placeholder="NEX" min="0" max="99">
                <select class="inputorigem" v-model="ficha.origem">
                    <option value="placeholder">Selecione sua ORIGEM</option>
                    <option v-for="origem,index in origens" :key="index" :value="origem">{{origem.nome}}</option>
                    <!-- <option value="0">Agente de saúde</option>
                    <option value="0">Amnésico</option>
                    <option value="0">Artista</option>
                    <option value="0">Atleta</option>
                    <option value="0">Chef</option>
                    <option value="0">Criminoso</option>
                    <option value="0">Cultista arrependido</option>
                    <option value="0">Desgarrado</option>
                    <option value="0">Engenheiro</option>
                    <option value="0">Executivo</option>
                    <option value="0">Investigador</option>
                    <option value="0">Lutador</option>
                    <option value="0">Magnata</option>
                    <option value="0">Mercenário</option>
                    <option value="0">Militar</option>
                    <option value="0">Operário</option>
                    <option value="0">Policial</option>
                    <option value="0">Religioso</option>
                    <option value="0">Servidor público</option> -->
                </select>
                <select class="inputclasse" v-model="ficha.classe">
                    <option value="placeholder">Selecione sua CLASSE</option>
                    <option v-for="(classe, index) in classes" :key="index" :value="classe">{{classe.nome}}</option>
                </select>
            </div>
            <div class="area2">
                <div class="inputshows">
                    <input type="number" class="inputagili" placeholder="AGI" min="-1" max="5">
                    <input type="number" class="inputforca" placeholder="FOR" min="-1" max="5">
                    <input type="number" class="inputintel" v-model="ficha.intel" placeholder="INT" min="-1" max="5">
                    <input type="number" class="inputprese" placeholder="PRE" min="-1" max="5">
                    <input type="number" class="inputvigor" placeholder="VIG" min="-1" max="5">
                </div>
                <fieldset class="fieldagili">
                    <legend><b>PERÍCIAS</b></legend>

                    <div v-for="pericia,index in pericias" :class="ficha.origem != 'placeholder' && (ficha.origem.pericia1.id == pericia.id || ficha.origem.pericia2.id == pericia.id) ? 'p-origem' : ''" :key="index">
                        <input class="caixa" type="checkbox" disabled checked v-if="ficha.origem != 'placeholder' && (ficha.origem.pericia1.id == pericia.id || ficha.origem.pericia2.id == pericia.id)">
                        <input class="caixa" v-model="periciasEscolhidas" :value="pericia.nome" checked type="checkbox" v-else-if="periciasEscolhidas.includes(pericia.nome)">
                        <input class="caixa" type="checkbox" v-else-if="(ficha.origem == 'placeholder' || !ficha.intel || ficha.classe == 'placeholder' || numeroDePericias == periciasEscolhidas.length)" disabled>
                        <input class="caixa" v-model="periciasEscolhidas" :value="pericia.nome"  type="checkbox" v-else>
                        <label v-if="ficha.origem != 'placeholder' && (ficha.origem.pericia1.id == pericia.id || ficha.origem.pericia2.id == pericia.id)">{{pericia.nome}} (origem)</label>
                        <label v-else-if="ficha.origem == 'placeholder'" class="label-disabled">{{pericia.nome}}</label>
                        <label v-else>{{pericia.nome}}</label>
                    </div>
                </fieldset>

                <!-- <fieldset class="fieldforca">
                    <legend><b>FORÇA</b></legend>
                </fieldset> -->

                <!-- <fieldset class="fieldintel">
                    <legend><b>INTELIGÊNCIA</b></legend>
                </fieldset> -->

                <!-- <fieldset class="fieldprese">
                    <legend><b>PRESENÇA</b></legend>
                </fieldset> -->

                <!-- <fieldset class="fieldvigor">
                    <legend><b>VIGOR</b></legend>
                </fieldset> -->

                <button class="criarficha">Criar ficha</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../plugins/axios"
export default {
    data(){
        return{
            ficha: {
                origem: 'placeholder',
                classe: 'placeholder',
                intel: null,
            },
            origens: [],
            pericias: [],
            classes: [],
            periciasEscolhidas: [],
            numeroDePericias: 0
        }
    },
    computed:{
        classe(){
            return this.ficha.classe
        },
        intel(){
            return this.ficha.intel
        }
    },
    watch:{
        classe(){
            if(this.ficha.intel){
                this.numeroDePericias = parseInt(this.ficha.classe.numpericias) + parseInt(this.ficha.intel)
            }else{
                this.numeroDePericias = parseInt(this.ficha.classe.numpericias)
            }

        },
        intel(){
            this.numeroDePericias = parseInt(this.ficha.classe.numpericias) + parseInt(this.ficha.intel)
        },
    },
    methods:{
        limitarNex(valor,limitador,e){
            if(valor > limitador){
                e.srcElement.value = limitador
                this.ficha.nex = limitador.toString()
            }
            if(valor < 0){
                e.srcElement.value = 0
                this.ficha.nex = 0
            }
        },
        async getOrigens(){
            const {data} = await axios.get(`origens/`)
            this.origens = data
        },
        async getPericias(){
            const {data} = await axios.get('pericias/')
            this.pericias = data
        },
        async getClasses(){
            const {data} = await axios.get('classes/')
            this.classes = data
        },
    },
    mounted(){
        this.getOrigens()
        this.getPericias(),
        this.getClasses()
    }
}
</script>

<style scoped>
input, select{
    outline: 0;
    padding-left: 10px
}
.p-origem{
    color: #b04141;
}
input[type=checkbox]{
    margin-right: 5px;

}
.label-disabled{
    color: #56606e;
    text-decoration: line-through;
}

/* .p-origem input[type=checkbox][disabled]{
    outline:1px solid #b04141;
} */
@import "@/assets/styles/criarficha.css";
</style>