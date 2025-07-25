import axios from "axios";


const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000, // Set a timeout of 10 seconds
//   withCredentials: true, // Include credentials in requests 
});


axios.interceptors.request.use(function (config) {

    // Do something before request is sent

    return config;
    return Promise.reject(new Error('Request failed'));
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
      console.log('Response received successfully:', response.data);
    } else {
      console.warn('Unexpected response status:', response.status);
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error('Error in response:', error);
    return Promise.reject(error);
  });

export default instance;