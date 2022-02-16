<template>
    <div class="the__movie">
        <img :src="img" :alt="title" />
        <h3>{{ title }}</h3>
        <button class="btn--remove" @click="$emit('removeItem', id)">Удалить</button>
    </div>
</template>

<script>
export default {
    name: "TheMovie",
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.the__movie {
    margin: 20px;
}

.the__movie img {
    border-radius: 14px;
    box-shadow: 0 2px 20px 2px rgba(172, 172, 172, 0.6);
    height: 300px;
}

h3 {
    margin-top: 10px;
    text-align: center;
}

.btn--remove {
    width: 100%;
    margin-top: 12px;
    background-color: #dc3545;
    box-shadow: 0 2px 15px 2px rgba(220, 53, 69, 0.2);
}
</style>
