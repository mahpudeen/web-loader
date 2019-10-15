<template>

 <div class="q-pa-md q-gutter-md">
       <h4 style="text-align:center; margin-top: 5%">ETL Data Runner</h4>
            <q-list bordered class="rounded-borders" style="max-width: 100%">
                
            <q-item-label header>ETL Data Runner</q-item-label>

                <div v-for="item in data">
                    <q-item style="border-bottom: 1px solid #d9d9d9">
                        <q-item-section avatar top>
                        <q-icon name="fab fa-github" color="black" size="34px" />
                        </q-item-section>

                        <q-item-section top class="col-4 gt-sm">
                        <q-item-label class="q-mt-sm">{{item.TaskName}}</q-item-label>
                        </q-item-section>

                        <q-item-section top>
                        <q-item-label lines="1">
                            <span class="text-weight-medium">Data Source Type</span>
                        </q-item-label>
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                            <span class="cursor-pointer">{{item.DataSourceType}}</span>
                        </q-item-label>
                        </q-item-section>

                        <q-item-section top side>
                        <div class="text-grey-7 q-gutter-xs">
                            <q-btn v-if="item.ProcessStage == NULL" size="12px" flat dense round icon="fiber_manual_record" color="grey"/>
                            <q-btn v-if="item.ProcessStage == 'R'" size="12px" flat dense round icon="fiber_manual_record" color="yellow"/>
                            <q-btn v-if="item.ProcessStage == 'F'" size="12px" flat dense round icon="fiber_manual_record" color="green"/>
                            <q-btn v-if="item.ProcessStage == 'E'" size="12px" flat dense round icon="fiber_manual_record" color="red"/>
                        </div>
                        </q-item-section>

                        <q-item-section top class="col-1 gt-sm" style="font-size: 16px; font-weight: bold">
                            <q-item-label v-if="item.ProcessStage == NULL" class="q-mt-sm" style="color: grey">Initiate</q-item-label>
                            <q-item-label v-if="item.ProcessStage == 'R'" class="q-mt-sm" style="color: yellow">Running</q-item-label>
                            <q-item-label v-if="item.ProcessStage == 'F'" class="q-mt-sm" style="color: green">Finished</q-item-label>
                            <q-item-label v-if="item.ProcessStage == 'E'" class="q-mt-sm" style="color: red">Error</q-item-label>
                        </q-item-section>

                        <q-item-section top side>
                        <div class="text-grey-7 q-gutter-xs">
                            <q-btn class="gt-xs" size="12px" flat dense round icon="play_circle_filled" @click="basic = true" />
                            <q-btn size="12px" flat dense round icon="more_vert" />
                        </div>
                        </q-item-section>
                    </q-item>

                    <q-separator spaced />
                </div>
            
            </q-list>

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