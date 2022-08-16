const { findGradeByClass, findGradeBySubject } = require('../services/CRUD');

findGradeBySubject('c749279ba179103b6822').then((res) => console.log(res));
findGradeByClass('AT16E').then((res) => console.log(res));
