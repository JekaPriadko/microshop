import http from "./http";

export async function load(token){
	let response = await http.get(`/cart/load.php?token=${token}`);
	return response.data;
}