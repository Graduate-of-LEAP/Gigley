import axios from 'axios';

export const apiGig = axios.create({
  baseURL: 'https://gigley.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
