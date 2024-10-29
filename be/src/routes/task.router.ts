import { Router } from 'express';
import { createTaskController } from '../controllers/task/create-task.controller';
import { getTaskerTasksController } from '../controllers/task/get-task.controller';
import { getNewTasksForTasker } from '../controllers/task/notification.controller';
import { updateTaskStatusController } from '../controllers/task/update-taskStatus.controller';
import { getConfirmedTasksController } from '../controllers/task/getUpcomingTasks.controller';

const taskRouter = Router();

taskRouter.post('/create', createTaskController);
taskRouter.get('/get', getTaskerTasksController);
taskRouter.get('/notification', getNewTasksForTasker);
taskRouter.patch('/update/:taskId', updateTaskStatusController);
taskRouter.get('/getComfirmedTask', getConfirmedTasksController);

export { taskRouter };
