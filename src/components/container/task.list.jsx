import React from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const  defaultTask = new Task('example', 'default description', false, levels.NORMAL)

    const changeState = ( id ) => {
        console.log("TODO: Cambiar el estado de una tarea")
    }

    return (
        <div>
            <div>
                Your tasks:
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
