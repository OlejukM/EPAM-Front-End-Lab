function victimDataSource(name) {
  var victimsByName = {
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

  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      if (victimsByName.hasOwnProperty(name)) {
        resolve(victimsByName[name]);
      } else {
        reject('unknown victim');
      }
    }, 1000);
  });
}

function crimeDataSource(surname) {
  return new Promise(function (resolve, reject) {
    var crimeBySurname = {
      'Doe': {
        title: 'dank memes',
        place: '9gag'
      },
      'Nicker': {
        title: 'robbery',
        place: 'NYC'
      }
    };

    setTimeout(function () {
      if (crimeBySurname.hasOwnProperty(surname)) {
        resolve(crimeBySurname[surname]);
      } else {
        reject('unknown surname');
      }
    }, 500);
  });
}


function loadVictimData(name) {
  return new Promise(function (resolve, reject) {

    try {

      victimDataSource(name).then(victim => {

        return crimeDataSource(victim.surname).then(crime => {

          if (victim && crime) {
            resolve(`${victim.name} ${victim.surname}(${victim.jobTitle}, ${victim.age}) \
suffered from ${crime.title} in ${crime.place}`);
          } else {
            reject('no data found');
          }

        })
      }).catch(error => console.log(error));

    } catch (error) {
      reject(error);
    }

  });
}

/**
 * => implement loadVictimData here <=
 */

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