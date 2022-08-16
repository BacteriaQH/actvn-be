calculateAvgGrade = (g1, g2, g3) => {
    let avg = 0;
    avg = (g1 * 0.3 + g2 * 0.7) * 0.3 + g3 * 0.7;
    return Number(avg.toFixed(1));
};

calculateLetterGrade = (g1, g2, g3) => {
    let avg = calculateAvgGrade(g1, g2, g3);
    let letter = '';
    if (avg < 4) {
        letter = 'F';
    } else if (avg >= 4 && avg <= 4.9) {
        letter = 'D';
    } else if (avg >= 5 && avg <= 5.4) {
        letter = 'D+';
    } else if (avg >= 5.5 && avg <= 6.4) {
        letter = 'C';
    } else if (avg >= 6.5 && avg <= 6.9) {
        letter = 'C+';
    } else if (avg >= 7 && avg <= 7.9) {
        letter = 'B';
    } else if (avg >= 8 && avg <= 8.4) {
        letter = 'B+';
    } else if (avg >= 8.5 && avg <= 9.4) {
        letter = 'A';
    } else if (avg >= 9.5 && avg <= 10) {
        letter = 'A+';
    }
    return letter;
};

module.exports = {
    calculateAvgGrade,
    calculateLetterGrade,
};
