function* func()
{
    yield 1;
    yield 2;
    yield 3;
    yield " -Geeks ";


}
let obj ='';
// function calling
for(const i of func ()){
    obj = obj + i;
}


console.log(
    obj
)

// Implicit binding - this keyword

const person ={
    name: 'john',
    age:23,
    display: function()
    {
        return 'My  name  is ' + this.name + ' and  I  am ' + ' years  old';
    }
}

console.log(person.display());