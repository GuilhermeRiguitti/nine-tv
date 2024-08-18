import { PrismaClient } from '@prisma/client'
// import { generateAndSaveImages } from './helpers';
import { newsSeed } from './newsSeed';


const prisma = new PrismaClient();

async function main() {

    // const generateNewImages = false;

    // // generate images
    // //const images = await generateAndSaveImages('sports', generateNewImages);

    await Promise.all([
        newsSeed(prisma),
    ]);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });