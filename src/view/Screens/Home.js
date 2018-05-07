
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {Heading, P} from 'view/Shared/Typography'
import {A, Button} from 'view/Shared/Navigate'

import {ROUTE_ABOUT} from 'router'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <P><Button href={ROUTE_ABOUT}>About</Button></P>
      <P><A href='https://google.com' external>Google</A></P>
    </Section>
  )
}
