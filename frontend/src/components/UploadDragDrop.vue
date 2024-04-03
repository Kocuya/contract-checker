<template>
    <div id="upload-outer">
        <div id="drop-zone"
            @dragover.prevent="dragOver"
            @drop.prevent="onDrop"
            @dragenter.prevent="dragEnter"
            @dragleave.prevent="dragLeave"
        >
            <button v-on:click="file_select" class="inverted-button">ファイル選択</button>
        </div>
        <div id="upload-buttons-column">
            <button class="grey-rb">キャンセル</button>
            <button class="rounded-button">開始</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UploadDrag',
    methods: {
        file_select() {
            console.log('test of uploads')
        }
    }
}
</script>

<style>
#drop-zone {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    border: 1px dashed var(--line-color);
    border-radius: 4px;
    background-color: rgb(246, 246, 246);
}
#upload-outer {
    width: 90%;
    height: 85%;
}
#upload-buttons-column {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 236px;
}
</style>