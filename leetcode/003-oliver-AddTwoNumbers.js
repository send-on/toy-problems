/* You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  // create head, set position
  var head = new ListNode(0);
  var pos = head;
  var temp = 0;

  // while l1, l2, or remainder exist, continue
  while (l1 !== null || l2 !== null || temp > 0) {
    pos.next = new ListNode(0);
    pos = pos.next

    // if l1 and l2 exists, add to temp and set to next node
    if (l1 !== null) {
      temp += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      temp += l2.val;
      l2 = l2.next;
    }

    // set current position value
    pos.val = temp % 10

    // set temp to remainder, if > 10, 1
    temp = parseInt(temp / 10)
  }
  return head.next

};