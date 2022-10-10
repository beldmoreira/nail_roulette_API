import { prisma } from "../src/config/database";

async function main() {
  const users = [
    {
      name: "Isabela",
      lastName: "Moreira",
      email: "isabela_moreira@hotmail.com",
      password: "soidolosflutime",
      confirmPassword: "soidolosflutime",
    },
    {
      name: "Dengo",
      lastName: "Moreira",
      email: "dengo_gato@gmail.com",
      password: "timedeguerreiros",
      confirmPassword: "timedeguerreiros",
    },
    {
      name: "Dara",
      lastName: "Moreira",
      email: "dara_gata@gmail.com",
      password: "luideverso22",
      confirmPassword: "luideverso22",
    },
  ];
  users.forEach(async (item) => {
    await prisma.user.upsert({
      where: { email: item.email },
      update: {},
      create: item,
    });
  });

  const nailPolishes = [
    {
      name: "Jackie",
      brand: "Impala",
      shade: "Brown",
      finish: "Crème",
      expirationDate: "2022-11-22",
    },
    {
      name: "Cherries in the snow",
      brand: "Revlon",
      shade: "Pink",
      finish: "Crème",
      expirationDate: "2025-02-04",
    },
    {
      name: "In a While Crocodile",
      brand: "Essence",
      shade: "Green",
      finish: "Crème",
      expirationDate: "2024-07-20",
    },
    {
      name: "Malibu Marigolden Hour",
      brand: "OPI",
      shade: "Yellow",
      finish: "Crème",
      expirationDate: "2023-03-27",
    },
    {
      name: "Na Boca do Povo",
      brand: "Dailus",
      shade: "Pink and silver",
      finish: "Glitter",
      expirationDate: "2023-01-31",
    },
    {
      name: "Cetim dourado",
      brand: "Risqué Diamond Gel",
      shade: "Gold",
      finish: "Metallic",
      expirationDate: "2025-06-22",
    },
    {
      name: "Sweet Grape",
      brand: "Dailus",
      shade: "Purple",
      finish: "Jelly",
      expirationDate: "2022-07-14",
    },

    {
      name: "Condessa",
      brand: "Risqué",
      shade: "Pink Nude",
      finish: "Sheer",
      expirationDate: "2024-08-14",
    },
  ];

  nailPolishes.forEach(async (item) => {
    await prisma.nailPolish.upsert({
      where: { name: item.name },
      update: {},
      create: item,
    });
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
