import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QForm,
  QInput,
  QUploader,
  QTable,
  QTh,
  QTr,
  QTd,
  QCard,
  QCardSection,
  QCardActions,
  QFooter,
  Notify,
  QToggle,
  QSelect,
  QDialog,
  QCheckbox,
  QSlider
} from 'quasar'

Vue.use(Quasar, {
  config: {
    notify: { /* Notify defaults */ }
  },
  components: {
    QLayout,
    QFooter,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QUploader,
    QTable,
    QTh,
    QTr,
    QTd,
    QCard,
    QCardSection,
    QCardActions,
    QToggle,
    QSelect,
    QDialog,
    QCheckbox,
    QSlider
  },
  directives: {
  },
  plugins: {
    Notify
  }
 })