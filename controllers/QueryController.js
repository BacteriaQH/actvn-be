const { getDepartment, getClass, getSchoolyear, getCourse } = require('../services/CRUD');

const QueryController = async (req, res) => {
    const body = req.body;
    const dataRes = {};
    for (let i of body) {
        switch (i) {
            case 'departments':
                const qDepartment = await getDepartment();
                delete qDepartment.createdAt;
                delete qDepartment.updatedAt;
                dataRes.departments = qDepartment;
                break;

            case 'classes':
                const qClass = await getClass();
                delete qClass.createdAt;
                delete qClass.updatedAt;

                qClass.sort(function (a, b) {
                    var x = a.code.toLowerCase();
                    var y = b.code.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                });
                dataRes.classes = qClass;
                break;
            case 'schoolyears':
                const qSchoolyear = await getSchoolyear();
                delete qSchoolyear.createdAt;
                delete qSchoolyear.updatedAt;

                dataRes.schoolyears = qSchoolyear;
                break;
            case 'courses':
                const qCourse = await getCourse();
                delete qCourse.createdAt;
                delete qCourse.updatedAt;
                dataRes.courses = qCourse;
                break;
            default:
                res.status(404).send('No content of req.body');
                break;
        }
    }
    res.status(200).send(dataRes);
};

module.exports = QueryController;
