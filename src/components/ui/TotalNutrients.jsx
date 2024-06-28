import React from "react";
import { Box, HStack, Heading, Text, VStack, Wrap } from "@chakra-ui/react";

const TotalNutrients = ({ totalNutrients }) => {
  return (
    <>
      <Heading as="h3" size="lg" mb="3">
        Total Nutrients
      </Heading>
      <VStack align="start" spacing={4}>
        <HStack>
          <Wrap>
            <VStack align="center">
              <Text>{totalNutrients.ENERC_KCAL.quantity.toFixed(0)} kcal</Text>
              <Text>
                <strong>CALORIES</strong>
              </Text>
            </VStack>
            <VStack align="center">
              <Text>{totalNutrients.PROCNT.quantity.toFixed(0)} g</Text>
              <Text>
                <strong>PROTEIN</strong>
              </Text>
            </VStack>
            <VStack align="center">
              <Text>{totalNutrients.FAT.quantity.toFixed(0)} g</Text>
              <Text>
                <strong>FAT</strong>
              </Text>
            </VStack>
            <VStack align="center">
              <Text>{totalNutrients.CHOCDF.quantity.toFixed(0)} g</Text>
              <Text>
                <strong>CARBS</strong>
              </Text>
            </VStack>
            <VStack align="center">
              <Text>{totalNutrients.CHOLE.quantity.toFixed(0)} mg</Text>
              <Text>
                <strong>CHOLESTEROL</strong>
              </Text>
            </VStack>
            <VStack align="center">
              <Text>{totalNutrients.NA.quantity.toFixed(0)} mg</Text>
              <Text>
                <strong>SODIUM</strong>
              </Text>
            </VStack>
          </Wrap>
        </HStack>
      </VStack>
    </>
  );
};
export default TotalNutrients;
