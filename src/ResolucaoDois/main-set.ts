import * as readlineSync from 'readline-sync';
import { ArrayComSet } from './ArrayComSet';

function main() {
    const entrada = readlineSync.question('Digite os elementos (separados por virgula):\naperte enter para concluir! ');
    
    const arrayOriginal = entrada.split(',').map(item => {
        const num = Number(item);
        return isNaN(num) ? item.trim() : num;
    });

    const arrayComSet = new ArrayComSet(arrayOriginal);
    const arraySemDuplicatas = arrayComSet.removeDuplicados();
    
    console.log('\nArray original:', arrayOriginal);
    console.log('Array sem duplicatas (usando Set):', arraySemDuplicatas);
}

main();