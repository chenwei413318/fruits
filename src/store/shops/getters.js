const getters = {
	all_info (state) {
		let info = {all_num:0,all_price:0,all_weight:0}
		state.cars.forEach( good=>{
			info.all_num +=good.num
			info.all_price+=good.num*good.price
			info.all_weight+=good.num*parseInt(good.volume)
		});
		return info
	}
}
export default getters