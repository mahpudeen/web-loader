
import * as axios from 'axios';

const BASE_URL_KSSK = 'https://exist.ojk.go.id/api/kssk';
const BASE_URL_NEWS = 'https://exist.ojk.go.id/api/news';
const BASE_URL_RDKB = 'https://exist.ojk.go.id/api/rdkb';
const BASE_URL_RDKM = 'https://exist.ojk.go.id/api/rdkm';

function upload(formData,id) {
  const url = `${BASE_URL}/${id}/upload`;
  const containerUrl = `${BASE_URL}`;
    return axios.post(containerUrl, { name : id } )
    .then(function (res) {
      return axios.post(url, formData)
    }).then(x => x.data)
    // add url field
    .then(x => x.map(img => Object.assign({},
      img, { url: `${BASE_URL}/images/${img.id}` })));
}

function uploadKSSK(formData) {
    const url = `${BASE_URL_KSSK}/kssk/upload`;
    return axios.post(url, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${BASE_URL_KSSK}/images/${img.id}` })));
  }

  function uploadNews(formData) {
    const url = `${BASE_URL_NEWS}/news/upload`;
    return axios.post(url, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${BASE_URL_NEWS}/images/${img.id}` })));
  }

  function uploadRDKB(formData) {
    const url = `${BASE_URL_RDKB}/rdkb/upload`;
    return axios.post(url, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${BASE_URL_RDKB}/images/${img.id}` })));
  }

  
  function uploadRDKM(formData) {
    const url = `${BASE_URL_RDKM}/rdkm/upload`;
    return axios.post(url, formData)
      .then(x => x.data)
      // add url field
      .then(x => x.map(img => Object.assign({},
        img, { url: `${BASE_URL_RDKM}/rdkm/${img.id}` })));
  }
export { upload, uploadKSSK, uploadNews, uploadRDKB, uploadRDKM }
