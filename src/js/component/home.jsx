import React from "react";

//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div className="counter">
		<div className="text-center d-flex justify-content-center">
			<div className="clock"> 
			<div className="p-5 my-auto bg-dark text-light rounded">
		<i class="far fa-clock"></i>
		</div>
		</div>
		<div>
		<h1 className="p-5 bg-dark text-light rounded">{props.six}</h1>
		</div>
		<div>
		<h1 className="p-5 bg-dark text-light rounded">{props.five}</h1>
		</div>
		<div>
		<h1 className="p-5 bg-dark text-light rounded">{props.four}</h1>
		</div>
		<div>
		<h1 className="p-5 bg-dark text-light rounded">{props.three}</h1>
		</div>
		<div>
		<h1 className="p-5 bg-dark text-light rounded">{props.two}</h1>
		</div>
		<div>
		<h1 className="p-5 bg-dark text-light rounded">{props.one}</h1>
		</div>
		</div>
		</div>
	);
};

export default Home;