import { SETGROUP } from './const'
import { CLASSID } from './const'
import { CLASSIDTHREE } from './const'
let mutations = {
	[SETGROUP] (state,groups) {
		state.groups = groups
	},
	[CLASSID] (state,class2Id) {
		state.class2Id = class2Id
	},
	[CLASSIDTHREE] (state,class3Id) {
		state.class3Id = class3Id
	}
}
export default mutations