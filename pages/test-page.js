import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Forward Research Liaison</title>
          <meta
            property="og:title"
            content="test-page - Forward Research Liaison"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_ajh0mr) => (
            <>
              <h1 id={context_ajh0mr?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextAjh0mrProp}
          persistDataDuringLoading={true}
          key={props?.contextAjh0mrProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextAjh0mrProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextAjh0mrProp: contextAjh0mrProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
