import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            showUploadPage: false
        };
    },
    mutations: {
        setShowUploadPage(state, value) {
            state.showUploadPage = value;
        },
    },
});