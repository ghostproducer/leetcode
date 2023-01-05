/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // console.log(list1);
    // console.log(list2);

    let result_array = [];

    for (let i=0; i< list1.length; i++) {
        console.log(list1[i])

        for ( let j=0; j < list2.length; j++) {

            // console.log(list2[j])
            if (list2[j] >= list1[i]) {
                result_array.push(list2[j])
            }
        }

    }

    console.log(result_array)

};


mergeTwoLists([1,2,4], [1,3,4]);