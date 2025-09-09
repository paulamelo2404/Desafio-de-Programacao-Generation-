export class ArraySimples<T> {
    constructor(private array: T[]) {}

    removeDuplicados(): T[] {
        return this.array.filter((item, index) => this.array.indexOf(item) === index);
    }
}