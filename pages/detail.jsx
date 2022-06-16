import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss'
import { useEffect } from 'react';

const Box = styled.div`
    padding: 30px;
    text-align: center;

`
const Title = styled.h4`
    font-size: 25px;
    text-align: center;
    color : ${ props => props.color}
`

export default function Detail(props) {
	let [alert, setAlert] = useState(true)
	let [inputData, setInputData] = useState('')
	useEffect(() => {
		let timer = setTimeout(() => {
			setAlert(false)
			console.log('useEffect timer')
		}, 2000)
		return () => { clearTimeout(timer) }
	}, [])


	let { id } = useParams()
	let history = useHistory()//히스토리 오브젝트 
	let pickedShoe = props.shoes.find(item => { return item.id === parseInt(id) })



	return (
		<div className="container">
			<Box>this is the box</Box>
			<Title color="brown">this is the title</Title>
			{inputData}
			<input onChange={(e) => { setInputData(e.target.value) }} />

			{
				alert === true ?
					<div className="my-alert-yellow">
						<p>Low stock!</p>
					</div>
					: null
			}

			<div className="row">
				<div className="col-md-6">
					<img src={pickedShoe.img} width="100%" />
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5 product-title">{pickedShoe.title}</h4>
					<p>{pickedShoe.content}</p>
					<p>{pickedShoe.price}</p>
					<button className="btn btn-danger">Order Now</button>
					<button className="btn btn-danger" onClick={() => {
						history.goBack()
					}}>Go Back</button>
				</div>
			</div>
		</div>
	)
}