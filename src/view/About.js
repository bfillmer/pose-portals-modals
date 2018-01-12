
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {H1, P} from 'view/Shared/Typography'
import {Link} from 'view/Shared/Link'

export const About = () => (
  <Section>
    <H1>About</H1>
    <P>Head to the <Link href='/'>Home Page</Link>.</P>
  </Section>
)
