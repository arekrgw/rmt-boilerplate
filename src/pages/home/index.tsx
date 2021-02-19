import { usePosts } from '@api/queryHooks';
import { Button, Center, Flex, Heading, Tooltip } from '@chakra-ui/react';
import * as React from 'react';

const Home: React.FC = () => {
  const { data } = usePosts();

  console.log(data);
  return (
    <Center>
      <Flex
        mt="10"
        w="2xl"
        boxShadow="0 3px 10px rgba(0, 0, 0, 0.17)"
        borderRadius="sm"
        p="10"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="3xl" textAlign="center">
          Jesteś gotowa na wyzwanie?
        </Heading>

        <Flex justifyContent="center" mt="10">
          <Tooltip
            label="Ten przycisk i tak nie działa :("
            placement="top"
            bg="gray.200"
            color="gray.800"
          >
            <Button mr="2" size="lg" variant="outline" colorScheme="red">
              Cykam się
            </Button>
          </Tooltip>
          <Button ml="2" size="lg" colorScheme="green" onClick={() => null}>
            No ba!
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Home;
