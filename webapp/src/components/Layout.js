import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

export default function Layout (props) {
  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
  }))

  return (
    <Container column style={{ backgroundColor: 'purple' }}>
      {props.children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  column: PropTypes.node.isRequired
}
