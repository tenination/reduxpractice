const mooger = (state = {
	moog: 800
}, action) => {
  switch(action.type) {
  	case 'ADD':
  	  return {
        moog: state.moog + 1
  	  }
  	case 'SUBTRACT':
  	  return {
  	  	moog: state.moog - 1
  	  }
  	default: 
		  return state;
  }
}

export default mooger;
