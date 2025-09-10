export class ArrayComSet<T> {
    constructor(private array: T[]) {}

    removeDuplicados(): T[] {
        // Usa Set para remover duplicatas e converte de volta para array
        return [...new Set(this.array)];
    }
}