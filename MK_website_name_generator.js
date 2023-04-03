var gerar = document.getElementById('gerar');
var fake_load = document.getElementById('fake_load');
var result = document.getElementById('result');
  const names = fetch("https://raw.githubusercontent.com/Mini-Kraken/api-random_name/main/api.json")
  .then((response) => response.json())
  .then((user) => {
    return user;
  });

const resultado = () => {
  names.then((a) => {
    const m = a.m
    const f = a.f
    const t = m.concat(f)
    const l = a.l
    console.log(colectConfig())
    switch (colectConfig()) {
      case 't':
        p = t
        break;
      case 'm':
        p = m
        break;
      case 'f':
        p = f
        break;
      default:
        p = t
        break;
    }
    console.log(p)
    //crie uma lista contendo 5 nomes aleatórios que contem dentro de cada elemento um nome e um sobrenome
    const list = []
    for (let i = 0; i < 5; i++) {
      const name = p[Math.floor(Math.random() * p.length)]
      const lastname = l[Math.floor(Math.random() * l.length)]
      list.push(`${name} ${lastname}`)
    }
    showResult(list)
    console.log(list)


  });
};


function showResult(names) {
  //exiba o result
    result.classList.remove('d-none');
    //escreva names em result 
    result.innerHTML = names.join('<br><br>')

}




function restart() {
  //oculte tudo no inicio da função
    result.classList.add('d-none');
    fake_load.classList.add('d-none');
}

function colectConfig() {
  //colete os elementos customRadio1, customRadio2 e customRadio3
    var t = document.getElementById('customRadio1');
    var m = document.getElementById('customRadio2');
    var f = document.getElementById('customRadio3');
    var sex = t.checked ? 't' : m.checked ? 'm' : f.checked ? 'f' : 't';
    return sex
}




function start() {
    restart()
  //
    //exiba o fake_load
    fake_load.classList.remove('d-none');
    //espere 1 segundo e execute um console.log oi
    setTimeout(() => {
      resultado();
      fake_load.classList.add('d-none');
        //execute a função resultado
        resultado()
    }, 500);
}



//quando o botão gerar for clicado, execute a função start
gerar.addEventListener('click', start);



                

