export default function ModalTasks({ onClose }) {
    return (
        <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50" >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96" >
                <h2 className="text-xl font-bold mb-4">Criar nova tarefa</h2>
                <button
                    onClick={onClose} // Ao clicar, executa a função que fecha o modal
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Fechar
                </button>
            </div>
        </div>
    )
}