<template>
    <div class="upload-outer">
        <div id="upload-box">
            <div id="file-view">
                <iframe src="/Users/Koch/Desktop/test.pdf" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </div>
        <div class="upload-buttons-column" v-if="!showAlerts">
            <button class="grey-rb" v-on:click="go_back1">戻る</button>
            <button class="rounded-button" v-on:click="next">次へ</button>
        </div>
        <div class="upload-buttons-column" v-if="showAlerts">
            <button class="grey-rb" v-on:click="go_back2">戻る</button>
            <button class="rounded-button" v-on:click="done">完了</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "FileView",
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['showAlerts'])
    },
    methods: {
        ...mapMutations(['setShowAlerts', 'setShowFileView']),
        go_back1() {
            this.$store.commit('setShowFileView', false),
            this.$store.commit('setShowUpload', true)
        },
        next() {
            this.$store.commit('setShowAlerts', true)
        },
        go_back2() {
            this.$store.commit('setShowAlerts', false)
        },
        done() {
            this.$store.commit('setShowAlerts', false),
            this.$store.commit('setShowFileView', false),
            this.$store.commit('setShowUpload', true),
            this.$router.push('/')
        }
    }
}
</script>

<style>
@import '@/assets/colors.css';
#file-view {
    border:1px solid var(--line-color);
    width: 59%;
    height: 100%;
}
#upload-box {
    width: 100%;
    height: 82%;
}
</style>