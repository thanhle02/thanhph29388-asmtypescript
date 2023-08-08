import axios from 'axios';

interface User {
    name: string,
    email: string;
    password: string;
}

const API_BASE_URL = 'http://localhost:3000';

export const createUser = async (user: User) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
export const checkAccountExists = async (user: User) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, user);
        return response.data;
    } catch (error) {
        throw error;
    // console.error('Có lỗi xảy ra:', error.message);

}
const response = await axios.post(`${API_BASE_URL}/users`, user);
if (response.status === 200) {
    const result = response.data;
    if (result.status === 'success') {
        console.log('Tài khoản hợp lệ!');
    } else {
        console.log('Tài khoản không hợp lệ.');
    }
} else {
    console.log('Có lỗi xảy ra khi gọi API.');
}
  }




 
// # Sử dụng hàm check_account để kiểm tra tài khoản
//check_account('username', 'password')
// 

export const signIn = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users?name=${name}&email=${email}&password=${password}`);
        return response.data[0];
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};
