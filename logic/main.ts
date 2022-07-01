

function someLogic() : Promise<any> {
	return new Promise((resolve, reject) => resolve('did some logic work'))
}

export {
	someLogic
}

