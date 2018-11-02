const notes = [
    { nome: 'João', nota: 7.8 },
    { nome: 'Pedro', nota: 6.4 },
    { nome: 'João', nota: 8.6 },
    { nome: 'Pedro', nota: 4.8 },
    { nome: 'João', nota: 7.9 },
    { nome: 'Pedro', nota: 5.9 },
    { nome: 'João', nota: 9.3 },
    { nome: 'Pedro', nota: 5.5 }
    ]
    let notaJoao1 = notes.filter(a => a.nome === 'João').reduce((soma, e) => soma + e.nota, 0)
    let notaJoao2 = notes.filter(a => a.nome === 'João').map(e => e.nota).reduce((soma, e) => soma + e, 0)
    
    console.log(notaJoao1.toFixed(2), notaJoao2.toFixed(2));