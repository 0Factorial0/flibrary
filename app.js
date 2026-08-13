//Da Function
async function renderJson(listID, dataArray) {
  //Sort Array
  dataArray.sort((a,b) => {
    //Sort By Name
    const nameComparison = a.name.localeCompare(b.name);
    if(nameComparison !== 0){
      return nameComparison;
    }
    //Sort By Issue Number
    const numA = parseInt(a.issues.replace("#", ""), 10);
    const numB = parseInt(b.issues.replace("#", ""), 10);
    return numA - numB;
  });
  //Get List
  const ol = document.getElementById(listID);
  if (!ol || !Array.isArray(dataArray)) return;
  //Get Data And Append
  dataArray.forEach(item => {
    //Make The Row
    const li = document.createElement('li');
    const values = Object.values(item);
    //Add The Data
    values.forEach((val, index) =>{
      const span = document.createElement('span');
      const seperator = index < values.length - 1 ? ' | ' : '';
      span.textContent = val + seperator;
      li.appendChild(span);
    });
    ol.appendChild(li);
  });
}
//Use Data To Load The Lists
renderJson('gamelist', gamesData);
renderJson('comiclist', comicsData);
renderJson('movielist', moviesData);
renderJson('serielist', seriesData);