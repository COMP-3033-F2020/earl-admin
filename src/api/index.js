import axios from 'axios';

const fetchAll = async () => {
  const {data} = await axios.get('http://localhost:3001/earls');
  return data;
}

const fetchById = async (earlId) => {
  const {data} = await axios.get(`http://localhost:3001/earls/${earlId}`);
  return data;
}

export {
  fetchAll,
  fetchById,
}