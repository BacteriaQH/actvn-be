const {
    addStudent,
    listStudent,
    listStudentNoClass,
    updateStudent,
    getStudentById,
    getStudentByClass,
    deleteStudent,
    createUser,
} = require('../services/CRUD');
const { generateUID } = require('../services/generate');
const { hashPassword } = require('../services/hash');

const AddStudent = async (req, res) => {
    const body = req.body;
    body.id = generateUID(20);
    body.name = `${body.firstname.trim() + ' ' + body.lastname.trim()}`;
    body.gender = Number(body.gender);
    const result = await addStudent(body);
    const hash = await hashPassword('123456789');
    const addStudentToUser = await createUser({
        id: result,
        name: body.name,
        email: body.code,
        password: hash,
        role_symbol: 2,
    });
    result && addStudentToUser
        ? res.status(200).json({ code: 200, message: 'Create student success' })
        : res.status(401).json({ code: 401, message: 'Error' });
};
const ListStudent = async (req, res) => {
    const students = await listStudent();
    delete students.createdAt;
    delete students.updatedAt;
    res.status(200).send(students);
};
const ListStudentNoClass = async (req, res) => {
    const students = await listStudentNoClass();
    const std = [];
    students.map((student) => {
        std.push({
            id: student.id,
            code: student.code,
            name: student.name,
            gender: student.gender,
        });
    });
    res.status(200).send(std);
};
const UpdateStudent = async (req, res) => {
    const body = req.body;
    body.name = `${body.firstname.trim() + ' ' + body.lastname.trim()}`;
    body.gender = Number(body.gender);
    const { id, firstname, lastname, ...other } = body;
    const resultQ = await updateStudent(id, other);
    resultQ
        ? res.status(200).json({ code: 200, message: 'Update student success' })
        : res.status(401).json({ code: 401, message: 'Error' });
};

const UpdateClassStudent = async (req, res) => {
    const body = req.body;
    const result = [];
    for (let i = 0; i < body.length; i++) {
        const { id, ...other } = body[i];
        const resultQ = await updateStudent(id, other);
        resultQ ? result.push(1) : result.push(0);
    }
    result.includes(0)
        ? res.status(401).json({ code: 401, message: 'Error' })
        : res.status(200).json({ code: 200, message: 'Update class for student success' });
};
const GetStudentById = async (req, res) => {
    const id = req.query.id;
    const student = await getStudentById(id);
    res.status(200).send(student[0]);
};
const ListStudentByClass = async (req, res) => {
    const qClass = req.query.classes;
    let students;
    if (qClass == 'all') {
        students = await listStudent();
    } else {
        students = await getStudentByClass(qClass);
    }

    const std = [];
    students.map((student) => {
        std.push({
            id: student.id,
            code: student.code,
            name: student.name,
            gender: student.gender,
            class: student.class,
        });
    });
    res.status(200).send(std);
};
const DeleteStudent = async (req, res) => {
    const qStudent = await deleteStudent(req.query.id);
    qStudent
        ? res.status(200).json({ code: 200, message: 'Success' })
        : res.status(404).json({ code: 404, message: 'Error' });
};
module.exports = {
    AddStudent,
    ListStudent,
    ListStudentNoClass,
    UpdateStudent,
    GetStudentById,
    UpdateClassStudent,
    ListStudentByClass,
    DeleteStudent,
};
