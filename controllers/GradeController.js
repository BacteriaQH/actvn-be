const { generateUID } = require('../services/generate');
const {
    addGrade,
    findGradeByStudentID,
    getSubjectById,
    findGradeByClass,
    findGradeBySubject,
    listStudent,
    listSubject,
    findAllGrade,
    getStudentById,
    getStudentByClass,
    findGradeBySubjectAndClass,
    updateGrade,
} = require('../services/CRUD');
const { calculateAvgGrade, calculateLetterGrade } = require('../services/calculateGrade');

const AddGrade = async (req, res) => {
    const body = req.body;
    const result = [];
    body.map(async (grade) => {
        g1 = Number(grade.subject[0].grade.grade1);
        g2 = Number(grade.subject[0].grade.grade2);
        e1 = Number(grade.subject[0].grade.exam1);
        e2 = Number(grade.subject[0].grade.exam2);
        const gradeI = {
            id: generateUID(20),
            student_id: grade.id,
            subject_id: grade.subject[0].id,
            class: grade.class,
            grade1: g1,
            grade2: g2,
            exam1: e1 !== 0 ? e1 : null,
            average1: e1 !== 0 ? calculateAvgGrade(g1, g2, e1) : null,
            letter1: e1 !== 0 ? calculateLetterGrade(g1, g2, e1) : null,
            exam2: e2 !== 0 ? e2 : null,
            average2: e2 !== 0 ? calculateAvgGrade(g1, g2, e2) : null,
            letter2: e2 !== 0 ? calculateLetterGrade(g1, g2, e2) : null,
        };
        const resultQ = await addGrade(gradeI);
        resultQ ? result.push(1) : result.push(0);
    });
    result.includes(0)
        ? res.status(401).json({ code: 401, message: 'Error' })
        : res.status(200).json({ code: 200, message: 'Add grade success' });
};

const UpdateGrade = (req, res) => {
    const body = req.body;
    const result = [];
    body.map(async (grade) => {
        g1 = Number(grade.subject[0].grade.grade1);
        g2 = Number(grade.subject[0].grade.grade2);
        e1 = Number(grade.subject[0].grade.exam1);
        e2 = Number(grade.subject[0].grade.exam2);
        const gradeI = {
            grade1: g1,
            grade2: g2,
            exam1: e1 !== 0 ? e1 : null,
            average1: e1 !== 0 ? calculateAvgGrade(g1, g2, e1) : null,
            letter1: e1 !== 0 ? calculateLetterGrade(g1, g2, e1) : null,
            exam2: e2 !== 0 ? e2 : null,
            average2: e2 !== 0 ? calculateAvgGrade(g1, g2, e2) : null,
            letter2: e2 !== 0 ? calculateLetterGrade(g1, g2, e2) : null,
        };
        const resultQ = await updateGrade(grade.subject[0].grade.id, gradeI);
        resultQ ? result.push(1) : result.push(0);
    });
    result.includes(0)
        ? res.status(401).json({ code: 401, message: 'Error' })
        : res.status(200).json({ code: 200, message: 'Update grade success' });
};

const FindGradeBySubjectAndClass = async (req, res) => {
    const { subject, classes } = req.query;
    const gradeQ = await findGradeBySubjectAndClass(subject, classes);
    let studentQ = await getStudentByClass(classes);
    let subjectQ = await getSubjectById(subject);

    // get arr of subject id in grade
    let subjects = [];
    let subjectFiltered = [];
    for (let sub of subjectQ) {
        subjects.push(sub.id);
        subjectFiltered.push({
            ...sub,
            grade: {
                grade1: '',
                grade2: '',
                exam1: '',
                exam2: '',
            },
        });
    }

    subjects = [...new Set(subjects)];

    subjectFiltered = subjectFiltered.filter(
        (value, index, self) => index === self.findIndex((t) => t.id === value.id),
    );
    // console.log(subjectFiltered);

    //compact a array of students
    let students = [];
    for (let s of studentQ) {
        let { id, name, gender, code, ...other } = s;
        let student = {
            id,
            name,
            gender,
            code,
            class: s.class,
            subject: subjectFiltered,
        };
        students.push(student);
    }

    for (let i of students) {
        let r = [];
        for (let j of i.subject) {
            for (const k of gradeQ) {
                if (j.id === k.subject_id && i.id === k.student_id) {
                    j = { ...j, grade: { ...k } };
                }
            }
            r.push(j);
        }
        i.subject = r;
    }
    return res.status(200).send(students);
};
const FindGradeByStudentID = async (req, res) => {
    const student_id = req.query.id;
    let gradeQ = await findGradeByStudentID(student_id);
    let studentQ = await getStudentById(student_id);
    let { id, name, code, gender, ...other } = studentQ[0];
    let subjectQ = await listSubject();
    let subs = [];
    for (let g of gradeQ) {
        for (let s of subjectQ) {
            if (g.subject_id === s.id) {
                let sub = {
                    ...s,
                    grade: {
                        ...g,
                    },
                };
                subs.push(sub);
            }
        }
    }
    let studentR = {
        id,
        name,
        code,
        gender,
        class: studentQ[0].class,
        subject: subs,
    };
    return res.status(200).send(studentR);
};

const FindGradeByClass = async (req, res) => {
    const classes = req.query.classes;
    let gradeQ = await findGradeByClass(classes);
    let studentQ = await getStudentByClass(classes);
    let subjectQ = await listSubject();

    // get arr of subject id in grade
    let subjects = [];
    let subjectFiltered = [];
    for (let g of gradeQ) {
        for (let sub of subjectQ) {
            if (g.subject_id === sub.id) {
                subjects.push(sub.id);
                subjectFiltered.push({
                    ...sub,
                    grade: {
                        grade1: '-',
                        grade2: '-',
                        exam1: '-',
                        average1: '-',
                        letter1: '-',
                    },
                });
            }
        }
    }
    subjects = [...new Set(subjects)];

    subjectFiltered = subjectFiltered.filter(
        (value, index, self) => index === self.findIndex((t) => t.id === value.id),
    );
    // console.log(subjectFiltered);

    //compact a array of students
    let students = [];
    for (let s of studentQ) {
        let { id, name, gender, code, ...other } = s;
        let student = {
            id,
            name,
            gender,
            code,
            class: s.class,
            subject: subjectFiltered,
        };
        students.push(student);
    }

    for (let i of students) {
        let r = [];
        for (let j of i.subject) {
            for (const k of gradeQ) {
                if (j.id === k.subject_id && i.id === k.student_id) {
                    j = { ...j, grade: { ...k } };
                }
            }
            r.push(j);
        }
        i.subject = r;
    }
    // console.log(students);
    res.status(200).send(students);
};

const FindGradeBySubject = async (req, res) => {
    // console.log(req.headers);
    const subject_id = req.query.subject;
    const studentQ = await listStudent();
    const gradeQ = await findGradeBySubject(subject_id);
    const subjectQ = await getSubjectById(subject_id);
    //compact a array of students
    let students = [];
    for (let i of studentQ) {
        for (let j of gradeQ) {
            if (j.student_id === i.id) {
                let { id, name, gender, code, ...other } = i;
                let student = {
                    id,
                    name,
                    gender,
                    code,
                    class: i.class,
                    subject: { ...subjectQ[0], grade: { ...j } },
                };
                students.push(student);
            }
        }
    }
    return res.status(200).send(students);
};

const FindAllGrade = async (req, res) => {
    const gradeQ = await findAllGrade();
    return res.status(200).send(gradeQ);
};
module.exports = {
    FindGradeBySubjectAndClass,
    AddGrade,
    UpdateGrade,
    FindGradeByStudentID,
    FindGradeByClass,
    FindGradeBySubject,
    FindAllGrade,
};
