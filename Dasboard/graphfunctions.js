/*
Calcualates the maximum value in the array phone performance data from perfData.js
Parameters: arr is an array of dictionaries, where each dictiary is the performance data for 1 NN
Returns: Integer, largest number in any of the sets
*/
function maxValue(arr) {
  b = []
    console.log(arr.length);
    for (i in arr) {
      var max = 0;
      for (j in arr[i]["data"]) {
        var a = Math.max(arr[i]["data"][j]["q1"], arr[i]["data"][j]["q3"]);
        if (a > max) {
          max = a;
        }
    }
    b.push(max);
  }
  return Math.max.apply(null, b) //.025 * Math.max.apply(null, b)
}
/*
alpha.lab.numericcal.com/graph.html?name=6a477d9dd80543f5c455462d588bfaa1fa340b19a0dd18d28349afec7c0126db&compare=mobilenet_1.0_224

Returns an object with the the contents of the url so they can be used for data obstraction
*/
function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
      queryEnd   = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {}, i, n, v, nv;

  if (query === url || query === "") return;

  for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}

/*
Takes in the SHA for a neuralnetwork and returns an array.
First element of the array is a list of devices
Second element is the performance for each device
*/
function populateData(sha) {
    x = [];
    y = [];
      for (l in sha) {
        if (phonePerformance[sha].hasOwnProperty(l)) {
        //console.log(phonePerformance[sha][l]);
          for (device in phonePerformance[sha][l]) {
            x.push(device);
            //phonePerformance[sha][l][device]);

            //min: honePerformance[sha][l][device][0],
            //max: phonePerformance[sha][l][device][4],
            y.push(
            {
              //min: phonePerformance[sha][l][device][4],
              //max: phonePerformance[sha][l][device][0],
              min: 0,
              max: 0,
              q1: phonePerformance[sha][l][device][3],
              median: phonePerformance[sha][l][device][2],
              q3: phonePerformance[sha][l][device][1],
              outliers: []
              /*
              min: 0,
              max: 0,
              q1: 3,
              median: 5,
              q3: 7,
              outliers: []*/
            });
          }
      }
    }
    return sortbyMedian([x, y]);
    //return 2 Arrays
}

function sortbyMedian(arr) {
    x = arr[0]
    y = arr[1]
    var len = y.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(y[j-1]["median"]>y[j]["median"]){
            var temp = [];
            temp[0] = x[j-1];
            temp[1] = y[j-1];
            x[j-1] = x[j];
            y[j-1] = y[j];
            x[j] = temp[0];
            y[j] = temp[1];
         }
      }
    }
return [x.reverse(), y.reverse()];
}
/*
>>> reverseLookup(1, {"a": 1, "b":2})
"a"

allows the user to enter a value, and find the key for that element
*/
function reverseLookup(value, dict){
for (i in dict) {
  if (dict[i] == value)
    return i;
  }
}
/*
input set
*/
function orderVaribles(correctOrder, currentOrder, values) {
// Returns list values in the format of correctOrder
v = [];
console.log(correctOrder, currentOrder);
for (i in correctOrder) {
for (var j = 0; j < currentOrder.length; j++) {
  if (correctOrder[i] == currentOrder[j]) {
    v.push(values[j]);
    break;
  } else if(j == currentOrder.length - 1) {
    v.push({
      min: 0,
      q1: 0,
      median: 0,
      q3: 0,
      max: 0,
      outliers: []
    });
  }
}
}
return v;
}

/*
Populates the select bar with all of the current NN data
*/

function populateSelect() {
    var select = document.getElementById("Add-Select");
    for (sha in phonePerformance) {
      console.log(sha);
      var option = document.createElement("option");
      if (name != sha) {
        option.text = ID2ModelName[sha];
        select.add(option);
      }
    }
    select.options[0].selected = false;
}

function sortStats(arr) {
    for (var i in arr) {
        a = [arr[i]["q1"], arr[i]["median"], arr[i]["q3"]];
        a = a.sort();
        arr[i] = {
            "max": 0,
            "min": 0,
            "q1": a[0],
            "median": a[1],

        }
    }
}
