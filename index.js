function runFiveMiles() {
  console.log('Go for a five-mile run');
}

function liftWeights() {
  console.log('Pump iron');
}

function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function Monday() {
  exerciseRoutine(liftWeights);
}

function Tuesday() {
  exerciseRoutine(swimFortyLaps);
}

function Wednesday() {
  exerciseRoutine(runFiveMiles);
}

function Thursday() {
  exerciseRoutine(liftWeights);
}

function Friday() {
  exerciseRoutine(swimFortyLaps);
}

function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}

var afterExercise = morningRoutine(liftWeights);

afterExercise();

function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function name() {console.log('hi')}
}

function returnsAnAnonymousFunction() {
  return function() {console.log('hi')}

}
