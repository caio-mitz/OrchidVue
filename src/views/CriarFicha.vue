<template>
    <div class="criar-ficha">
        <div class="form">
            <div class="area1">
                <input type="text" class="inputnome">
                <input type="number" class="inputnex">
                <input type="text" class="inputorigem">
                <input type="text" class="inputclasse">
            </div>
            <div class="area2">
                <input type="text" class="inputagili">
                <input type="text" class="inputforca">
                <input type="text" class="inputintel">
                <input type="text" class="inputprese">
                <input type="text" class="inputvigor">
                <fieldset class="fieldpericias">
                    <legend>Escolha suas perícias:</legend>

                    <div>
                        <input type="checkbox">
                        <label>Scales</label>
                    </div>

                    <div>
                        <input type="checkbox">
                        <label for="horns">Horns</label>
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