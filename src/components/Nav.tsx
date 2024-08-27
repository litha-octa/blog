import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

export const Nav =()=>{
    return(
<Heading className="heading" size='lg' fontSize='2vw'>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#/profile'>Profile</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='#'>Project</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </Heading>
    )
}