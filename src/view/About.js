
import React from 'react'
import {connect} from 'react-redux'

import {Section} from 'view/Shared/Structural'
import {H1, H2, P, UL} from 'view/Shared/Typography'
import {Link} from 'view/Shared/Link'

import {aboutStep} from 'selectors'

const StepOne = () => (<H2>Step One</H2>)

const StepTwo = () => (<H2>Step Two</H2>)

const StepThree = () => (<H2>Step Three</H2>)

const mapStepsToParams = {
  'one': StepOne,
  'two': StepTwo,
  'three': StepThree
}

const mapStateToProps = state => ({
  step: aboutStep(state)
})

const Container = ({step}) => {
  const Step = step && mapStepsToParams[step] ? mapStepsToParams[step] : StepOne
  return (
    <Section>
      <H1>About</H1>
      <Step />
      <UL>
        <li><Link href='/about/one'>One</Link></li>
        <li><Link href='/about/two'>Two</Link></li>
        <li><Link href='/about/three'>Three</Link></li>
      </UL>
      <P>Head to the <Link href='/'>Home Page</Link>.</P>
    </Section>
  )
}

export const About = connect(mapStateToProps)(Container)
