<template>
    <div class="upload-outer">
        <div id="drop-zone"
            @dragover.prevent="dragOver"
            @drop.prevent="onDrop"
            @dragenter.prevent="dragEnter"
            @dragleave.prevent="dragLeave"
        >
            <button v-on:click="file_select" class="inverted-button">ファイル選択</button>
        </div>
        <div id="test" v-if="showUploading">test</div>
        <div class="upload-buttons-column">
            <button class="grey-rb" v-on:click="upload_cancel">キャンセル</button>
            <button class="rounded-button" v-on:click="upload_start">開始</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'UploadDrag',
    computed: {
        ...mapState(['showUploading']),
    },
    methods: {
        ...mapMutations(['setShowUploading']),
        file_select() {
            this.$store.commit('setShowUploading', true);
            console.log('テストで次に進みます');
        },
        upload_cancel() {
            this.$router.push('/')
            console.log('戻る')
        },
        upload_start() {
            this.$store.commit('setShowUpload', false);
            this.$store.commit('setShowUploading', false);
            this.$store.commit('setShowFileView', true)
        }
    }
}
</script>

<style>
#drop-zone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
    border: 1px dashed var(--line-color);
    border-radius: 4px;
    background-color: rgb(246, 246, 246);
}
.upload-outer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 85%;
}
.upload-buttons-column {
    display: flex;
    justify-content: space-between;
    width: 236px;
}
#test {
    width: 60%;
    background-color: yellow;
}
</style>