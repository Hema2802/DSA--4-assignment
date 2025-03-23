

// trapping rain water   
//Time limit exceeded

/*
function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let totalWater = 0;

    for (let i = 0; i < n; i++) {
        let leftMax = 0, rightMax = 0;

        
        for (let j = 0; j <= i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }

        
        for (let j = i; j < n; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        
        totalWater += Math.min(leftMax, rightMax) - height[i];
    }

    return totalWater;
}


console.log("The amount of water trapped is :",trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
*/

// other method
function trap(height) {
    let n = height.length;
    

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let totalWater = 0;

    
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    for (let i = 0; i < n; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return totalWater;
}


console.log("The amount of water trapped is :",trap([0,1,0,2,1,0,1,3,2,1,2,1])); 