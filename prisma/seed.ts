import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const recipe1 = await prisma.recipe.upsert({
    where: { title: 'Spaghetti Bolognese' },
    update: {},
    create: {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian Dish',
      ingredients:
        'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      instructions:
        '1. Cook  the spaghetti. 2. Fry the minced beef, 3. Add the tomato sauce to the beef. 3. Serve the spaghetti with sauce',
    },
  });

  const recipe2 = await prisma.recipe.upsert({
    where: { title: 'Chicken Curry' },
    update: {},
    create: {
      title: 'Chickent Curry',
      description: 'A spicy Indian dish',
      ingredients:
        'Chicken curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
      instructions:
        '1. Fry the chicken. 2. Add the curry powder to the chicken, 3. Add coconut milk. 3. Serve the curry with rice',
    },
  });
  console.log(recipe1, recipe2);
}

// execute main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma client at the end
    await prisma.$disconnect();
  });
