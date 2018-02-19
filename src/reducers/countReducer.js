const counter = (state = {
	count: 600 }, action) => {
	console.log('ACTION IS:', action);
	switch(action.type) {
		case 'INCREMENT':
		  return {
        count: state.count + 1
		  }
		  
		case 'DECREMENT': 
		  return {
		  	count: state.count - 1
		  }
		  
		default: 
		  return state;
	}
}

export default counter;