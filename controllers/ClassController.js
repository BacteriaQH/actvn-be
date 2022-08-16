const { getClassByCourse, addClass } = require('../services/CRUD');
const { generateUID } = require('../services/generate');

const AddClass = async (req, res) => {
    const body = req.body;
    // get class by course id\\
    const qClasses = await getClassByCourse(body.course);
    const classes = [];
    qClasses.map((kClass) => {
        classes.push(kClass.code);
    });
    // get last char array of class's code\\
    const lastChar = [];
    for (let i of classes) {
        lastChar.push(Number(i.substr(i.length - 1)));
    }
    // get last char\\
    if (lastChar.length < 1) {
        lastClass = 0;
    } else {
        lastClass = lastChar.sort()[lastChar.length - 1];
    }
    /* A loop to add class with code increase according alphabet A, B, C, D,... */
    for (let i = lastClass + 1; i <= lastClass + Number(body.class_number); i++) {
        const nClass = {};
        nClass.id = generateUID(20);
        nClass.code = `${body.course}0${i}`;
        nClass.name = `${body.course}${String.fromCharCode(i + 64)}`;
        nClass.course_id = body.course;
        const result = await addClass(nClass);
        result
            ? res.status(200).json({ code: 200, message: 'Create class successfully' })
            : res.status(401).json({ code: 401, message: 'Error' });
    }
};

module.exports = {
    AddClass,
};
