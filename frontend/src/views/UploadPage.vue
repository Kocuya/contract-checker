<template>
    <div id="upload-overlay">
        <div id="upload-title">
            契約書のアップロード
            <button v-on:click="test">push to home</button>
        </div>
        <div id="upload-label">
            <DragAndDrop />
        </div>
    </div>
</template>

<script>
import DragAndDrop from '../components/UploadDragDrop.vue';
export default {
    name: 'UploadPage',
    components: {
        DragAndDrop,
    },
    methods: {
        test() {
            this.$router.push('/')
            console.log('ホームに戻る(test)')
        }
    }
};
</script>

<style>
@import "@/assets/colors.css";
#upload-overlay{
    padding-top: 54px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    z-index: 1000;
}
#upload-label {
    width: 100%;
    height: 74%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--line-color);
    border-bottom: 1px solid var(--line-color);
}
#upload-title {
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: var(--bar-pink);
    border-top: 1px solid var(--line-color);
    font-weight: bold;
    font-size: 14px;
}
</style>