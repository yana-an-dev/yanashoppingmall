import { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, Switch } from 'next'
//import './App.css';
import Product from './Product'
//import Detail from './Detail'
//import axios from 'axios'
import Data from './data';

export default function App() {
	const [products, setProducts] = useState(Data)

	return (
		<div className="container">
			<div className="row">
				{products.map((product, i) => { return <Product product={product} key={i} /> })}
			</div>
		</div>
	);
}