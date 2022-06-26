import React from "react";
import { useState } from "react";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const dropdownItems = ["Movies", "Sports", "Books"];
	const difficultyList = ["Easy", "Medium", "Hard"];

	const [name, setName] = useState("");
	const onChange = (e) => {
		setName(e.target.value);
	};

	const [category, setCateory] = useState("");
	const onChangeCategory = (e) => {
		setCateory(e.target.value);
	};

	let navigate = useNavigate();

	const [difficulty, setDifficulty] = useState("");
	const onChangeDifficulty = (e) => {
		setDifficulty(e.target.value);
	};
	const onClick = () => {
		if (name === "" || category === "" || difficulty === "") {
			alert("Enter all data!");
		} else {
			navigate("/quiz");
		}
	};
	return (
		<div className="bg">
			<div className="input-group mb-3 w-100">
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control w-100 h-50"
						placeholder="Enter your name"
						onChange={onChange}
					/>
					<label>Name</label>
				</div>
				<DropDown
					dropdownTitle="Select Quiz Type"
					dropdownItems={dropdownItems}
					onChange={onChangeCategory}
				/>
				<DropDown
					dropdownTitle="Select difficulty"
					dropdownItems={difficultyList}
					onChange={onChangeDifficulty}
				/>
				<button
					onClick={onClick}
					type="button"
					className="btn bg-success text-center">
					Start
				</button>
			</div>
		</div>
	);
};

export default Home;
