const e = require('express');
const db = require('../models/index');
////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------- USER---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.createUser = async (body) => {
    try {
        await db.Users.create(body);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.findUser = async (body) => {
    try {
        const user = await db.Users.findOne({
            where: {
                email: body.email,
            },
        });
        return user;
    } catch (err) {
        console.log(err);
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------STUDENT---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.addStudent = async (body) => {
    try {
        const student = await db.Students.create(body);
        return student.dataValues.id;
    } catch (err) {
        return false;
    }
};
module.exports.listStudent = async () => {
    try {
        const student = await db.Students.findAll();
        return student;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.listStudentNoClass = async () => {
    try {
        const student = await db.Students.findAll({
            where: {
                class: null,
            },
        });
        return student;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.updateStudent = async (id, data) => {
    try {
        const student = await db.Students.update(data, { where: { id: id } });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.getStudentByClass = async (qClass) => {
    try {
        const student = await db.Students.findAll({
            where: { class: qClass },
        });
        return student;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.getStudentById = async (id) => {
    try {
        const student = await db.Students.findAll({
            where: { id: id },
        });
        return student;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.deleteStudent = async (id) => {
    try {
        await db.Students.destroy({ where: { id: id } });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------- TEACHER---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.addTeacher = async (body) => {
    try {
        const teacher = await db.Teachers.create(body);
        return teacher.dataValues.id;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.getTeacherById = async (id) => {
    try {
        const teacher = await db.Teachers.findAll({
            where: { id: id },
        });
        return teacher;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.updateTeacher = async (id, data) => {
    try {
        const teacher = await db.Teachers.update(data, { where: { id: id } });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.listTeacher = async () => {
    try {
        const teacher = await db.Teachers.findAll();
        return teacher;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------SUBJECT---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.addSubject = async (body) => {
    try {
        const subject = await db.Subjects.create(body);
        return true;
    } catch (err) {
        return false;
    }
};
module.exports.listSubject = async () => {
    try {
        const subject = await db.Subjects.findAll();
        return subject;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.getSubjectById = async (id) => {
    try {
        const subject = await db.Subjects.findAll({
            where: { id: id },
        });
        return subject;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.getSubjectByDepartment = async (department) => {
    try {
        const subject = await db.Subjects.findAll({
            where: { department: department },
        });
        return subject;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.updateSubject = async (id, data) => {
    try {
        const subject = await db.Subjects.update(data, { where: { id: id } });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------DEPARTMENT---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.getDepartment = async () => {
    try {
        const department = await db.Departments.findAll();
        return department;
    } catch (err) {
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------CLASS---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.addClass = async (nClass) => {
    try {
        const kClass = await db.KmaClasses.create(nClass);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.getClass = async () => {
    try {
        const qClass = await db.KmaClasses.findAll();
        return qClass;
    } catch (err) {
        return false;
    }
};
module.exports.getClassByCourse = async (course) => {
    try {
        const qClass = await db.KmaClasses.findAll({
            where: {
                course_id: course,
            },
        });
        return qClass;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------- SEMESTER---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.addSemester = async (data) => {
    try {
        const kSemester = await db.Semesters.create(data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.listSemesterByCourse = async (course) => {
    try {
        const lSemester = await db.Semesters.findAll({ where: { course_id: course } });
        return lSemester;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------GRADE---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.findGradeBySubjectAndClass = async (subject, classID) => {
    try {
        const grade = await db.Grades.findAll({
            where: {
                subject_id: subject,
                class: classID,
            },
        });
        return grade;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.addGrade = async (data) => {
    try {
        const grade = await db.Grades.create(data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.updateGrade = async (id, data) => {
    try {
        const grade = await db.Grades.update(
            {
                grade1: data.grade1,
                grade2: data.grade2,
                exam1: data.exam1,
                exam2: data.exam2,
                average1: data.average1,
                letter1: data.letter1,
                average2: data.average2,
                letter2: data.letter2,
            },
            { where: { id: id } },
        );
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports.findAllGrade = async () => {
    try {
        const grade = await db.Grades.findAll();
        return grade;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.findGradeByStudentID = async (id) => {
    try {
        const grade = await db.Grades.findAll({
            where: {
                student_id: id,
            },
        });
        return grade;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.findGradeByClass = async (rClass) => {
    try {
        const grade = await db.Grades.findAll({
            where: {
                class: rClass,
            },
        });
        return grade;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.findGradeBySubject = async (rSubject) => {
    try {
        const grade = await db.Grades.findAll({
            where: {
                subject_id: rSubject,
            },
        });
        return grade;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------SCHOOLYEAR---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.getSchoolyear = async () => {
    try {
        const qShoolyear = await db.Schoolyears.findAll();
        return qShoolyear;
    } catch (err) {
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------COURSE---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.getCourse = async () => {
    try {
        const qCourse = await db.Courses.findAll();
        return qCourse;
    } catch (err) {
        return false;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------CLASSROOM---------------------------------------------------///
///////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.addClassroom = async (data) => {
    try {
        const qClassroom = await db.Classrooms.create(data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.getClassroomByCourse = async (data) => {
    try {
        const qClassroom = await db.Classrooms.findAll({
            where: {
                course_id: data.course_id,
                semester_id: data.semester_id,
                subject_id: data.subject_id,
            },
        });
        return qClassroom;
    } catch (err) {
        console.log(err);
        return false;
    }
};
module.exports.countClassroom = async (data) => {
    try {
        const count = await db.Classrooms.count({
            where: {
                course_id: data.course_id,
                semester_id: data.semester_id,
                subject_id: data.subject_id,
            },
        });
        return count;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.addTeacherToClassroom = async (data) => {
    try {
        const qClr = await db.Classrooms.update({ teacher_id: data.teacher_id }, { where: { id: data.id } });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------- ROLE ---------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.listRoles = async () => {
    try {
        const qRoles = await db.Roles.findAll();
        return qRoles;
    } catch (err) {
        console.log(err);
        return false;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------- CHECK IN ----------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.addCheckIn = async (data) => {};
