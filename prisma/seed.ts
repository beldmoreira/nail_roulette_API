import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Isabela",
        last_name: "Moreira",
        email: "isabelamoreira@hotmail.com",
        password: "soidolosflutime",
      },
      {
        name: "Dengo",
        last_name: "Moreira",
        email: "dengo_gato@gmail.com",
        password: "timedeguerreiros",
      },
      {
        name: "Dara",
        last_name: "Moreira",
        email: "dara_gata@gmail.com",
        password: "luideverso22",
      },
    ],
  });
  await prisma.nailPolish.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Jackie",
        brand: "Impala",
        shade: "Brown",
        finish: "Crème",
        expiration_date: "2022-11-22",
      },
      {
        name: "Cherries in the snow",
        brand: "Revlon",
        shade: "Pink",
        finish: "Crème",
        expiration_date: "2025-02-04",
      },
      {
        name: "In a While Crocodile",
        brand: "Essence",
        shade: "Green",
        finish: "Crème",
        expiration_date: "2024-07-20",
      },
      {
        name: "Malibu Marigolden Hour",
        brand: "OPI",
        shade: "Yellow",
        finish: "Crème",
        expiration_date: "2023-03-27",
      },
      {
        name: "Na Boca do Povo",
        brand: "Dailus",
        shade: "Pink and silver",
        finish: "Glitter",
        expiration_date: "2023-01-31",
      },
      {
        name: "Cetim dourado",
        brand: "Risqué Diamond Gel",
        shade: "Gold",
        finish: "Metallic",
        expiration_date: "2025-06-22",
      },
      {
        name: "Sweet Grape",
        brand: "Dailus",
        shade: "Purple",
        finish: "Jelly",
        expiration_date: "2022-07-14",
      },

      {
        name: "Condessa",
        brand: "Risqué",
        shade: "Pink Nude",
        finish: "Sheer",
        expiration_date: "2024-08-14",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
