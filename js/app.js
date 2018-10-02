var setint;
window.onload = function()
  {
    displaytbl();
  };

function clrtbl()
{
  var clrtbl = document.getElementById("tb");
      var cleartr = clrtbl.getElementsByTagName("tr");
      var cl = cleartr.length;
             
      for(var c=cl-1;c>-1;c--)
      {
          clrtbl.removeChild(cleartr[c]);
      }
  
}

window.onload = function()
  {
    displaytbl();
  };

  function displaytbl() 
  {
    clrtbl()
  var tbl = document.getElementById("tab");
  var tblbody = document.getElementById("tb");

    for (var i=0; i<10; i++)
     {
      var tab = TABLE_DATA[i];
      var row = document.createElement("tr");
    
    for (var j=0; j<4; j++)
        {
        var prop = ["id", "name", "thumbnailUrl", "price"];
        var cell = document.createElement("td");
        cell.innerHTML = tab[prop[j]];
        row.appendChild(cell);
        tblbody.appendChild(row);
        }

      tbl.appendChild(tblbody);
     }

   }

   function strshuffle()
     {
      setint = setInterval(function()
      {
     for (var g = TABLE_DATA.length-1; g>0; g--)
     {
          var p = Math.floor(Math.random() * (g + 1));
          var shfl = TABLE_DATA[g];
          TABLE_DATA[g] = TABLE_DATA[p];
          TABLE_DATA[p] = shfl;
      }
     displaytbl();
    },300);

  }
  function stpshuffle()
  {
    clearInterval(setint);
  }

  function compprice(a,b)
  {
   return parseFloat(b.price)-parseFloat(a.price)
  
  }

function compID(a,b)
{
 return parseFloat(b.id)-parseFloat(a.id)
}

function sorter(array,comp) 
    
  {
    array.sort(comp);
    var top,bot;
    for(var i=0;i<10;i++)
      {    
         var a=array[i].price;
         var b=array[i+1].price; 
         if(b==a)
          { 
           top=i;
           for(var j=i;j<10;j++)
           {   
              var m=a;
              var n=array[j+1].price;
              if(m!=n)
              {
                  bot=j+1;
                  break;           
              }
           }
            break;
          } 
      }
    array=partialSort(array,top,bot);
    displaytbl();
  }

function partialSort(array,start,end)
{
var presorted=array.slice(0,start);
var postsorted=array.slice(end);
var sorted=array.slice(start,end).sort(compID);
array.length=0;
array.push.apply(array,presorted.concat(sorted).concat(postsorted));
return array
}

//partial sort