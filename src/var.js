// export const Url = 'http://lapi.se';
export const Url = 'http://45.76.86.13';


function initialState(){

	return {

		products:[],
		cart:[],
		ordnr: null,
		loading:false,
		transaction:'',
		message:true,
		ordnr: '',
		adress:{},
		totalSum:0,
		itemsincart:0 
	}
}

export default {
	state: initialState
}