import { useMemo, useState } from 'react'

import Form from './components/Form'
import FormPage from './components/FormPage'
import Modal from './components/Modal'
import EmailContext from './contexts/EmailContext'
import GlobalStyles, { Grid } from './styles/Global'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <Grid>
      <GlobalStyles />
      <EmailContext.Provider
        value={useMemo(() => ({ email, setEmail }), [email])}>
        <Modal setState={setModalOpen} state={modalOpen} />
        <FormPage>
          <Form setModal={setModalOpen} />
        </FormPage>
      </EmailContext.Provider>
    </Grid>
  )
}

export default App
