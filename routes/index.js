const router = require('express').Router();

//controller
const LoginController = require('../controllers/LoginController');
const LogoutController = require('../controllers/LogoutController');
const QueryController = require('../controllers/QueryController');
const StudentController = require('../controllers/StudentController');
const TeacherController = require('../controllers/TeacherController');
const SubjectController = require('../controllers/SubjectController');
const ClassController = require('../controllers/ClassController');
const SemesterController = require('../controllers/SemesterController');
const GradeController = require('../controllers/GradeController');
const ClassroomController = require('../controllers/ClassroomController');
const RegisterController = require('../controllers/RegisterController');
const RoleController = require('../controllers/RoleController');
const UploadController = require('../controllers/UploadController');
const RefreshTokenController = require('../controllers/RefreshTokenController');
//middleware
const AdminMiddleware = require('../middleware/AdminMiddleware');
const StudentMiddleware = require('../middleware/StudentMiddleware');
const TeacherMiddleware = require('../middleware/TeacherMiddleware');
const Department1Middleware = require('../middleware/Department1Middleware');
const Department2Middleware = require('../middleware/Department2Middleware');
const Department3Middleware = require('../middleware/Department3Middleware');
const verifyToken = require('../middleware/verifyToken');

const initWebRoutes = (app) => {
    router.post('/register', AdminMiddleware, RegisterController);
    router.post('/login', LoginController);
    router.get('/refresh', RefreshTokenController);
    router.post('/logout', verifyToken, LogoutController);
    router.post('/upload', UploadController);

    router.post('/students/add', Department2Middleware, StudentController.AddStudent);
    router.get('/students/list', Department2Middleware, StudentController.ListStudent);
    router.get('/students/no-class', Department3Middleware, StudentController.ListStudentNoClass);
    router.get('/students/by-class', Department2Middleware, StudentController.ListStudentByClass);
    router.post('/students/update-class', Department3Middleware, StudentController.UpdateClassStudent);
    router.get('/students/:id', StudentMiddleware, StudentController.GetStudentById);
    router.post('/students/update', StudentMiddleware, StudentController.UpdateStudent);
    // router.delete('/students/delete', StudentController.DeleteStudent);

    router.post('/teachers/add', AdminMiddleware, TeacherController.AddTeacher);
    router.get('/teachers/list', AdminMiddleware, TeacherController.ListTeacher);
    router.get('/teachers/:id', TeacherMiddleware, TeacherController.GetTeacherById);
    router.post('/teachers/update', TeacherMiddleware, TeacherController.UpdateTeacher);

    router.post('/subjects/add', Department3Middleware, SubjectController.AddSubject);
    router.get('/subjects/list', Department3Middleware, SubjectController.ListSubject);
    router.get('/subjects/id', Department3Middleware, SubjectController.GetSubjectById);
    router.get('/subjects/department', Department3Middleware, SubjectController.GetSubjectByDepartment);
    router.post('/subjects/update', Department3Middleware, SubjectController.UpdateSubject);

    router.post('/grades/add', Department1Middleware, GradeController.AddGrade);
    router.post('/grades/update', Department1Middleware, GradeController.UpdateGrade);
    router.get('/grades/list', Department1Middleware, GradeController.FindAllGrade);
    router.get('/grades/find-grade/student/:id', Department1Middleware, GradeController.FindGradeByStudentID);
    router.get('/grades/find-grade-by-class', Department1Middleware, GradeController.FindGradeByClass);
    router.get('/grades/find-grade-by-subject', Department1Middleware, GradeController.FindGradeBySubject);
    router.get(
        '/grades/find-grade-by-subject-class',
        Department1Middleware,
        GradeController.FindGradeBySubjectAndClass,
    );

    router.post('/classes/add', Department3Middleware, ClassController.AddClass);

    router.post('/semesters/add', Department3Middleware, SemesterController.AddSemester);
    router.get('/semesters/list-by-course', Department3Middleware, SemesterController.ListSemester);

    router.post('/classrooms/add', Department3Middleware, ClassroomController.AddClassroom);
    router.post('/classrooms/count', Department3Middleware, ClassroomController.CountClassroom);
    router.post('/classrooms/find', Department3Middleware, ClassroomController.FindClassroom);
    router.post('/classrooms/add-teacher-id', Department3Middleware, ClassroomController.AddTeacherToClassroom);

    router.get('/roles/list', AdminMiddleware, RoleController.ListRoles);

    router.post('/query', QueryController);
    return app.use('/api', router);
};

module.exports = initWebRoutes;
