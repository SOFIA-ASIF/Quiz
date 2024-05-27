#! /usr/bin/env node
import chalk from 'chalk';
import readlineSync from 'readline-sync';
const questions = [
    { question: 'What is the capital of Australia?', choices: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'], correctAnswer: 3 },
    { question: 'Which planet is known as the Red Planet?', choices: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswer: 1 },
    { question: 'Who wrote the play "Romeo and Juliet"?', choices: ['William Shakespeare', 'George Orwell', 'Mark Twain', 'Charles Dickens'], correctAnswer: 0 },
    { question: 'What is the chemical symbol for gold?', choices: ['Au', 'Ag', 'Gd', 'Go'], correctAnswer: 0 },
    { question: 'In which year did the Berlin Wall fall?', choices: ['1987', '1988', '1989', '1990'], correctAnswer: 2 },
    { question: 'Which ocean is the largest?', choices: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 3 },
    { question: 'Who is known as the "Father of Computers"?', choices: ['Alan Turing', 'Charles Babbage', 'Bill Gates', 'Steve Jobs'], correctAnswer: 1 },
    { question: 'What is the hardest natural substance on Earth?', choices: ['Gold', 'Iron', 'Diamond', 'Platinum'], correctAnswer: 2 },
    { question: 'Who painted the ceiling of the Sistine Chapel?', choices: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'], correctAnswer: 1 },
    { question: 'Which country is known as the Land of the Rising Sun?', choices: ['China', 'Japan', 'Thailand', 'South Korea'], correctAnswer: 1 }
];
console.log(chalk.gray("WELCOME TO THE QUIZ GAME"));
console.log(chalk.green(`Instructions:
1. You have to write the number of choice you want to answer
2. Each question is of 1 mark
3. You will get total marks at the end of the quiz`));
let score = 0;
questions.forEach((q, index) => {
    console.log(chalk.yellow(`Q${index + 1}: ${q.question}`));
    q.choices.forEach((choice, i) => {
        console.log(chalk.cyan(`${i + 1}. ${choice}`));
    });
    const answer = readlineSync.questionInt('Your answer: ') - 1;
    if (answer === q.correctAnswer) {
        console.log(chalk.green('Correct!\n'));
        score++;
    }
    else {
        console.log(chalk.red('Incorrect!\n'));
    }
});
console.log(chalk.blue(`Quiz finished! Your score is: ${score}/${questions.length}`));
