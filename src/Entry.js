import React, {useState} from "react"
import { Form , Button } from "react-bootstrap"

export default function Entry({postMethod, setUsers}) {
 const [name, setName] = useState('')
 const [company, setCompany] = useState('')
 const [jobtitle, setJobTitle] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  const newUser = {
    name: name,
    company: company,
    jobtitle: jobtitle,
  }
  postMethod(newUser)
  setUsers(prevUser =>[...prevUser, newUser])
  setName('')
  setCompany('')
  setJobTitle('')
 }

  return (
    <Form onSumit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label className="fw-bold mt-2">Name</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label className="fw-bold mt-2">Company</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter Company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label className="fw-bold mt-2">job title</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter job title"
        value={jobtitle}
        onChange={(e) => setJobTitle(e.target.value)}
        />
      </Form.Group>


      <Button variant="primary" type="submit" className="mt-3">Submit</Button>
    </Form>
  )
}
