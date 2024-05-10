import createFrog from "./frogManger.js";

const api = {
    fetchFrogs: function() {
        return Promise.resolve([
            { id: 1, name: 'mike', sex: 'male', age: 1},
            { id: 2, name: 'sally', sex: 'famle', age: 2},
            { id: 3, name: 'michelle', sex: 'female', age: 9},
        ])
    },
    saveToDb: function(frogs) {
        console.log(`Saving ${frogs.length} frogs to our database...`);
        return Promise.resolve();
    }
}

async function init() {
    try {
        const frogs = await api.fetchFrogs();
        return frogs.map(data => createFrog(data));
    } catch(error) {
        console.error(error);
        throw error;
    }
}

function createFrogsManger() {
    const frogs = [];

    return {
        addFrog(frog) {
            frogs.push(frog);
            return this;
        },
        getFrogs() {
            return frogs;
        },
        getMaleFrogs() {
            return frogs.filter(frog => {
                return frog.getOption('sex') === 'male';
            })
        },
        getFemaleFrogs() {
            return frogs.filter(frog => {
                return frog.getOption('sex') === 'female';
            })
        },
        feedFrogs(food) {
            frogs.forEach(frog => {
                frog.eat(food)
            })
            return this;
        },
        save: function() {
            return Promise.resolve(api.saveToDb(frogs))
        }
    }
}

function Food(name, type, calories) {
    this.name = name;
    this.type = type;
    this.calories = calories;
}

const fly = new Food('fly', 'insect', 1.5);
const dragonfly = new Food('dragonfly', 'insect', 4);
const mosquito = new Food('mosquito', 'insect', 1.8);
const apple = new Food('apple', 'fruit', 95);

init()
    .then(frogs => {
        const frogsManager = createFrogsManger();
        frogs.forEach(frog => {
            frogsManager.addFrog(frog)
        })

        const genders = {
            males: frogsManager.getMaleFrogs(),
            females: frogsManager.getFemaleFrogs()
        }

        frogsManager
            .feedFrogs(fly)
            .feedFrogs(mosquito)
            .save()
        console.log(`We reached the end and our database is now updated with new data!`);
        console.log(`Fed: ${genders.males.length} male frogs and ${genders.females.length} female frogs`);

        frogsManager.getFrogs().forEach(frog => {
            console.log(`Frog ${frog.getOption('name')} consumed:
                 ${frog.getFoodsConsumed()
                    .map(food => food.name)
                    .join(',')
                }`);
        })
    })
    .catch(error => {
        console.error(error);
    })