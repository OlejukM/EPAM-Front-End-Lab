let btn = document.querySelector('input[type="button"]');
btn.addEventListener('click', waterOrEarth);
let water = document.getElementById('water');
let land = document.getElementById('land');
let form = document.querySelector('form');
let loader = document.getElementById('loader');

const http = {
    get: function (link) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', link);
            xhr.onload = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                    console.log('Something went wrong');
                    loader.style.display = 'none';
                }
            };
            xhr.send();
        });
    }
};

function waterOrEarth() {
    let latitude = document.querySelector('input[name=latitude]').value;
    let longitude = document.querySelector('input[name=longitude]').value;
    let link = `https://api.onwater.io/api/v1/results/${latitude},${longitude}`;
    let result = http.get(link);
    loader.style.display = 'block';
    result.then((value) => {
        if (!value.water) {
            form.style.display = 'none';
            land.style.display = 'block';
        } else {
            form.style.display = 'none';
            water.style.display = 'block';
        }
    }).catch((e) => {
        console.log(e);
    });
}