import { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, Switch } from 'next'
//import Data from './data.js'
//import './App.css';
//import Product from './Product'
//import Detail from './Detail'
//import axios from 'axios'

export default function Abc() {
	const [shoes, setShoes] = useState('shoe')

	return (<div>Abc</div>)
	// return (
	// 	<div className="App">
	// 		<Navbar bg="light" expand="lg">
	// 			<Container>
	// 				<Navbar.Brand href="#home">Yana SHOP</Navbar.Brand>
	// 				<Navbar.Toggle aria-controls="basic-navbar-nav" />
	// 				<Navbar.Collapse id="basic-navbar-nav">
	// 					<Nav className="me-auto">
	// 						<Link href="/">
	// 							<Nav.Link>Home</Nav.Link>
	// 						</Link>
	// 						<Link href="/detail">
	// 							<Nav.Link>Detail</Nav.Link>
	// 						</Link>
	// 						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
	// 							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
	// 							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
	// 							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
	// 							<NavDropdown.Divider />
	// 							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
	// 						</NavDropdown>
	// 					</Nav>
	// 				</Navbar.Collapse>
	// 			</Container>
	// 		</Navbar>

	// 		<Switch>
	// 			<Route exact path="/">
	// 				<div className="jumbotron">
	// 					<div className="text-box">
	// 						<h1 className="title">20% big sale</h1>
	// 						<p>Don't miss this chance!</p>
	// 					</div>
	// 					<Button variant="primary">Primary</Button>{' '}
	// 				</div>
	// 				<div className="container">
	// 					<div className="row">
	// 						{shoes.map((shoe, i) => { return <Product shoes={shoe} key={i} /> })}
	// 					</div>
	// 				</div>

	// 				<button className="btn btn-secondary" onClick={() => {
	// 					axios.get('https://codingapple1.github.io/shop/data2.json')
	// 						.then((result) => {
	// 							console.log('shoes', shoes)
	// 							result.data.forEach(item => shoes.push(item))

	// 							//console.log('addedShoes', addedShoes)
	// 							//setShoes(addedShoes)
	// 						})
	// 						.catch(() => { console.log('failed') })
	// 				}}> More... </button>


	// 			</Route>
	// 			<Route path="/detail/:id">
	// 				<Detail shoes={shoes} />
	// 			</Route>
	// 			<Route path="/:id">
	// 				<div> 아무거나 적었을때 보여줘요 </div>
	// 			</Route>
	// 		</Switch>
	// 	</div >
	// );
}