const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    const answer = document.querySelector('.answer');
    const value = document.querySelector('.input').value;
    let distance = (value * 16094)/10;

    setDefault()
    answer.innerText = distance;
    console.log(distance);

    if(value < 0){
        alert('invalid distance');
        answer.innerHTML = 0;
    };

});




