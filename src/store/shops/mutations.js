import { ADDGOOD } from './const'
let mutations = {
	[ADDGOOD] (state,{id,name,price,num=1,type=1,volume,photo}) {
		let isHas = state.cars.some((good,i) =>{
			if(id== good.id){ //遍历cars
				good.num += type==1?num:-num//type判断是否为加
				if(good.num<1){
					state.cars.slice(i,1)
				}
				return true
			}else{
				return false
			}
		})
		if(!isHas){
			state.cars.push({
				id,name,price,num,volume,photo
			})
		}
		console.log(state.cars)
		localStorage.cars=JSON.stringify(state.cars)
	},
}
export default mutations