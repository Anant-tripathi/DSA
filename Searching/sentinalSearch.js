function sentinalSearch(arr, n, key)
{
	const last = arr[n-1];
	arr[n-1] = key;
	let i=0;
	while(arr[i] != key)
		i++;
	arr[n-1] = last;
	if((i<n-1) || (arr[n-1] === key))
		console.log(key + " is found at index " + i);
	else
		console.log("Element not found");
}

let arr = [10,20,180,58,058,4,2,045,9756,0058];
let key = 0058;
let n = arr.length;

sentinalSearch(arr, n, key);
