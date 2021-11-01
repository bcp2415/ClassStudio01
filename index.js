//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(score) {
    this.scores.push(score);
  }

  average() {
    let total = 0;
    for (const score of this.scores) {
      total += score;
    }
    return (Math.round((total / this.scores.length) * 10)) / 10;
  }
}


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

/*Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62*/
const bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
const merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
const glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
//console.log(bubba, merry, glad);

bubba.addScore(83);
console.log(bubba.scores);
console.log(merry.average());
