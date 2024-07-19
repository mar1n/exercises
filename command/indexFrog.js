import createFrog from "./frogManger.js";

// const api = {
//   fetchFrogs: function () {
//     return Promise.resolve([
//       { id: 1, name: "mike", sex: "male", age: 1 },
//       { id: 2, name: "sally", sex: "famle", age: 2 },
//       { id: 3, name: "michelle", sex: "female", age: 9 },
//     ]);
//   },
//   saveToDb: function (frogs) {
//     console.log(`Saving ${frogs.length} frogs to our database...`);
//     return Promise.resolve();
//   },
// };

// async function init() {
//   try {
//     const frogs = await api.fetchFrogs();
//     return frogs.map((data) => createFrog(data));
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

function createFrogsManger() {
  const frogs = [];

  return {
    execute(command, ...args) {
      return command.execute(frogs, ...args);
    }
  }
}

function Command(execute) {
  this.execute = execute;
}

function AddFrogCommand(frog) {
  return new Command(function(frogs) {
    frogs.push(frog);
  })
}

function GetFrogsCommand() {
  return new Command(function(frogs) {
    return frogs;
  })
}

function FeedFrogsCommand(food) {
  return new Command(function(frogs) {
    frogs.forEach(frog => {
      frog.eat(food)
    })
  })
}

function SaveCommand() {
  return new Command(function(frogs) {
    api.saveToDb(
      frogs.map(frog => ({
        name: frog.name,
        gender: frog.gender,
        age: frog.age
      }))
    )
  })
}

function Food(name, type, calories) {
  this.name = name;
  this.type = type;
  this.calories = calories;
}

const mikeTheFrog = createFrog({
  name: 'mike',
  gender: 'male',
  age: 2
});

const sallyTheFrog = createFrog({
  name: 'sally',
  gender: 'female',
  age: 1
});

const frogsManger = createFrogsManger();

frogsManger.execute(new AddFrogCommand(mikeTheFrog));
frogsManger.execute(new FeedFrogsCommand(new Food('apple', 'fruit', 95)));
frogsManger.execute(new FeedFrogsCommand(new Food('fly', 'insect', 1)));
frogsManger.execute(new AddFrogCommand(sallyTheFrog));
frogsManger.execute(new SaveCommand());

frogsManager
      .feedFrogs(fly)
      .feedFrogs(mosquito)
      .save()

const updatedFrogs = frogsManger.execute(new GetFrogsCommand());

// const fly = new Food("fly", "insect", 1.5);
// const dragonfly = new Food("dragonfly", "insect", 4);
// const mosquito = new Food("mosquito", "insect", 1.8);
// const apple = new Food("apple", "fruit", 95);

// init()
//   .then((frogs) => {
//     const frogsManager = createFrogsManger();
//     frogs.forEach((frog) => {
//       frogsManager.addFrog(frog);
//     });

//     const genders = {
//       males: frogsManager.getMaleFrogs(),
//       females: frogsManager.getFemaleFrogs(),
//     };

//     frogsManager.feedFrogs(fly).feedFrogs(mosquito).save();
//     console.log(
//       `We reached the end and our database is now updated with new data!`
//     );
//     console.log(
//       `Fed: ${genders.males.length} male frogs and ${genders.females.length} female frogs`
//     );

//     frogsManager.getFrogs().forEach((frog) => {
//       console.log(`Frog ${frog.getOption("name")} consumed:
//                  ${frog
//                    .getFoodsConsumed()
//                    .map((food) => food.name)
//                    .join(",")}`);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
