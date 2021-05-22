import { Flex } from '@chakra-ui/react';
import { Layout } from '@components/Layout';

import Popular from "../src/components/Popular"

export default function Index() {
  return (
    <Layout>
      <Flex direction="column">
        <Popular />
      </Flex>
    </Layout>
  );
}
