
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {H1, P} from 'view/Shared/Typography'
import {Link} from 'view/Shared/Link'

export const Home = () => (
  <Section>
    <H1>Home</H1>
    <P>Head to the <Link href='/about/one'>About Page</Link>.</P>
  </Section>
)
