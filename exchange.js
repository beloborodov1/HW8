function exchange(value, num, valueNew){

if (value == 'USD' && valueNew == 'USD')
return (num);
else if(value == 'USD' && valueNew == 'UAH')
return (parseInt(num)*27.62);
else if (value == 'USD' && valueNew == 'EUR')
return (parseInt(rez)*0.88);

else if (value == 'EUR' && valueNew == 'EUR')
return (num);
else if (value == 'EUR' && valueNew == 'USD')
return (parseInt(num)*1.14);
else if (value == 'EUR' && valueNew == 'UAH')
return (parseInt(num)*31.78);

else if (value == 'UAH' && valueNew == 'UAH')
return (num);
else if(valueNew == 'USD' && value == 'UAH')
return (parseInt(num)/27.62);
else if (valueNew == 'EUR' && value == 'UAH')
return (parseInt(num)/31.78);
}

alert(exchange(
    prompt ('Укажите пожалуйста тип вашей валюты (USD, EUR, UAH)'),
    prompt ('Введите плз кол-во '),
    prompt ('Укажите пожалуйста тип валюты которую хотите получить (USD, EUR, UAH)'),
));