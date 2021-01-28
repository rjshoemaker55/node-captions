const axios = require('axios').default;

const getData = async () => {
  const res = await axios.get('https://www.googleapis.com/youtube/v3/search?part=hello&', {
    params: {
      key: 'AIzaSyDizZoBrAB-dqDInK577CySjNA5QDy8Tyg',
      part: 
    }
  })
  const data = await res
}
