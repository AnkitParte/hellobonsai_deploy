import React from 'react'
import { Box, Tab, Tabs, TabList, TabPanel, TabPanels, Button } from "@chakra-ui/react"
import { Text, Image, Stack, Flex, SimpleGrid } from '@chakra-ui/react'
import CreateProject from './ButtonModal/CreateProject'
import CompanyDetails from './ButtonModal/CompanyDetails'
import { useSelector } from "react-redux";

const DashBoard = () => {
  const name = useSelector(store => store.auth.data.name);

  return (
    <div  >

      <Box display="flex" ml="5%" mb="10%" >
        <Image src="https://app.hellobonsai.com/packs/static/good-morning-66f0f5841376d77563ac.svg" alt="icon" />

        <Text fontSize='35px' color='#4d4d4d' marginInline="2%" marginTop="5%" fontFamily="amerigo bt">
          Hello,{" "}{name}!
        </Text>
      </Box>

      <Tabs variant='soft-rounded' colorScheme='green' ml="5%" mb="20%" >
        <SimpleGrid columns={[1, 1, 1, 2]} >
          <Box >
            <TabList>
              <Tab marginTop="1%" borderRadius="100%" backgroundColor="#00b289" fontWeight="bold" color="white">1</Tab>
              <Text lineHeight="20px" marginLeft="1%" marginTop="3%" fontWeight="bold" fontSize="14px" color="#878787">Create your first project</Text>
            </TabList>

            <TabList >
              <Tab marginTop="1%" borderRadius="100%" backgroundColor="#00b289" fontWeight="bold" color="white">2</Tab>
              <Text lineHeight="20px" marginLeft="1%" fontWeight="bold" marginTop="3%" fontSize="14px" color="#878787">Add company details</Text>

            </TabList>

            <TabList>
              <Tab marginTop="1%" borderRadius="100%" backgroundColor="#00b289" fontWeight="bold" color="white">3</Tab>
              <Text marginTop="3%" marginLeft="1%" fontWeight="bold" lineHeight="20px" fontSize="14px" color="#878787">Setup your branding</Text>

            </TabList>
            <TabList>
              <Tab marginTop="1%" borderRadius="100%" backgroundColor="#00b289" fontWeight="bold" color="white">4</Tab>
              <Text marginTop="3%" marginLeft="1%" fontWeight="bold" lineHeight="20px" fontSize="14px" color="#878787">Connect your calendar</Text>

            </TabList>
            <TabList>
              <Tab marginTop="1%" borderRadius="100%" backgroundColor="#00b289" fontWeight="bold" color="white">5</Tab>
              <Text lineHeight="20px" fontWeight="bold" marginLeft="1%" marginTop="3%" fontSize="14px" color="#878787">Connect a bank account</Text>
            </TabList>
          </Box>
          <Box >
            <TabPanels   >
              <TabPanel width="50%" >
                <Image src="https://app.hellobonsai.com/assets/dashboard/project_icon-cab4656b287c33bbf7cf081d205ac0698acc6ec5608a40d3ca388df1549ad089.svg" alt="icon" />
                <Text color="#292a2d" fontSize="22px">Create your first project</Text>
                <Text color="#6d6d6d" fontSize="14px" >Projects allow you to organize all of the tasks related to a specific initiative, goal, or big piece and track progress. </Text>
                <Stack marginTop="2%" direction='row' align='center' >

                  <CreateProject />
                  <Button colorScheme='green' size="md" variant='outline'>Next Step</Button>
                </Stack>
              </TabPanel>

              <TabPanel width="50%" >

                <Image src="https://app.hellobonsai.com/assets/dashboard/details-ddd6affca47f2f9bf95d730b041f7d8ba662d38d7745e87946e61872e84e4d25.svg" alt="icon" />
                <Text color="#292a2d" fontSize="22px">Add company details</Text>
                <Text color="#6d6d6d" fontSize="14px"> Add your basic info, logo, and branding. They'll be automatically added to your future proposals and invoices. </Text>
                <Stack marginTop="2%" direction='row' align='center' >
                  <CompanyDetails />
                  <Button colorScheme='green' size="md" variant='outline'>Next Step</Button>
                </Stack>
              </TabPanel>
              <TabPanel width="50%" >
                <Image src="https://app.hellobonsai.com/assets/dashboard/branding-9b80aa981d81868397c3e7f3a3bf9e24197565b6a262b3d361970610ea5975e1.svg" alt="icon" />
                <Text color="#292a2d" fontSize="22px">Setup your branding</Text>
                <Text color="#6d6d6d" fontSize="14px">Customize how your brand appears to your clients across your invoices, contracts and proposals. </Text>
                <Stack marginTop="2%" direction='row' align='center' >
                  <Button colorScheme='green' size="md" variant='solid'  >Setup Your Brand</Button>
                  <Button colorScheme='green' size="md" variant='outline'>Next Step</Button>
                </Stack>
              </TabPanel>
              <TabPanel width="50%" >
                <Image src="https://app.hellobonsai.com/assets/dashboard/calendar-c96cbc69df614b169680d80d37aa572a7189f2ec778534428010f4f537ede8f8.svg" alt="icon" />
                <Text color="#292a2d" fontSize="22px">Connect your calendar</Text>
                <Text color="#6d6d6d" fontSize="14px">Connect your Google Calendar account to receive automated reminders for upcoming invoices and tasks. </Text>
                <Stack marginTop="2%" direction='row' align='center' >
                  <Button colorScheme='green' size="md" variant='solid'  >Connect Calendar</Button>
                  <Button colorScheme='green' size="md" variant='outline'>Next Step</Button>
                </Stack>
              </TabPanel>
              <TabPanel width="50%" >
                <Image src="https://app.hellobonsai.com/assets/dashboard/bank-d258fd80e095b4620892055ecec103baa6638a49e4a0519f1ab4df307d7b700a.svg" alt="icon" />
                <Text color="#292a2d" fontSize="22px">Connect a bank</Text>
                <Text color="#6d6d6d" fontSize="14px">Connect your bank accounts to automate your expense tracking and management.
                </Text>
                <Stack marginTop="2%" direction='row' align='center' >
                  <Button colorScheme='green' size="md" variant='solid'  >Connect Account</Button>

                </Stack>
              </TabPanel>
            </TabPanels>
          </Box>
        </SimpleGrid>
      </Tabs>


    </div >
  )
}

export default DashBoard