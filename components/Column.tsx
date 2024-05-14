import {LucideDot , EditIcon , Trash2Icon} from 'lucide-react'
import { Droppable , Draggable } from '@hello-pangea/dnd'
import { useState } from 'react'
//import server actions from modal
import { editTask , deleteTask } from '@/app/actions/boardActions'
import { Task } from '@/types/types'
import Modal from './ui/Modal'

interface ColumnProps {
    title: string;
    tasks: Task[];
    droppableId: string;

}

const Column:React.FC<ColumnProps> = ({
    title ,
    tasks , 
    droppableId
}) => {
    const [hoverIndex , setHoverIndex] = useState<number | null>(null);
    const [taskId , setTaskId] = useState<string | null>(null);


    const [isEdit , setIsEdit] = useState(false);
    const [isDelete , setIsDelete] = useState(false);


    //modal functions
    const openDeleteModal = (taskId: string) => {
        setIsDelete(true);
        setTaskId(taskId);
    }

    const closeDeleteModal = () => {
        setIsDelete(false);
        setTaskId(null);
    }


    const openEditModal = (taskId: string) => {
        setIsEdit(true);
        setTaskId(taskId);
    }

    const closeEditModal = () => {
        setIsEdit(false);
        setTaskId(null);
    }


  return (
    <div className='flex-1'>
        <div className='flex gap-1'>
          <h2 className='font-semibold text-sm uppercase mb-4'>{title}</h2>
          <LucideDot />
        </div>

        <Droppable droppableId={droppableId}>
            {(provided) => (
                <div
                 {...provided.droppableProps}
                 ref={provided.innerRef}
                 className='dark:bg-slate-700 bg-gray-500 rounded-lg p-4'
                >
                  {tasks.map((task , index) => (
                    <Draggable
                     key={task.id}
                     draggableId={task.id}
                     index={index}
                     >
                    {(provided) => (
                        <div className='dark:bg-slate-900 bg-gray-700 text-white rounded p-2 mb-2 flex justify-between'
                         ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps} 
                          onMouseEnter={() =>
                            setHoverIndex(index)
                          }
                          onMouseLeave={() => setHoverIndex(null)}
                        >
                          {task.name}
                          {hoverIndex === index && (
                             <div className='flex gap-5'>
                                 <span className='text-xs mt-1 cursor-pointer'
                                 onClick={() => openEditModal(task.id)}>
                                    <EditIcon size={20}/>
                                 </span>
                                 <span className='text-xs mt-1 cursor-pointer'
                                 onClick={() => openDeleteModal(task.id)}>
                                    <Trash2Icon size={20} />
                                 </span>
                                </div>
                          )}
                        </div>
                    )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
            )}
        </Droppable>
        {isEdit && (
        <Modal
          closeModal={closeEditModal}
          isEdit={isEdit}
          value={taskId!}
          action={editTask}
          title="Edit Task"
        />
      )}

      {isDelete && (
        <Modal
          closeModal={closeDeleteModal}
          title="Are you sure you want to delete this task?"
          value={taskId!}
          action={deleteTask}
          isDelete={isDelete}
        />
      )}
    </div>
  )
}

export default Column
