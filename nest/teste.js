const str = 'di.dicenter.com.br';
const re = /[^www.]+/s;
const out = re.exec(str);
console.log(out);
