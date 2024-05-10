function createFrog(options) {
    const _opts = {
        name: options.name,
        sex: options.sex,
        age: options.age
    }

    const foodsEaten = [];
    const wordsSpoken = [];

    return {
        getOption(key) {
            return _opts[key];
        },
        getFoodsConsumed() {
            return foodsEaten;
        },
        eat(food) {
            console.log(`Frog "${_opts.name} is eating: ${food.name} (${food.type})`);
            foodsEaten.push(food);
        },
        talk(words) {
            console.log(words);
            wordsSpoken.push(...words)
        },
    }
}

export default createFrog;

const mikeTheFrog = createFrog({name: 'mike', sex: 'male', age: 1});
const sallyTheOtherFrog = createFrog({name: 'sally', sex: 'famale', age: 4});
const michelleTheLastFrog = createFrog({ name: 'michelle', sex: 'female', age: 10});

