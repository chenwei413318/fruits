import {GETTITLE,SETTITLE} from './const'

let actions = {
	[GETTITLE] ({commit}){
		if(localStorage.title){
			commit(SETTITLE,localStorage.title);return
		}
		setTimeout( ()=> {
			let title="果园优选"
			commit(SETTITLE,title)
			localStorage.title = title
		},1000)
	}
}
export default actions