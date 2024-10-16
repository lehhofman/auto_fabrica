const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    if (req.params.automovelId == undefined) {
        let concessionarias = await prisma.concessionaria.findMany({
            select: {
                "id": true,
                "nome": true,
            }
        });
        res.status(200).json(concessionarias).end();
    } else {
        let concessionarias = await prisma.concessionaria.findMany({
            select: {
                "id": true,
                "nome": true,
                "alocacoes": true
            },
            where: {
                "alocacoes": {
                    some: {
                        "automovelId": {
                            equals: parseInt(req.params.automovelId)
                        }
                    }
                }
            }
        });
        res.status(200).json(concessionarias).end();
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { concessionaria } = req.body;
    try {
        const concessionariaAtualizada = await prisma.concessionaria.update({
            where: { id: parseInt(id) },
            data: {
                concessionaria: concessionaria || undefined
            }
        });
        return res.json(concessionariaAtualizada);
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao atualizar concessionária" }).end();
    }
}

module.exports = {
    read,
    update
}
 