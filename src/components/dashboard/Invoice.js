import React from 'react'
import { Grid, GridItem , Box,Wrap,WrapItem,Center} from "@chakra-ui/react"
import Data from "./Data"

const Invoice = ({customers}) => {
    return (
        <Wrap>
  <WrapItem>
    <Center w="180px" h="80px" >
      {`name: ${customers.customerName}`}
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="green.200">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="tomato">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="blue.200">
      Box 4
    </Center>
  </WrapItem>
</Wrap>
    )
}

export default Invoice


