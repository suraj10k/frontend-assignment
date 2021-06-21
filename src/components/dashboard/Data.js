import React ,{useState}from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import { Badge } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon ,CheckIcon,EmailIcon,DeleteIcon} from '@chakra-ui/icons'
import {
    Heading,
    GridItem,
    Alert,
    AlertIcon,
    FormLabel,
    FormControl,
    Input,
    Button,
    Text,
    Textarea,
    Grid,
    Box,
    IconButton,
    Stack,
  } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
  import Dashboard from "./Dashboard";

  function BasicUsage({cname,Add,city,country,notes,items}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button bgGradient="linear(to-l, #01baef,#20bf55)" onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader><Text fontWeight="extrabold">Invoice:</Text></ModalHeader>
              <ModalCloseButton />
  
              <ModalBody>
                {cname}
                {Add}
                {city}
                {country}
                {notes}
                {items}
              </ModalBody>
  
              <ModalFooter>
                <Button mt={4}  bgGradient="linear(to-l, #01baef,#20bf55)" mr={3} onClick={onClose}>
                  Close
                </Button>
                <IconButton
                mt={4}
                variant="outline"
                colorScheme="teal"
                aria-label="Send email"
                icon={<EmailIcon />}
              /> 
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    )
  }
export default function Data({customers,paid}) {
  const [mark,setMark] = useState(0)

  const toggle = () => {
    return setMark(1);
  }

  console.log(mark)
  return (      
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}>
      <Stack direction="row">
        <Heading as="h1" mb={6}>
        {customers.companyName} {mark ? <Badge variant="outline" colorScheme="green">Paid</Badge> :
        <Badge variant="outline" colorScheme="Red">Pending</Badge>}
      </Heading>
      </Stack>
      <BasicUsage cname={<Text fontSize="lg"><Text color="teal.200" fontWeight="bold">Name : </Text>{customers.customerName}</Text>}
            Add={<Text fontSize="lg"><Text color="teal.200" fontWeight="bold">Address : </Text>{customers.address}</Text>} 
            city={<Text fontSize="lg"><Text color="teal.200" fontWeight="bold">City : </Text>{customers.city}</Text>}
            country={<Text fontSize="lg"><Text color="teal.200" fontWeight="bold">Country : </Text>{customers.country}</Text>}
            notes={<Text fontSize="lg"><Text color="teal.200" fontWeight="bold">Notes : </Text>{customers.value}</Text>}
            items={customers.inputFields.map((inputFields,index) => (
            <div key={index}>
              <Grid mt={8} templateColumns="repeat(4, 1fr)" gap={8}>
              <Box w="100%" h="100%">
                <Text fontSize="lg" fontWeight="extrabold" color="teal.200">List {index+1} : </Text>
              </Box>
              <Box w="100%" h="10%">  
                <Text fontSize="lg"><Text color="teal.200" fontWeight="extrabold">Items</Text> {inputFields.items}</Text>
              </Box>
              <Box w="100%" h="10%">  
                <Text fontSize="lg"><Text color="teal.200" fontWeight="extrabold">Materials</Text>{inputFields.materials}</Text>
              </Box>
              <Box w="100%" h="10%">  
                <Text fontSize="lg"><Text color="teal.200" fontWeight="extrabold">Cost</Text>{inputFields.cost}</Text>
              </Box>
              </Grid>
              </div>
            ))} />
            <Button onClick={toggle} rightIcon={<CheckIcon />} 
            colorScheme="teal" variant="outline">
               Mark Paid
            </Button>
      </GridItem>
    )
}

