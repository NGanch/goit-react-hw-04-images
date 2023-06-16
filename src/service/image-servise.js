// import axios from "axios";
//     const API_KEY = '35926176-c3a1e4cc9918e3801982283ac';
//     axios.defaults.baseURL = 'https://pixabay.com/api/';
//     axios.defaults.headers.common['AxiosHeaders'] = API_KEY;
//     axios.defaults.params = {
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 12,
//       };
//       export const getImages = async (query, page) => {
         
//         return await axios.get(`search?query=${query}&page=${page}`);

       
//       };
    //--------------------------------------
    import axios from "axios";
 
    axios.defaults.baseURL = 'https://pixabay.com';
  

      export const getImages = async (query, page, abortCtrl ) => {
       
        const API_KEY = '35926176-c3a1e4cc9918e3801982283ac';
        const responce = await axios.get('/api/',{
          signal: abortCtrl.signal,
          params: {
            q: query,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: page,
          },
        });
return responce.data;

      };
    //--------------------------------------
    // import axios from "axios";
    //     const BASE_URL = 'https://pixabay.com/api/';
    //     const API_KEY = '35926176-c3a1e4cc9918e3801982283ac';
    //     export const getImages = async (query, page) => {
    //       return await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`)
       
    //     }
        //--------------------------------------