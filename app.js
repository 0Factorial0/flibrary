//Da Function
async function renderJson(listID, dataArray) {
  //Sort Array
  dataArray.sort((a,b) => {
    //Sort Everything By Name
    const nameComparison = a.name.localeCompare(b.name);
    //-1: a Comes First
    //0: Both Are Same
    //1: b Comes First
    //console.log(nameComparison, a.name, b.name);
    //if Names Are Not Same Return
    if(nameComparison !== 0){
      return nameComparison;
    }
    //if Names Are Same
    //Sort By Issue Number When Available
    if (a.issues === undefined || b.issues === undefined) {
      return 0;
    }
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
renderJson('movielist', moviesData);
renderJson('serielist', seriesData);
renderJson('comiclist', comicsData);
renderJson('booklist', booksData);
//coding since 9183