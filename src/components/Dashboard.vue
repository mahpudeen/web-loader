<template>

 <div class="q-pa-md q-gutter-md">
            <iframe style="width: 100%" src="http://10.7.16.186/app/kibana#/dashboard/331d58b0-db62-11e9-9b4f-8f3f22f52686?embed=true&_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow-90d%2Cmode%3Aquick%2Cto%3Anow))" height="600" width="800"></iframe>

 </div>
</template>


<style scoped>
    
</style>


<script>

import etl  from '../api/etl/index';
export default {

    data () {
        return {
            data: []
        }
    },

    beforeCreate() {
        const self = this;

        etl.getETLDatas(window).then(function (result) {
            console.log('ini result', result)
            return result;
        }).then(function (datas) {
            self.data = datas;
            return datas;
        }).catch(function (err) {
            console.log(err)
        });
  },
}
</script>