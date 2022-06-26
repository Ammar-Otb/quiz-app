import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Result from "./Result";
const Quiz = ({ setScore, score }) => {
	let questions = [
		{
			question: "What is your name?",
			answer: "Ammar",
			choices: ["Ammar", "Fahad", "Turkey", "Nasser"],
		},
		{
			question: "How old are you?",
			answer: "33",
			choices: ["23", "33", "43", "53"],
		},
		{
			question: "How many cats do I have?",
			answer: "20",
			choices: ["21", "20", "19", "1"],
		},
	];

	let navigate = useNavigate();
	const onClickQuit = () => {
		navigate("/home");
	};
	const [answer, setAnswer] = useState(0);

	const ansOnChange = (e) => {
		setAnswer(e.target.value);
	};

	const [counter, setCounter] = useState(0);

	const onClickNext = () => {
		setCounter(counter + 1);
		if (answer == questions[counter].answer) {
			setScore(score + 1);
		}
		if (counter >= questions.length - 1) {
			navigate("/result");
		}
	};

	return (
		<div className="quiz-card">
			<div className="container mt-sm-5 my-1">
				<div className="question ml-sm-5 pl-sm-5 pt-2">
					<div className="py-2 h5">
						<b>Q. {questions[counter].question}</b>
					</div>
					<div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
						{questions[counter].choices.map((choice, index) => {
							return (
								<label className="options" key={index}>
									{choice}
									<input
										onChange={ansOnChange}
										value={choice}
										type="radio"
										name="radio"
									/>
									<span className="checkmark"></span>
								</label>
							);
						})}
					</div>
				</div>
				<div className="d-flex align-items-center pt-3">
					<div id="prev">
						<button onClick={onClickQuit} className="btn btn-primary">
							Quit
						</button>
					</div>
					<div className="ml-auto mr-sm-5">
						<button onClick={onClickNext} className="btn btn-success">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
