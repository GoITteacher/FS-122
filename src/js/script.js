import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';
//!======================================================

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

//!======================================================

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
// fetch('https://jsonplaceholder.typicode.com/posts?userId=2');

// function getPosts(id) {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const endPoint = '/posts';
//   const params = new URLSearchParams({
//     userId: id,
//   }); //userId=1&username='Vasya'

//   const url = `${baseUrl}${endPoint}?${params}`;

//   return fetch(url).then(res => res.json());
// }

// getPosts(5).then(arr => {
//   console.log(arr);
// });

//!======================================================

// function fetchPosts(query) {
//   const BASE_URL = 'https://newsapi.org/v2';
//   const END_POINT = '/everything';
//   const params = new URLSearchParams({
//     q: query,
//   });

//   const headers = {
//     'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
//   };
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   return fetch(url, { headers }).then(res => res.json());
// }

// fetchPosts('Tesla');
//!======================================================
