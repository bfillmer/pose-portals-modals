
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {Heading, P} from 'view/Shared/Typography'
import {Button} from 'view/Shared/Navigate'

import {ROUTE_ABOUT} from 'router'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <P><Button href={ROUTE_ABOUT}>About</Button></P>
    </Section>
  )
}
