import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import { supabase } from './supabaseClient';

// Create user interface (Navbar, form to create products, prduct cart)
// Setup Supabase


function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  console.log(name);
  console.log(description);

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    try {
      console.log("in get Products")
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10)
      if (error) throw error;
      console.log('log data');
      console.log(data);
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createProduct(){
    try {
      console.log("in get Products")
      const { data, error } = await supabase
        .from("products")
       .insert({
        name:name,
        description : description
       })
       .single()

      if (error) throw error;
      window.location.reload();
      console.log('log data');
      console.log(data);
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(products);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>
              Create by Lee
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>

            <h3>Create Products form Supabase database.</h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" id="name"
              onChange={(e) => setName(e.target.value)} />

            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" id="discription"
              onChange={(e) => setDescription(e.target.value)} />
            <br></br>
            <Button onClick={()=> createProduct()}>Create Product in Supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {products.map((product)=>(
            <Col>
            <ProductCard product={product}/> {/* product={product} */}
            </Col>
          ))}
          
        </Row>
      </Container>
    </>
  );
}

export default App;
