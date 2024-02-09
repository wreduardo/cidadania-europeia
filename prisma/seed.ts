import { prisma } from "../src/utils/db.server";

// Type para User
type User = {
    id: number;
    createdAt: Date;
    updateAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    country: string;
    residence: string;
    ancestry: Ancestry[];
    citizenship: Citizenship[];
};

// Type para Ancestry
type Ancestry = {
    id: number;
    createdAt: Date;
    updateAt: Date;
    surname: string;
    results: string;
    generation: number;
    user: User;
    userId: number;
};

// Type para Citizenship
type Citizenship = {
    id: number;
    createdAt: Date;
    updateAt: Date;
    country: string;
    documents: Document[];
    user: User;
    userId: number;
};

// Type para Document
type Document = {
    id: number;
    createdAt: Date;
    updateAt: Date;
    type: string;
    expiration: Date;
    country: string;
    status: string;
    citizenship: Citizenship;
    citizenshipId: number;
};

async function seed() {
    try {
        // Seed para User
        await Promise.all(
            getUsers().map((user) => {
                return prisma.user.create({
                    data: {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: user.password,
                        country: user.country,
                        residence: user.residence,
                    },
                });
            })
        );

        // Seed para Ancestry
        await Promise.all(
            getAncestries().map((ancestry) => {
                return prisma.ancestry.create({
                    data: {
                        id: ancestry.id,
                        createdAt: ancestry.createdAt,
                        updateAt: ancestry.updateAt,
                        surname: ancestry.surname,
                        results: ancestry.results,
                        generation: ancestry.generation,
                        userId: ancestry.userId,
                    },
                });
            })
        );

        // Seed para Citizenship
        await Promise.all(
            getCitizenships().map((citizenship) => {
                return prisma.citizenship.create({
                    data: {
                        id: citizenship.id,
                        createdAt: citizenship.createdAt,
                        updateAt: citizenship.updateAt,
                        country: citizenship.country,
                        userId: citizenship.userId,
                    },
                });
            })
        );

        // Seed para Document
        await Promise.all(
            getDocuments().map((document) => {
                return prisma.document.create({
                    data: {
                        id: document.id,
                        createdAt: document.createdAt,
                        updateAt: document.updateAt,
                        type: document.type,
                        expiration: document.expiration,
                        country: document.country,
                        status: document.status,
                        citizenshipId: document.citizenshipId,
                    },
                });
            })
        );

        console.log('Seed concluído com sucesso.');
    } catch (error) {
        console.error('Erro durante o processo de seed:', error);
    } finally {
        await prisma.$disconnect(); // Certifique-se de desconectar o prisma-client após a conclusão
    }
}
seed()

// Chame a função seed para iniciar o processo de seed
//Estrutura local de Teste 

function getUsers(): Array<User> {
    return [
        {
            id: 1,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Ana',
            lastName: 'Silva',
            email: 'ana.silva@example.com',
            password: 'senha123',
            country: 'Brazil',
            residence: 'São Paulo',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 2,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Carlos',
            lastName: 'Oliveira',
            email: 'carlos.oliveira@example.com',
            password: 'senha456',
            country: 'Brazil',
            residence: 'Rio de Janeiro',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 3,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Mariana',
            lastName: 'Santos',
            email: 'mariana.santos@example.com',
            password: 'senha789',
            country: 'Brazil',
            residence: 'Salvador',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 4,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Rafael',
            lastName: 'Pereira',
            email: 'rafael.pereira@example.com',
            password: 'senha101',
            country: 'Brazil',
            residence: 'Fortaleza',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 5,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Juliana',
            lastName: 'Costa',
            email: 'juliana.costa@example.com',
            password: 'senha112',
            country: 'Brazil',
            residence: 'Brasília',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 6,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Rodrigo',
            lastName: 'Machado',
            email: 'rodrigo.machado@example.com',
            password: 'senha131',
            country: 'Brazil',
            residence: 'Belo Horizonte',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 7,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Amanda',
            lastName: 'Almeida',
            email: 'amanda.almeida@example.com',
            password: 'senha141',
            country: 'Brazil',
            residence: 'Recife',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 8,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Lucas',
            lastName: 'Nascimento',
            email: 'lucas.nascimento@example.com',
            password: 'senha151',
            country: 'Brazil',
            residence: 'Curitiba',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 9,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Camila',
            lastName: 'Ferreira',
            email: 'camila.ferreira@example.com',
            password: 'senha161',
            country: 'Brazil',
            residence: 'Porto Alegre',
            ancestry: [],
            citizenship: [],
        },
        {
            id: 10,
            createdAt: new Date(),
            updateAt: new Date(),
            firstName: 'Fernando',
            lastName: 'Rocha',
            email: 'fernando.rocha@example.com',
            password: 'senha171',
            country: 'Brazil',
            residence: 'Manaus',
            ancestry: [],
            citizenship: [],
        },
    ];
}

// Função para obter dados fictícios de Ancestry
function getAncestries(): Array<Ancestry> {
    const users = getUsers();

    return [
        {
            id: 1,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Silva',
            results: 'DNA Test Results',
            generation: 2,
            user: users[1], // Referência ao segundo usuário na lista
            userId: 2,
        },
        {
            id: 2,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Oliveira',
            results: 'Ancestry Report',
            generation: 4,
            user: users[3], // Referência ao quarto usuário na lista
            userId: 4,
        },
        {
            id: 3,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Santos',
            results: 'Family History',
            generation: 3,
            user: users[5], // Referência ao sexto usuário na lista
            userId: 6,
        },
        {
            id: 4,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Pereira',
            results: 'Ancestral Origins',
            generation: 2,
            user: users[7], // Referência ao oitavo usuário na lista
            userId: 8,
        },
        {
            id: 5,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Costa',
            results: 'Heritage Analysis',
            generation: 5,
            user: users[9], // Referência ao décimo usuário na lista
            userId: 10,
        },

        {
            id: 6,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Machado',
            results: 'Ancestry DNA Analysis',
            generation: 4,
            user: users[2], // Referência ao terceiro usuário na lista
            userId: 3,
        },
        {
            id: 7,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Almeida',
            results: 'Genetic Heritage Report',
            generation: 3,
            user: users[4], // Referência ao quinto usuário na lista
            userId: 5,
        },
        {
            id: 8,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Nascimanto',
            results: 'Family Tree Analysis',
            generation: 2,
            user: users[6], // Referência ao sétimo usuário na lista
            userId: 7,
        },
        {
            id: 9,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Ferreira',
            results: 'Ancestral Discoveries',
            generation: 5,
            user: users[8], // Referência ao nono usuário na lista
            userId: 9,
        },
        {
            id: 10,
            createdAt: new Date(),
            updateAt: new Date(),
            surname: 'Rocha',
            results: 'Heritage Insights',
            generation: 4,
            user: users[0], // Referência ao primeiro usuário na lista
            userId: 1,
        },
        // Adicione mais objetos Ancestry conforme necessário
    ];
}



// Função para obter dados fictícios de Citizenship
function getCitizenships(): Array<Citizenship> {
    const users = getUsers();
    const documents = getDocuments();

    return [
        {
            id: 1,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Germany',
            documents: documents.slice(0, 2), // Usando os primeiros 2 documentos da lista
            user: users[1], // Referência ao segundo usuário na lista
            userId: 2,
        },
        {
            id: 2,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'France',
            documents: documents.slice(2, 4), // Usando os documentos 3 e 4 da lista
            user: users[3], // Referência ao quarto usuário na lista
            userId: 4,
        },
        {
            id: 3,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Spain',
            documents: documents.slice(4, 6), // Usando os documentos 5 e 6 da lista
            user: users[5], // Referência ao sexto usuário na lista
            userId: 6,
        },
        {
            id: 4,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Italy',
            documents: documents.slice(6, 8), // Usando os documentos 7 e 8 da lista
            user: users[7], // Referência ao oitavo usuário na lista
            userId: 8,
        },
        {
            id: 5,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'United Kingdom',
            documents: documents.slice(8, 10), // Usando os documentos 9 e 10 da lista
            user: users[9], // Referência ao décimo usuário na lista
            userId: 10,
        },
        {
            id: 6,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Netherlands',
            documents: documents.slice(10, 12), // Usando os documentos 11 e 12 da lista
            user: users[0], // Referência ao primeiro usuário na lista
            userId: 1,
        },
        {
            id: 7,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Portugal',
            documents: documents.slice(12, 14), // Usando os documentos 13 e 14 da lista
            user: users[2], // Referência ao terceiro usuário na lista
            userId: 3,
        },
        {
            id: 8,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Sweden',
            documents: documents.slice(14, 16), // Usando os documentos 15 e 16 da lista
            user: users[4], // Referência ao quinto usuário na lista
            userId: 5,
        },
        {
            id: 9,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Greece',
            documents: documents.slice(16, 18), // Usando os documentos 17 e 18 da lista
            user: users[6], // Referência ao sétimo usuário na lista
            userId: 7,
        },
        {
            id: 10,
            createdAt: new Date(),
            updateAt: new Date(),
            country: 'Denmark',
            documents: documents.slice(18, 20), // Usando os documentos 19 e 20 da lista
            user: users[8], // Referência ao nono usuário na lista
            userId: 9,
        },
        // Adicione mais objetos Citizenship conforme necessário
    ];
}


function getDocuments(): Array<Document> {
    return [
        {
            id: 1,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Passaporte',
            expiration: new Date('2035-12-31'),
            country: 'Brasil',
            status: 'Válido',
            citizenship: getCitizenships()[0], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 1,
        },
        {
            id: 2,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Carteira de Identidade',
            expiration: new Date('2034-10-15'),
            country: 'França',
            status: 'Válido',
            citizenship: getCitizenships()[1], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 2,
        },
        {
            id: 3,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Certidão de Nascimento',
            expiration: new Date('2036-05-20'),
            country: 'Itália',
            status: 'Válido',
            citizenship: getCitizenships()[2], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 3,
        },
        {
            id: 4,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Certidão de Casamento',
            expiration: new Date('2033-09-28'),
            country: 'Espanha',
            status: 'Válido',
            citizenship: getCitizenships()[3], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 4,
        },
        {
            id: 5,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Comprovante de Residência',
            expiration: new Date('2037-03-12'),
            country: 'Alemanha',
            status: 'Válido',
            citizenship: getCitizenships()[4], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 5,
        },
        {
            id: 6,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Certificado de Antecedentes Criminais',
            expiration: new Date('2038-08-05'),
            country: 'Portugal',
            status: 'Válido',
            citizenship: getCitizenships()[5], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 6,
        },
        {
            id: 7,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Exame Médico',
            expiration: new Date('2039-11-30'),
            country: 'Grécia',
            status: 'Válido',
            citizenship: getCitizenships()[6], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 7,
        },
        {
            id: 8,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Comprovante de Meios de Sustento',
            expiration: new Date('2040-04-22'),
            country: 'Holanda',
            status: 'Válido',
            citizenship: getCitizenships()[7], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 8,
        },
        {
            id: 9,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Prova de Conhecimento do Idioma',
            expiration: new Date('2041-06-15'),
            country: 'Bélgica',
            status: 'Válido',
            citizenship: getCitizenships()[8], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 9,
        },
        {
            id: 10,
            createdAt: new Date(),
            updateAt: new Date(),
            type: 'Passaporte',
            expiration: new Date('2042-02-08'),
            country: 'Reino Unido',
            status: 'Válido',
            citizenship: getCitizenships()[9], // Use a função getCitizenships para obter uma cidadania fictícia
            citizenshipId: 10,
        },
    ];
}




