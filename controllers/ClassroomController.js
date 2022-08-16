const { generateUID } = require('../services/generate');
const { addClassroom, getClassroomByCourse, countClassroom, addTeacherToClassroom } = require('../services/CRUD');

const AddClassroom = async (req, res) => {
    const body = req.body;
    // get class by course's id, semester's id, subject's id \\
    const dataQ = {
        course_id: body.course,
        semester_id: body.semester,
        subject_id: body.subject,
    };
    const qClassrooms = await getClassroomByCourse(dataQ);
    // get last char array of classroom's code\\
    const classrooms = [];
    qClassrooms.map((clr) => {
        classrooms.push(clr.code);
    });
    const lastChar = [];
    for (let i of classrooms) {
        lastChar.push(Number(i.substr(i.length - 1)));
    }
    if (lastChar.length < 1) {
        lastClassroom = 0;
    } else {
        lastClassroom = lastChar.sort()[lastChar.length - 1];
    }
    const results = [];
    for (let i = lastClassroom + 1; i <= lastClassroom + Number(body.number); i++) {
        const iClassroom = {
            ...dataQ,
            id: generateUID(20),
            code: `L0${i}`,
            name: `L0${i}`,
        };
        const result = await addClassroom(iClassroom);
        result ? results.push(1) : results(0);
    }
    results.includes(0)
        ? res.status(400).json({ code: 400, message: 'Error' })
        : res.status(200).json({ code: 200, message: 'Insert classroom successfully' });
};
const CountClassroom = async (req, res) => {
    const body = req.body;
    const dataQ = {
        course_id: body.course,
        semester_id: body.semester,
        subject_id: body.subject,
    };
    const result = await countClassroom(dataQ);

    res.status(200).json({ code: 200, number: result, message: 'Success' });
};
const FindClassroom = async (req, res) => {
    const body = req.body;
    const dataQ = {
        course_id: body.course,
        semester_id: body.semester,
        subject_id: body.subject,
    };
    const qClassroom = await getClassroomByCourse(dataQ);

    res.status(200).send(qClassroom);
};
const AddTeacherToClassroom = async (req, res) => {
    const body = req.body;
    const results = [];
    body.map(async (clr) => {
        const result = await addTeacherToClassroom(clr);
        result ? results.push(1) : results.push(0);
    });
    results.includes(0)
        ? res.status(400).json({ code: 400, message: 'Error' })
        : res.status(200).json({ code: 200, message: 'Success' });
};
module.exports = {
    AddClassroom,
    CountClassroom,
    FindClassroom,
    AddTeacherToClassroom,
};
