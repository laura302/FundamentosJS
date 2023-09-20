function wrapping(gifts) {
  /*
    const envueltos = [];
    for(const gift of gifts){
      const tapaSuperior = '*'.repeat(gift.length + 2);
      const tapaInferior = '*'.repeat(gift.length + 2);
      envueltos.push('${ tapaSuperior }\n*$( gift )*\n${ tapaInferior }')
    }

    return envueltos;
    */
   const envueltos = gifts.map(gifts =>{
    const tapas ='*'.repeat(gifts.length +2);
    return '${tapas }\n*${ gift }*\n$( tapas )';
   });
   return '${ tapas } \n*${ gift }*\n$( tapas}';
  }

  

  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)

  console.log(wrapped[2])