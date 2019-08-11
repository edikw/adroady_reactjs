import axios from 'axios';

export function doSaveDataLogin(data){
    return{
        type: 'SAVE_DATA',
        data: data
    }
}

export function doSaveDataChart(data){
    return{
        type: 'SAVE_DATA',
        data: data
    }
}

export function doSaveDataMaps(data){
    return{
        type: 'SAVE_DATA',
        data: data
    }
}

export function getDataLogin() {
  return dispatch => {
    return axios.get('https://reqres.in/api/login').then(res => {
      dispatch(doSaveDataLogin(res))
      return res
    });
  }
}

export function getDataChart() {
	return dispatch => {
	    return axios.get('https://randomuser.me/api/nat=NZ&results=50&inc=gender,name,location,nat&seed=abcde').then(res => {
		    dispatch(doSaveDataChart(res))
		    return res
	    });
  }
}

export function getDataMaps() {
	return dispatch => {
	    return axios.get('https://randomuser.me/api/?nat=NZ&results=50&inc=name,location,email,nat').then(res => {
		    dispatch(doSaveDataMaps(res))
		    return res
	    });
  }
}