/*

Part 1
var h1 = document.getElementById('head')

var p = document.getElementsByClassName('p')

var input = document.getElementById('input')

var h3 = document.getElementsByTagName('h3')

var hint = document.getElementById('hint1')

h1.oncopy = function()
{
    h1.innerHTML = "u copy me"
}


p[0].onclick = function()
{
    p[0].innerHTML = "this click on paragraph"
}


input.onkeyup = function()
{
    hint.style.display = 'inline-block';

    if(input.value.length > 3)
    {
        hint.style.display = 'none';
    }
}

Part 1 hint
*/

// part 2 dollar converter

/* 
var dollar = document.getElementById('dollar')
var convert = document.getElementById('convert')
var result = document.getElementById('result')

convert.onclick = function()
{
    result.innerHTML = (dollar.value * 15) + 'L.E'
} 

part 2 dollar converter

*/

// part 3 calculator
/* 
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')

var plus = document.getElementById('plus')
var min = document.getElementById('min')
var mul = document.getElementById('mul')
var div = document.getElementById('div')

var res = document.getElementById('res')


plus.onclick = function()
{
    res.innerHTML =  parseInt(num1.value)  + parseInt(num2.value)
}
min.onclick = function()
{
    res.innerHTML = num1.value - num2.value
}
mul.onclick = function()
{
    res.innerHTML = num1.value * num2.value
}
div.onclick = function()
{
    res.innerHTML = num1.value / num2.value
}

*/

// part 4 dropdown

/* 
var drop = document.getElementById('drop')

var main = document.getElementById('main')


main.onmouseover = function()
{
    drop.style.display = 'block';
}


drop.onmouseleave = function()
{
    drop.style.display = 'none';
}

 */

 // part5 create elemetns 

/* 
var tasks = document.getElementById('tasks')
var task = document.getElementById('task')
var add = document.getElementById('add')

add.onclick = function()
{
    var li = document.createElement('li');
    li.innerHTML = task.value;

    tasks.appendChild(li);
    task.value = '';
    li.onclick = function()
    {
        li.classList.toggle('done')
    }
}

 */

// part 6 show password

var close = document.getElementById('close')
var open = document.getElementById('open')
var pass = document.getElementById('pass')


close.onclick = function()
{
    close.style.display = 'none';
    open.style.display = 'inline';
    pass.type = 'text';
}


open.onclick = function()
{
    open.style.display = 'none';
    close.style.display = 'inline';
    pass.type = 'password';

}