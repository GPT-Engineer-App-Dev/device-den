import { Box, Container, VStack, Text, Heading, SimpleGrid, Image, Flex, Spacer, Button, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "https://via.placeholder.com/150",
    price: 999,
    category: "Computers",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with cutting-edge features.",
    image: "https://via.placeholder.com/150",
    price: 799,
    category: "Mobile Phones",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "https://via.placeholder.com/150",
    price: 499,
    category: "Tablets",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearchQuery && matchesCategory && matchesPrice;
  });

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

        <Box width="100%" mb={8}>
          <Select placeholder="Select category" onChange={handleCategoryChange} size="lg">
            <option value="Computers">Computers</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Tablets">Tablets</option>
          </Select>
        </Box>

        <Box width="100%" mb={8}>
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            aria-label="price-range-slider"
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            step={50}
            onChangeEnd={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0} />
            <SliderThumb boxSize={6} index={1} />
          </Slider>
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
                  ${product.price}
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