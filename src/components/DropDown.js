import React from "react";
import { useState } from "react";

const DropDown = ({ dropdownItems, dropdownTitle, onChange }) => {
	return (
		<div>
			<select onChange={onChange} className="form-select form-select-lg mb-3">
				<option defaultValue>{dropdownTitle}</option>
				{dropdownItems.map((item, index) => {
					return (
						<option value={item} key={index}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DropDown;
