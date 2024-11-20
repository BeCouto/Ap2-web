function formatarNome(nome) {
    return nome.toLowerCase() 
              .split(' ') 
              .map(palavra => palavra.charAt(0).toUpperCase() + palavra.substring(1)) 
              .join(' '); 
}