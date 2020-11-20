import axios from 'axios';

const fetchAll = async () => {
  const {data} = await axios.get('/earls');
  return data;
}

const fetchById = async (earlId) => {
  const {data} = await axios.get(`/earls/${earlId}`);
  return data;
}

const createEarl = async (target) => {
  const { data } = await axios.post('/earls', {
    target, 
  });
  return data;
};

export {
  fetchAll,
  fetchById,
  createEarl,
}