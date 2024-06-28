import React from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Center,
  Heading,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Wrap,
} from "@chakra-ui/react";
import NutrientItems from "../components/ui/NutrientItems";
import IngredientList from "../components/ui/IngredientList";
import TotalNutrients from "../components/ui/TotalNutrients";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Center flexDir="column" py={10}>
      <Button onClick={onBack} mb={5}>
        Back
      </Button>
      <Box
        w={["95%", "90%", "80%"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={recipe.image}
          alt={recipe.label}
          width="100%"
          height={["30vh", "40vh", "50vh"]}
          objectFit="cover"
        />
        <Box p={6}>
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <VStack align="start" spacing={5}>
              <Heading as="h2" size="lg">
                {recipe.label}
              </Heading>
              <Text fontSize="md">{recipe.mealType.join(", ")}</Text>
              <IngredientList recipe={recipe} />
            </VStack>
            <VStack align="start" spacing={5}>
              <Heading as="h3" size="md">
                Health Labels
              </Heading>
              <Wrap>
                <NutrientItems nutrientItems={recipe.healthLabels} />
              </Wrap>
              <HStack>
                {recipe.dietLabels.map((label) => (
                  <Badge key={label} colorScheme="purple">
                    {label}
                  </Badge>
                ))}
              </HStack>
              <Heading as="h3" size="md">
                Cautions
              </Heading>
              <HStack>
                {recipe.cautions.map((caution) => (
                  <Badge key={caution} colorScheme="red">
                    {caution}
                  </Badge>
                ))}
              </HStack>

              <TotalNutrients totalNutrients={recipe.totalNutrients} />
            </VStack>
          </SimpleGrid>
          <Box mt={10}>
            <Heading as="h3" size="md" mb={3}>
              Instructions
            </Heading>
            <Text>{recipe.instructions}</Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
