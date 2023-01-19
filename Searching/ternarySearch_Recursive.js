function ternarySearch(arr, key, low, high)
{
	while(low < high)
	{
		let mid1 = low + Math.floor((high - low)/3);
		let mid2 = high - Math.floor((high-low)/3);

		if(arr[mid1] == key)
			return mid1;
		if(arr[mid2] == key)
			return mid2;

		if(key > arr[mid1])
			return ternarySearch(arr, key, mid1+1, high);
		else
			if(key < arr[mid2])
				return ternarySearch(arr, key, low, mid2-1);
		else
			return ternarySearch(arr, key, mid1+1, mid2-1);
	}
	return -1;
};

let arr = [10,20,30,40,50,60,70];
let key = 40;

let res = ternarySearch(arr, key, 0, (arr.length)-1);

(res == -1) ? console.log("Element not found") :
	console.log(key + " found at position " + res);
