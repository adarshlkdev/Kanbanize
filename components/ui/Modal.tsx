import Input from "./input"
import Button from "../Button"
import { BoardTypes } from "@/types/types"
import toast from "react-hot-toast"



const Modal = ({
    closeModal,
    title,
    action,
    value,
    isCreate,
    isEdit,
    isDelete
  }: {
    isCreate?: boolean;
    isEdit?: boolean;
    isDelete?: boolean;
    value: string;
    action: (formData: FormData) => Promise<void>;
    title: string;
    closeModal: () => void;
  }) => {
    const submitHandler = () =>{
        if(isCreate){
            toast.success('Task created successfully')
        }
        else if(isEdit){
            toast.success('Task updated successfully')
        }
        else if(isDelete){
            toast.success('Task deleted successfully')
        }
        closeModal();
    }
  return (
    <div className='fixed top-1 left-0 flex items-center justify-center h-full w-full bg-gray-800 bg-opacity-80'
    onClick={closeModal}
    >
      <div className='bg-gray-700 rounded-lg p-6 text-white'
        onClick={(e) => e.stopPropagation()}
        >
         <h2 className="text-xl font-bold mb-4">{title}</h2>
         <div className="flex justify-center">
            <form action={action} onSubmit={submitHandler}>
              <Input
               type="hidden"
               name="taskId"
               value={value}
               />
               {isEdit && (
                 <Input
                     type="text"
                     name="newTask"
                     placeholder="Enter new Task name"
                     fullWidth
                     />
               )}
               {isCreate && (
                <>
                 <Input 
                   type="text"
                   name="task"
                   placeholder="Enter task name"
                   fullWidth
                   />
                 <Input
                   type="hidden"
                   value={value}
                   name="boardId"
                   />
                </>
               )}

               <div className="mt-5 flex gap-5">
                  <Button
                    confirmButton
                    text="Confirm"
                    type="submit"
                  />
                  <Button
                    cancelButton
                    text="Cancel"
                    onClick={closeModal}
                     />
               </div>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Modal
