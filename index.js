// Your code here
function saturdayFun()
{
    return 'This Saturday, I want to roller-skate!'
}

function saturdayFun(sleep)
{
    if(sleep === undefined)
    {
      return 'This Saturday, I want to roller-skate!';
    }
    else
    return 'This Saturday, I want to ' + sleep + '!';
}
const mondayWork = function(arg = 'go to the office'){
    return 'This Monday, I will ' + arg + '.';
}
function wrapAdjective(des)
{
    if(des === undefined) des = '*';
    return function(name){
        if(name === undefined)
        name="special";
        return 'You are ' + des + name + des + '!';
    }
}
const encouragingPromptFunction = wrapAdjective("!!!");