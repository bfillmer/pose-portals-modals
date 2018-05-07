
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {Heading, P} from 'view/Shared/Typography'
import {A} from 'view/Shared/Navigate'

import {ROUTE_HOME} from 'router'

export function About () {
  return (
    <Section>
      <Heading>About</Heading>
      <P><A href={ROUTE_HOME}>Home</A></P>
    </Section>
  )
}
