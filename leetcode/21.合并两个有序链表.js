/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 两个边界条件
    if (list1 === null) {
        return list2
    } else if (list2 === null) {
        return list1
    } else if (list1.val >= list2.val) {
        // 递归指定list2的next结点
        list2.next = mergeTwoLists(list1, list2.next)
        // 成功之后返回
        return list2
    } else {
        // 递归指定list1的next结点,
        list1.next = mergeTwoLists(list1.next, list2)
        // 成功之后返回
        return list1
    }
};