

// next greater element

let nums1 = [4,1,2];
let nums2 = [1,3,4,2];

let result=[];
for(let n1 of nums1){
    let target=false;
    let greater=-1;
    for(n2 of nums2){
        if(n2==n1){
            target=true;
        }

        if(target && n2>n1){
            greater = n2;
            break;
        }
    }
    result.push(greater);
}
console.log(result);
