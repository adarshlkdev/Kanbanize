import {prisma} from '@/utils/prisma'
import {auth} from '@clerk/nextjs/server'
import Board from '@/components/Board'


export default async function Dashboard(){
    const { userId }: { userId: string | null } = auth();

    const board = await prisma.kanbanBoard.findFirst({
      where: {
        userId: userId!,
      },
      include: {
        tasks: true,
      },
    });

    return (
        <Board board={board}/>
    )
}