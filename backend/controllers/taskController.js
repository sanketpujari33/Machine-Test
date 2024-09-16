let tasks = [];
let currentId = 1;

const getTasks = (req, res) => {
    let { page = 1, limit = 10, sort = 'id', filter = '' } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    filter = filter.toLowerCase();

    let filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(filter) || task.description.toLowerCase().includes(filter)
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
    });

    const paginatedTasks = sortedTasks.slice((page - 1) * limit, page * limit);
    res.status(200).json({
        page,
        limit,
        total: filteredTasks.length,
        tasks: paginatedTasks
    });
};

const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Task not found');
    }
    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const newTask = {
        id: currentId++,
        title,
        description
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Task not found');
    }
    task.title = title;
    task.description = description;
    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
