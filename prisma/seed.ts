import { prisma } from "../src/config/database";

async function main() {
  const users = [
    {
      name: "Isabela",
      last_name: "Moreira",
      email: "isabela_moreira@hotmail.com",
      password: "soidolosflutime",
      confirm_password: "soidolosflutime",
    },
    {
      name: "Dengo",
      last_name: "Moreira",
      email: "dengo_gato@gmail.com",
      password: "timedeguerreiros",
      confirm_password: "timedeguerreiros",
    },
    {
      name: "Dara",
      last_name: "Moreira",
      email: "dara_gata@gmail.com",
      password: "luideverso22",
      confirm_password: "luideverso22",
    },
  ];
  users.forEach(async (item) => {
    await prisma.user.upsert({
      where: { email: item.email },
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
