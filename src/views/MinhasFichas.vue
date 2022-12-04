<template>
    <div>
        <div class="minhas-fichas">
            <div class="criar-button" @click="$router.push({path: '/criarficha'})">
                <PlusIcon/>
                <div>CRIAR FICHA</div>
            </div>
            <div class="cards">

                <div class="conteudo1">
                    <div class="ficha1">
                        <div class="cont-1">
                            <div class="foto1"></div>
                        </div>
                        <div class="cont-2">
                            <div class="desc1">
                                <h1 class="titulo">MINHA FICHA</h1>
                                <div class="det1">
                                    <h1 class="det-nex-classe">NEX</h1>
                                    <h1 class="det-nex-classe">CLASSE</h1>
                                </div>
                                <div class="det2">
                                    <h1 class="detnum">N</h1>
                                    <h1 class="detnum">N</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div class="conteudo1">
                    <div class="ficha1">
                        <div class="cont-1">
                            <div class="foto1"></div>
                        </div>
                        <div class="cont-2">
                            <div class="desc1">
                                <h1 class="titulo">MINHA FICHA</h1>
                                <div class="det1">
                                    <h1 class="det-nex-classe">NEX</h1>
                                    <h1 class="det-nex-classe">CLASSE</h1>
                                </div>
                                <div class="det2">
                                    <h1 class="detnum">N</h1>
                                    <h1 class="detnum">N</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div class="conteudo1">
                    <div class="ficha1">
                        <div class="cont-1">
                            <div class="foto1"></div>
                        </div>
                        <div class="cont-2">
                            <div class="desc1">
                                <h1 class="titulo">MINHA FICHA</h1>
                                <div class="det1">
                                    <h1 class="det-nex-classe">NEX</h1>
                                    <h1 class="det-nex-classe">CLASSE</h1>
                                </div>
                                <div class="det2">
                                    <h1 class="detnum">N</h1>
                                    <h1 class="detnum">N</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div class="conteudo1">
                    <div class="ficha1">
                        <div class="cont-1">
                            <div class="foto1"></div>
                        </div>
                        <div class="cont-2">
                            <div class="desc1">
                                <h1 class="titulo">MINHA FICHA</h1>
                                <div class="det1">
                                    <h1 class="det-nex-classe">NEX</h1>
                                    <h1 class="det-nex-classe">CLASSE</h1>
                                </div>
                                <div class="det2">
                                    <h1 class="detnum">N</h1>
                                    <h1 class="detnum">N</h1>
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
import PlusIcon from 'vue-material-design-icons/Plus.vue';
export default {
    components:{
        PlusIcon
    }
}
</script>

<style scoped>
@import "@/assets/styles/minhasfichas.css";
</style>