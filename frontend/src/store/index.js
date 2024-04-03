import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            showUploadPage: false,
            showUpload: true,
            showUploading: false,
            showFileView: false,
            showAlerts: false,
        }
    },
    mutations: {
        setShowUploadPage(state, value) {
            state.showUploadPage = value;
        },
        setShowUpload(state, value) {
            state.showUpload = value;
        },
        setShowUploading(state, value) {
            state.showUploading = value;
        },
        setShowFileView(state, value) {
            state.showFileView = value;
        },
        setShowAlerts(state, value) {
            state.showAlerts = value;
        }
    },
});