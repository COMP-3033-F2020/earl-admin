import axios from 'axios';

const login = async (identity, password) => {
  try {
    const { data } = await axios.post('/login', {
      identity,
      password,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const fetchAll = async () => {
  const { data } = await axios.get('/earls');
  return data;
};

const fetchById = async (earlId) => {
  const { data } = await axios.get(`/earls/${earlId}`);
  return data;
};

const createEarl = async (target) => {
  const { data } = await axios.post('/earls', {
    target,
  });
  return data;
};

export { login, fetchAll, fetchById, createEarl };
