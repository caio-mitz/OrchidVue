<template>
    <div class="criar-ficha">
        <div class="form">
            <div class="area1">
                <input type="text" class="inputnome" placeholder="NOME DO PERSONAGEM">
                <input type="number" class="inputnex" placeholder="NEX" min="0" max="99">
                <select class="inputorigem">
                    <option value="0">Selecione sua ORIGEM</option>
                    <option value="0">Acadêmico</option>
                    <option value="0">Agente de saúde</option>
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
                    <option value="0">Servidor público</option>
                </select>
                <select class="inputclasse">
                    <option value="0">Selecione sua CLASSE</option>
                    <option value="0">Combatente</option>
                    <option value="0">Especialista</option>
                    <option value="0">Ocultista</option>

                </select>
            </div>
            <div class="area2">
                <input type="number"" class="inputagili" placeholder="AGI" min="-1" max="5">
                <input type="number" class="inputforca" placeholder="FOR" min="-1" max="5">
                <input type="number" class="inputintel" placeholder="INT" min="-1" max="5">
                <input type="number" class="inputprese" placeholder="PRE" min="-1" max="5">
                <input type="number" class="inputvigor" placeholder="VIG" min="-1" max="5">
                <fieldset class="fieldagili">
                    <legend><b>AGILIDADE</b></legend>

                    <div>
                        <input type="checkbox">
                        <label>Acrobacia</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Crime</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Furtividade</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Iniciativa</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Pilotagem</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Pontaria</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Reflexos</label>
                    </div>

                </fieldset>

                <fieldset class="fieldforca">
                    <legend><b>FORÇA</b></legend>

                    <div>
                        <input type="checkbox">
                        <label>Atletismo</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Luta</label>
                    </div>

                </fieldset>

                <fieldset class="fieldintel">
                    <legend><b>INTELIGÊNCIA</b></legend>

                    <div>
                        <input type="checkbox">
                        <label>Atualidades</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Ciências</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Intuição</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Investigação</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Medicina</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Ocultismo</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Sobrevivência</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Tática</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Tecnologia</label>
                    </div>

                </fieldset>

                <fieldset class="fieldprese">
                    <legend><b>PRESENÇA</b></legend>

                    <div>
                        <input type="checkbox">
                        <label>Adestramento</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Artes</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Diplomacia</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Enganação</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Intimidação</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Percepção</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Religião</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Vontade</label>
                    </div>

                </fieldset>

                <fieldset class="fieldvigor">
                    <legend><b>VIGOR</b></legend>

                    <div>
                        <input type="checkbox">
                        <label>Fortitude</label>
                    </div>

                </fieldset>
                <button class="criarficha">Criar ficha</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import "@/assets/styles/criarficha.css";
</style>