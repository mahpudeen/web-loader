<template>

 <div class="q-pa-md q-gutter-md">


            <q-list bordered class="rounded-borders" style="max-width: 100%">
                
            <q-item-label header>ETL Data Runner</q-item-label>

                <div v-for="item in data">
                    <q-item style="border-bottom: 1px solid #d9d9d9">
                    
                        <q-item-section top side>
                        <div class="text-grey-7 q-gutter-xs">
                            <q-btn v-if="item.ProcessStage == null" size="12px" flat dense round icon="fiber_manual_record" color="grey"/>
                            <q-btn v-if="item.ProcessStage == 'R'" size="12px" flat dense round icon="fiber_manual_record" color="yellow"/>
                            <q-btn v-if="item.ProcessStage == 'F'" size="12px" flat dense round icon="fiber_manual_record" color="green"/>
                            <q-btn v-if="item.ProcessStage == 'E'" size="12px" flat dense round icon="fiber_manual_record" color="red"/>
                        </div>
                        </q-item-section>

                        <q-item-section top class="col-1 gt-sm" style="font-size: 16px; font-weight: bold">
                            <q-item-label v-if="item.ProcessStage == null" class="q-mt-sm" style="color: grey">Initiate</q-item-label>
                            <q-item-label v-if="item.ProcessStage == 'R'" class="q-mt-sm" style="color: yellow">Running</q-item-label>
                            <q-item-label v-if="item.ProcessStage == 'F'" class="q-mt-sm" style="color: green">Finished</q-item-label>
                            <q-item-label v-if="item.ProcessStage == 'E'" class="q-mt-sm" style="color: red">Error</q-item-label>
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

                        <q-item-section top v-if="item.DataSourceType === 'Manual'">
                            <q-item-label lines="1">
                                <span class="text-weight-medium">File Name</span>
                            </q-item-label>
                            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary">
                                <span class="cursor-pointer">{{item.ExcelFileName}}</span>
                            </q-item-label>
                        </q-item-section>

    
                        <q-item-section top side>
                        <div class="text-grey-7 q-gutter-xs">
                            <q-btn v-if="item.ProcessFlag === '0'" :loading="loading2" :percentage="percentage2" class="gt-xs" size="12px" flat dense round icon="play_circle_filled" @click="changeFlag(item.TaskName, 2)"/>
                            <q-btn v-if="item.ProcessFlag === '1'" :loading="loading2" :percentage="percentage2" class="gt-xs" size="12px" flat dense round icon="play_circle_filled" @click="changeFlag(item.TaskName, 2)" disable/>
                            <q-btn class="gt-xs" size="12px" flat dense round icon="cloud_upload" @click="basic = true" />
                            <q-btn size="12px" flat dense round icon="more_vert" />
                        </div>
            
                        </q-item-section>
                    </q-item>
                </div>
            
            </q-list>

            <iframe style="width: 100%" src="http://10.7.16.186/app/kibana#/dashboard/331d58b0-db62-11e9-9b4f-8f3f22f52686?embed=true&_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow-90d%2Cmode%3Aquick%2Cto%3Anow))" height="600" width="800"></iframe>
            

             <q-dialog v-model="basic" transition-show="fade" transition-hide="fade">
                <q-card>
                    <q-card-section>
                        <div class="text-h6"> Upload Data Excel</div>
                    </q-card-section>

                        <div class="flex flex-center">
                            <div class="q-pa-md" style="max-width: 500px; width:100%">
                                <q-form class="q-gutter-md">
                        
                                <q-input
                                    filled
                                    v-model="nameFile"
                                    label="Nama File"
                                    hint="Contoh: 1. Overview New.xlsx"
                                    lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                />
                                
                                <div class="modal-body">
                                        <!--UPLOAD-->
                                    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                                    <div>
                                        <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept=".xls, .xlsx" class="dropbox">
                                        <p v-if="isInitial">
                                        Drag your excel data file(s) here to begin
                                        </p>
                                        <p v-if="isSaving">
                                        Uploading {{ fileCount }} files...
                                        </p>
                                    </div>
                                    </form>
                                    <div class="dropbox" v-if="isFailed" @click="$emit('close')">
                                    <br>
                                    <p v-if="isFailed" style="color: #95D600">Upload Success
                                    </p>
                                    </div>
                                </div>

    
                                </q-form>
                            </div>
                            </div>
                
                    <q-card-actions align="right">
                        <q-btn flat label="Cancel" color="black" @click="closePopUp()"/>
                        <q-btn flat label="Apply" type="submit" color="black" @click="submit(waitedFormData)" />
                    </q-card-actions>
                </q-card>
            </q-dialog>
 </div>
</template>


<style scoped>

.q-field__control {
  color: black !important;
}
.q-uploader__header {
    color: black !important;
}

.dropbox {
    outline: 2px dashed #95D600; /* the dash box */
    outline-offset: -10px;
    background: #fbfbfb;
    text-align: center;
    color: dimgray;
    width: 100%;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: #f5f5f5; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

  .border-dash {
    margin-top: 15px;
    border: 2px dashed #95D600;
    width: 100%;
    border-radius: 3px;
    color: #757575;

  }

  .border-dash-header {
    margin-top: 15px;
    border: 2px dashed #95D600;
    width: 94%;
    border-radius: 3px;
    color: #757575;

  }

  .for-header {
    margin: 10px;
    padding-left: 20px;

  }

  .button-updates {
    line-height: 30px;
    border: 2px solid #95D600;
    background: #95D600;
    color: #fff;
    width: 100%;
    font-size: 14px;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0px;
    border-radius: 3px;
    font-family: Montserrat;
  }

  .button-cancels {
    line-height: 30px;
    border: 2px solid #ebebeb;
    background: #ebebeb;
    color: #888888;
    width: 100%;
    font-size: 14px;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0px;
    border-radius: 3px;
    font-family: Montserrat;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 85%;
    height: 85%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Montserrat;
    overflow-y: scroll;
    overflow-x: scroll;
    max-width: 100%;
    max-height: 100%;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #95D600;
  }

  .detail {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
  }

  .detail-table {
    line-height: 50px;
    border: 2px dashed #95D600;
    width: 100%;
    border-radius: 3px;
    color: #757575;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .button-close-modal {
    border: 0px solid #95D600;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 375px) {
    .modal-container {
      width: 360px;
      height: 600px;
    }

    .border-dash {
      width: 40%;

    }
  }

  @media only screen and (max-width: 800px) {
    .modal-container {
      width: 360px;
      height: 600px;
    }
  }
    
</style>


<script>
import {upload}  from '../api/upload/index';
import {uploadDataManual}  from '../api/upload/index';
import history  from '../api/history/index';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

import etl  from '../api/etl/index';
export default {

    data () {
        return {
            data: [],
             basic: false,
             lorem: "",
            ipsum: "",
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            uploadFieldName: 'photos',
            name : 'testing',
            string : 'string',
            nameFile : '1. Overview New.xlsx',
            waitedFormData: '',
            loading1: false,
            percentage1: 0,

            loading2: false,
            percentage2: 0,

            loading3: false,
            percentage3: 0,

            alert: false,
            confirm: false,
            prompt: false,

            address: ''
        }
    },

    methods: {
        closePopUp() {
          this.basic = false
        },

        startComputing (id) {
          this[`loading${id}`] = true
          this[`percentage${id}`] = 0
          this[`interval${id}`] = setInterval(() => {
            this[`percentage${id}`] += Math.floor(Math.random() * 8 + 20)
            if (this[`percentage${id}`] >= 100) {
              clearInterval(this[`interval${id}`])
              this[`loading${id}`] = false
            }
          }, 700)
        },

        beforeDestroy () {
          clearInterval(this.interval1)
          clearInterval(this.interval2)
        },

        reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        this.nameFile = ''
      },

      changeFlag(Taskname, id) {

        let self = this

        self.startComputing(id)

        etl.changeFlag(Taskname).then(function (result) {
          return result;
        }).catch(function (err) {
          console.log(err)
        });
      },

      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

        history.saveHistory(window, this.$ls.get("username"), this.nameFile, 'Monitoring Berita Harian' ).then(function (images) {
          this.basic = false
          return images;
        }).catch(function (err) {
          console.log(err)
        });

        uploadDataManual(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });

          
      },

      filesChange(fieldName, fileList) {
        
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            let newNameFile = this.nameFile + '.xlsx'
            formData.append(fieldName, fileList[x], newNameFile);
          });

        // save it

        this.waitedFormData = formData
      },

      submit(waitedFormData) {
        
        this.save(waitedFormData);
        this.closePopUp();
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        this.nameFile = ''
      }
        
    },

    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      },
      getImage() {
        images.getAllImage(window, this.id).then(function (images) {
          return images.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      },

      getData() {
        const self = this;

        etl.getETLDatas(window).then(function (result) {
            return result;
        }).then(function (datas) {
            self.data = datas;
            return datas;
        }).catch(function (err) {
            console.log(err)
        });
      }
    },

    beforeCreate() {
        const self = this;

        etl.getETLDatas(window).then(function (result) {
            return result;
        }).then(function (datas) {
            self.data = datas;
            return datas;
        }).catch(function (err) {
            console.log(err)
        });
  },
   mounted() {
      this.reset();
    },
}
</script>