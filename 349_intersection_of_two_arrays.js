/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    // let bigArray = [];
    // let shortArray = [];
    // let intersection = [];
    //
    //
    // if (nums1.length <= nums2.length) {
    //     shortArray = nums1;
    //     bigArray = nums2;
    // } else {
    //     shortArray = nums2;
    //     bigArray = nums1;
    // }
    //
    // for (let i=0; i < shortArray.length; i++) {
    //     for (let j=0; j< bigArray.length; j++) {
    //         if (shortArray[i] === bigArray[j] && !intersection.includes(shortArray[i])) {
    //             intersection.push(shortArray[i])
    //         }
    //     }
    // }

    const set1 = new Set(nums1);
    const set2  = new Set(nums2);

    let intersection = new Set();
    set1.forEach(number => {
        if (set2.has(number) && !intersection.has(number)) {

            intersection.add(number)

        }
    })

    return Array.from(intersection);
};

console.log(intersection([1,2,2,1], [2,2]));



