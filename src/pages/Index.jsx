import { Box, Container, VStack, Text, Heading, SimpleGrid, Image, Flex, Spacer, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "https://via.placeholder.com/150",
    price: "$999",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with cutting-edge features.",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "https://via.placeholder.com/150",
    price: "$499",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">Electronics Store</Heading>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" color="white">
          Home
        </Button>
        <Button as={Link} to="/products" variant="ghost" color="white">
          Products
        </Button>
        <Button as={Link} to="/contact" variant="ghost" color="white">
          Contact
        </Button>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to the Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest and greatest in electronics.
        </Text>

        <Box width="100%" mb={8}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            size="lg"
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" fontSize="xl">
                  {product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;