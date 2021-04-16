export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const arrayToList = (arr: Array<number>): ListNode => {
    let head = new ListNode();
    let last = head;

    for (let i = 0; i < arr.length; i++) {
        let current = new ListNode(arr[i])
        if (i === 0) {
            head = current;
        } else {
            last.next = current;
        }
        last = current;
    }
    return head;
}

export const listToArray = (list: ListNode | null): number[] => {
    let head: ListNode | null = list;
    let array = []
    while (head) {
        array.push(head.val)
        head = head.next;
    }
    return array;
}
