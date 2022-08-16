const { generateUID } = require('../services/generate');
const { addSemester, listSemesterByCourse } = require('../services/CRUD');
const AddSemester = async (req, res) => {
    const body = req.body;

    const { subject, course, semester, ...other } = body;
    const data = {
        id: generateUID(20),
        name: semester,
        course_id: course,
        subject_id: subject.toString(),
    };
    const result = await addSemester(data);
    !result
        ? res.status(404).json({ code: 404, message: 'Failed to add semester' })
        : res.status(200).json({ code: 200, message: 'Success' });
};

const ListSemester = async (req, res) => {
    const course = req.query.course_id;
    const qSemester = await listSemesterByCourse(course);
    res.status(200).send(qSemester);
};
module.exports = {
    AddSemester,
    ListSemester,
};
