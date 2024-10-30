import DeletePaciente from "../components/deletePaciente";

const getPacientePage = () => {
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Deletar Paciente</h1>
                <DeletePaciente />
            </div>
        </>
    )

}

export default getPacientePage;