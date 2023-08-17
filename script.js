//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp={ };
let arr2=[];
for(let i=0;i<touristSpots.length;i++){
	let words=touristSpots[i].split(" ");
	let finalString="";
	for(let i=0;i<words.length;i++){
		let currwords=words[i].toLowerCase();
		if(currwords !=='an' && currwords!=='a' && currwords!=='the'){
			finalString+=words[i]+" ";
		}
	}
	let articlelessStr=finalString.trim();
	mp[touristSpots[i]]=articlelessStr;
	arr2.push(articlelessStr);
}
arr2.sort();
console.log(arr2);
