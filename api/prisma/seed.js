const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cliente = require('../docs/clientes.json');
const automovel = require('../docs/automoveis.json');
const alocacao = require('../docs/alocacao.json');
const concessionaria = require('../docs/concessionarias.json');

async function importAutomoveis() {
  const automovelData = automovel.map(item => ({
    modelo: item.modelo, 
    preco: item.preco 
  }));

  await prisma.automovel.createMany({
    data: automovelData,
    skipDuplicates: true,
  });
}

async function importClientes() {
  const clientesData = cliente.map(item => ({ 
    id: item.id,
    nome: item.nome
  }));

  await prisma.cliente.createMany({ 
    data: clientesData,
    skipDuplicates: true
  });
}


async function importConcessionarias() {
  const concessionarias = concessionaria.map(item => ({
    id: item.id,
    nome: item.concessionaria 
  }));

  await prisma.concessionaria.createMany({
    data: concessionarias,
    skipDuplicates: true
  });
}

async function importAlocacoes() {
  const alocacoes = alocacao.map(item => ({
    id: item.id,
    area: item.area,
    quantidade: item.quantidade,
    automovelId: item.automovel, 
    concessionariaId: item.concessionaria
  }));

  await prisma.alocacao.createMany({
    data: alocacoes,
    skipDuplicates: true
  });

  console.log('Dados Importados');
}

async function main() {
  await importAutomoveis();
  await importClientes();
  await importConcessionarias();
  await importAlocacoes();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
