import axios from 'axios';

axios.defaults.baseURL = 'https://test-back-end-1.herokuapp.com/';

const checkAgeUser = async (body) => {
  console.log(body)
  const { data } = await axios.get(
    `api/users/age`, body
  );
  console.log(data);
  return data;
};

const createUser = async (body) => {
  const { data } = await axios.post(
    `api/users/register`, body
  );
  return data;
};

const loginUser = async (body) => {
  console.log(body)
  const { data } = await axios.get(
    `api/users/login`, body
  );
  return data;
};

const findByEmailUser = async (body) => {
  console.log(body)
  const { data } = await axios.get(
    `api/users/email`, body
  );
  return data;
};

const logoutUser = async (body) => {
  console.log(body)
  const { data } = await axios.get(
    `api/users/login`, body
  );
  return data;
};



export { checkAgeUser, createUser, loginUser, findByEmailUser, logoutUser };