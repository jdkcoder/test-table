<template>
    <div class="q-pa-md">
        <q-table title="Treats" :rows="props.tableRows" row-key="name" />
    </div>
    {{ props.tableColumns }}
</template>

<script setup>
let props = defineProps({
    tableRows: { type: Array, default: [] },
    tableName: { type: String, default: '' }
});
</script>

<style scoped lang='scss'></style>