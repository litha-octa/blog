import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { isBrowser } from 'react-device-detect'
import './component.css'

export const Nav =()=>{
    return(
<Heading className="heading" size='md' fontSize='1.5vw'>
  {isBrowser && (
    <Breadcrumb>
  <BreadcrumbItem >
    <BreadcrumbLink className={'breadcrumblink'} href='#/profile'>Profile</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink className={'breadcrumblink'} href='#'>Project</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink className={'breadcrumblink'} href='#'>Resume</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink className={'breadcrumblink'} href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
    </Breadcrumb>
  )}
      
      </Heading>
    )
  }