let victimDataSource = name => {
    let victimsByName = {
        'John': {
            name: 'John',
            surname: 'Doe',
            age: '99',
            jobTitle: 'Victim'
        },
        'Jennifer': {
            name: 'Jennifer',
            surname: 'Nicker',
            age: '21',
            jobTitle: 'Artist'
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (victimsByName.hasOwnProperty(name)) {
                resolve(victimsByName[name]);
            } else {
                reject('unknown victim');
            }
        }, 1000);
    });
}

let crimeDataSource = surname => {
    return new Promise((resolve, reject) => {
        let crimeBySurname = {
            'Doe': {
                title: 'dank memes',
                place: '9gag'
            },
            'Nicker': {
                title: 'robbery',
                place: 'NYC'
            }
        };

        setTimeout(() => {
            if (crimeBySurname.hasOwnProperty(surname)) {
                resolve(crimeBySurname[surname]);
            } else {
                reject('unknown surname');
            }
        }, 500);
    });
}

let loadVictimData = name => new Promise(resolve => {
    victimDataSource(name).then(victimData => {
            crimeDataSource(victimData.surname)
                .then(crimeData => {
                    let {
                        name,
                        surname,
                        jobTitle,
                        age
                    } = victimData;
                    let {
                        title,
                        place
                    } = crimeData;
                    resolve(`${name} ${surname}(${jobTitle}, ${age}) suffered from ${title} in ${place}.`);
                })
        })
        .catch(error => console.log(error));
})

/**
 * Output: John Doe(Victim, 99) suffered from dank memes in 9 gag.
 */
loadVictimData('John').then(msg => console.log(msg));
/**
 * Output: Jennifer Nicker(Artist, 21) suffered from robbery in NYC.
 */
loadVictimData('Jennifer').then(msg => console.log(msg));
/**
 * Output: Unhandled Promise rejection: unknown victim
 * or familiar error msg
 */
loadVictimData('Jss').then(msg => console.log(msg));