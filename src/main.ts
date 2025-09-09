import * as readlineSync from 'readline-sync';
import { ArraySimples } from './ArraySimples';

function main() {
    // Solicita entrada do usuário
    const entrada = readlineSync.question('Digite os elementos do array (separados por virgula) n\
        aperte enter para concluir: ');
    
    // Converte string para array (preservando tipos)
    const arrayOriginal = entrada.split(',').map(item => {
        // Tenta converter para número se possível
        const num = Number(item);
        return isNaN(num) ? item.trim() : num;
    });

    // Cria instância da classe
    const arraySimples = new ArraySimples(arrayOriginal);
    
    // Remove duplicatas
    const arraySemDuplicatas = arraySimples.removeDuplicados();
    
    // Exibe resultados
    console.log('\nArray original:', arrayOriginal);
    console.log('Array sem duplicatas:', arraySemDuplicatas);
}

main();