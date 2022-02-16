<template>
    <header>
        <h3>Количество фильмов:</h3>
        <button class="btn--primary">Получить +1 фильм</button>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
};
</script>

<style lang="css" scoped>
header {
    box-shadow: 0 2px 15px 2px rgba(172, 172, 172, 0.4);
    color: #2f2f2f;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn--primary {
    background-color: #0d6efd;
    padding: 0px 14px;
    box-shadow: 0 2px 15px 2px rgba(13, 110, 253, 0.2);
}
</style>
