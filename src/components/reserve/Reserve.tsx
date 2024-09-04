import React, { useMemo, useState } from "react";
import Calendar from "react-calendar";
import styles from "./reserve.module.scss";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const timeSlots = [
	{ value: 12, display: "12.00" },
	{ value: 12, display: "12.30" },
	{ value: 13, display: "1.00" },
	{ value: 13, display: "1.30" },
	{ value: 16, display: "4.00" },
	{ value: 16, display: "4.30" },
	{ value: 17, display: "5.00" },
	{ value: 17, display: "5.30" },
	{ value: 20, display: "8.00" },
	{ value: 20, display: "8.30" },
	{ value: 21, display: "9.00" },
	{ value: 21, display: "9.30" },
];

interface TimeGuestType {
	time: string;
	guest: number;
}

interface TimeGuestProps {
	setTimeGuest: React.Dispatch<React.SetStateAction<TimeGuestType>>;
	timeGuest: TimeGuestType;
}

interface FormInput {
	name: string;
	email: string;
	number: string;
	info: string;
	nameError: string;
	emailError: string;
	numberError: string;
}

interface FinalformProps {
	formInput: FormInput;
	setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
}

const Finalform = ({ formInput, setFormInput }: FinalformProps) => {
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>
	) => {
		let key = e.target.name;
		let value = e.target.value;

		setFormInput((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<div className={styles.form}>
			<form>
				<div className={styles.input}>
					<input
						type="text"
						placeholder="Name"
						onChange={handleChange}
						value={formInput.name}
						name="name"
					/>

					{formInput.nameError && (
						<p className="error">{formInput.nameError}</p>
					)}
				</div>

				<div className={styles.inputGroup}>
					<div className={styles.input}>
						<input
							type="email"
							placeholder="Email"
							onChange={handleChange}
							value={formInput.email}
							name="email"
						/>
						{formInput.emailError && (
							<p className="error">{formInput.emailError}</p>
						)}
					</div>
					<div className={styles.input}>
						<input
							type="text"
							inputMode="tel"
							placeholder="Number"
							onChange={handleChange}
							value={formInput.number}
							name="number"
						/>
						{formInput.numberError && (
							<p className="error">{formInput.numberError}</p>
						)}
					</div>
				</div>

				<div className={styles.input}>
					<textarea
						placeholder="Please provide additional information"
						onChange={handleChange}
						value={formInput.info}
						name="info"
					></textarea>
				</div>
			</form>
		</div>
	);
};

const TimeGuest = ({ setTimeGuest, timeGuest }: TimeGuestProps) => {
	const now = new Date();

	const peopleCount = useMemo(() => {
		let elements: React.JSX.Element[] = [];

		for (let i = 1; i <= 8; i++) {
			elements.push(
				<button
					data-selected={timeGuest.guest == i}
					key={i}
					onClick={() =>
						setTimeGuest((prev) => ({
							...prev,
							guest: i,
						}))
					}
				>
					{i}
				</button>
			);
		}
		return elements;
	}, []);

	return (
		<div className={styles.selectionContainer}>
			<div className={styles.time}>
				<h4>TIME</h4>
				<div className={styles.list}>
					{timeSlots.map((item) => {
						return (
							<button
								data-selected={item.display === timeGuest.time}
								key={item.display}
								disabled={now.getHours() >= item.value}
								onClick={() =>
									setTimeGuest((prev) => ({
										...prev,
										time: item.display,
									}))
								}
							>
								{item.display}
							</button>
						);
					})}
				</div>
			</div>

			<div className={styles.guest}>
				<h4>How many people?</h4>
				<div className={styles.list}>{peopleCount}</div>
			</div>
		</div>
	);
};

const Reserve = () => {
	const [day, onChange] = useState<Value>(new Date());
	const [step, setStep] = useState<number>(1);

	const [timeGuest, setTimeGuest] = useState<TimeGuestType>({
		time: "",
		guest: 0,
	});

	const [formInput, setFormInput] = useState<FormInput>({
		name: "",
		email: "",
		number: "",
		info: "",
		nameError: "",
		emailError: "",
		numberError: "",
	});

	// Get the current date
	const currentDate = new Date();

	// Add 21 days to the current date
	const futureDate = new Date(
		currentDate.getTime() + 210 * 24 * 60 * 60 * 1000
	);

	const getInfo = (step: number) => {
		switch (step) {
			case 1:
				return "Please Select a date";
			case 2:
				return "Select time and guests";
			case 3:
				return "Please fill with your details";
		}
	};

	const handleSubmit = () => {
		// validate final form here
	};

	const getItem = (step: number) => {
		switch (step) {
			case 1:
				return (
					<div className={styles.calendar}>
						<Calendar
							onChange={onChange}
							value={day}
							minDate={currentDate}
							maxDate={futureDate}
						/>
					</div>
				);
			case 2:
				return (
					<TimeGuest
						setTimeGuest={setTimeGuest}
						timeGuest={timeGuest}
					/>
				);
			default:
				return (
					<Finalform
						setFormInput={setFormInput}
						formInput={formInput}
					/>
				);
		}
	};

	const handleStep = () => {
		if (step == 1 && day) {
			setStep(2);
			return;
		}

		if (step == 2) {
			// validate time and guest
			setStep(3);
			return;
		}

		handleSubmit();
	};

	return (
		<div className={styles.action}>
			<div className={styles.heading}>
				<h2 className="clash-display">Reserve a table</h2>

				<p>
					or Call us at{" "}
					<a data-type="link" href="tel:8826284330">
						8826284330
					</a>
				</p>
			</div>

			<div className={styles.info}>
				<div className={styles.detail}>
					<p>
						<span>{step} / 3 </span>
						{getInfo(step)}
					</p>
				</div>

				<div className={styles.step}>{getItem(step)}</div>

				<div className={styles.infoAction}>
					{step !== 1 && step <= 3 && (
						<button
							data-type="button"
							data-variant="clear"
							onClick={() => {
								if (step != 1) setStep((prev) => prev - 1);
							}}
						>
							Prev
						</button>
					)}
					<button
						data-type="button"
						data-variant="primary"
						onClick={handleStep}
					>
						{step == 3 ? "Submit" : "Next"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reserve;
