import Login from '@/components/Login.vue';
import MainMenu from '@/components/MainMenu.vue';
import UploadAssesment from '@/components/UploadAssesment.vue';
import UploadBerita from '@/components/UploadBerita.vue';
import UploadRDKM from '@/components/UploadRDKM.vue';
import UploadRDKB from '@/components/UploadRDKB.vue';
import History from '@/components/History.vue';
import HistoryAuditTrail from '@/components/HistoryAuditTrail.vue';


const routes = [
    { path: '/', component: Login, name:'login'},
    { path: '/mainmenu', component: MainMenu, name:'mainmenu'},
    { path: '/history', component: History, name:'history'},
    { path: '/kssk', component: UploadAssesment, name:'uploadassesment'},
    { path: '/berita', component: UploadBerita, name:'uploadberita'},
    { path: '/rdkm', component: UploadRDKM, name:'uploadrdkm'},
    { path: '/rdkb', component: UploadRDKB, name:'uploadrdkb'},
    { path: '/history-audit-trail', component: HistoryAuditTrail, name:'historyAuditTrail'},


];

export default routes;