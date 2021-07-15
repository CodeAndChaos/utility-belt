export class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
export const arrayToList = (arr) => {
    let head = new ListNode();
    let last = head;
    for (let i = 0; i < arr.length; i++) {
        let current = new ListNode(arr[i]);
        if (i === 0) {
            head = current;
        }
        else {
            last.next = current;
        }
        last = current;
    }
    return head;
};
export const listToArray = (list) => {
    let head = list;
    let array = [];
    while (head) {
        array.push(head.val);
        head = head.next;
    }
    return array;
};
//# sourceMappingURL=DataList.js.map