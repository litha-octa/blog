import {Table, Tbody, Tr, Td} from '@chakra-ui/react'
import { myData } from '../assets/MyAssets'
import { isMobile } from 'react-device-detect'


export const TabBio = () =>{
    return(
        <Table className='tab-row' fontSize={isMobile? 15 : 25}>
            <Tbody>
                <Tr>
                    <Td>Fullname</Td>
                    <Td>: {myData?.fullname}</Td>
                </Tr>
                <Tr>
                    <Td>Religion</Td>
                    <Td>: {myData?.religion}</Td>
                </Tr>
                <Tr>
                    <Td>Marital Status</Td>
                    <Td>: {myData?.maritalStatus}</Td>
                </Tr>
                <Tr>
                    <Td>Domicile</Td>
                    <Td>: {myData?.domicile}</Td>
                </Tr>
                <Tr>
                    <Td>Nationality</Td>
                    <Td>: {myData?.nationality}</Td>
                </Tr>
                <Tr>
                    <Td>Email</Td>
                    <Td>: {myData?.emailAddress}</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}