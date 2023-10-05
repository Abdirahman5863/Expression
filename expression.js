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


// Explicit Binding - this  keyword 

function ageVerify(){
    if (this.age > 18) {
        console.log('you are eligible to vote');
        
    }
    else{
        console.log(
            'You are not eligible to vote'
        );

    }

}
const person1 = {age:20};
const person2 = {age:17};
ageVerify.call(person1);
// ageVerify.call(person2);


// Default Binding

const age = 22;
function verifyAge(){
    return this.age;
}
console.log(verifyAge());