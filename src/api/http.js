import axios from 'axios'

export default axios.create({
	baseURL: 'https://faceprog.ru/reactcourseapi',
	timeout: 10000
});