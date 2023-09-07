const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);
const hasS = names.map(name => name.toLowerCase().includes('s'));
console.log(hasS);
const provinceOfIndividual = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});
  console.log(provinceOfIndividual);