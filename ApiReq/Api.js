const requestUrl = `https://api.github.com/users/hiteshchoudhary`
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
   console.log(xhr.readyState);
   if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      // send in string used parse it convert string to data formet 
      console.log(typeof data);
      console.log(data.followers);
   }
}


xhr.send();
