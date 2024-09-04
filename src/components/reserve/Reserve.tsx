import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./reserve.module.scss";
import { validateEmail, validateName, validateNumber } from "./validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const timeSlots = [
	{ value: 12, display: "12.00 PM" },
	{ value: 12, display: "12.30 PM" },
	{ value: 13, display: "1.00 PM" },
	{ value: 13, display: "1.30 PM" },
	{ value: 16, display: "4.00 PM" },
	{ value: 16, display: "4.30 PM" },
	{ value: 17, display: "5.00 PM" },
	{ value: 17, display: "5.30 PM" },
	{ value: 20, display: "8.00 PM" },
	{ value: 20, display: "8.30 PM" },
	{ value: 21, display: "9.00 PM" },
	{ value: 21, display: "9.30 PM" },
];

interface TimeGuestType {
	time: string;
	guest: number;
	timeError: string;
	guestError: string;
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
	children: JSX.Element;
	handleSubmit: () => void;
	submitting: boolean;
}

const Finalform = ({
	formInput,
	setFormInput,
	children,
	handleSubmit,
	submitting,
}: FinalformProps) => {
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
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div className={styles.input}>
					<input
						type="text"
						placeholder="Name"
						onChange={handleChange}
						value={formInput.name}
						name="name"
						required
						disabled={submitting}
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
							required
							disabled={submitting}
						/>
						{formInput.emailError && (
							<p className="error">{formInput.emailError}</p>
						)}
					</div>
					<div className={styles.input}>
						<input
							type="text"
							inputMode="tel"
							placeholder="Phone number"
							onChange={handleChange}
							value={formInput.number}
							name="number"
							required
							disabled={submitting}
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
						disabled={submitting}
					></textarea>
				</div>

				{children}
			</form>
		</div>
	);
};

const TimeGuest = ({ setTimeGuest, timeGuest }: TimeGuestProps) => {
	const now = new Date();

	const peopleCount = () => {
		let elements: React.JSX.Element[] = [];

		for (let i = 1; i <= 8; i++) {
			elements.push(
				<button
					data-selected={timeGuest.guest == i}
					key={i}
					onClick={() => {
						setTimeGuest((prev) => ({
							...prev,
							guest: i,
							guestError: "",
						}));
					}}
				>
					{i}
				</button>
			);
		}
		return elements;
	};

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
										timeError: "",
									}))
								}
							>
								{item.display}
							</button>
						);
					})}
				</div>
				{timeGuest.timeError && (
					<p className="error">{timeGuest.timeError}</p>
				)}
			</div>

			<div className={styles.guest}>
				<h4>How many people?</h4>
				<div className={styles.list}>{peopleCount()}</div>
				{timeGuest.guestError && (
					<p className="error">{timeGuest.guestError}</p>
				)}
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
		timeError: "",
		guestError: "",
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

	const [submitting, setSubmitting] = useState(false);

	// Get the current date
	const currentDate = new Date();

	// Add 21 days to the current date
	const futureDate = new Date(
		currentDate.getTime() + 21 * 24 * 60 * 60 * 1000
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

	const validateForm = () => {
		if (!validateName(formInput.name)) {
			setFormInput((prev) => {
				return { ...prev, nameError: "Invalid name provided." };
			});
			return false;
		}

		if (!validateEmail(formInput.email)) {
			setFormInput((prev) => {
				return { ...prev, emailError: "Invalid email provided." };
			});
			return false;
		}

		if (!validateNumber(formInput.number)) {
			setFormInput((prev) => {
				return { ...prev, numberError: "Invalid number" };
			});
			return false;
		}

		setFormInput((prev) => {
			return { ...prev, nameError: "", emailError: "", numberError: "" };
		});
		return true;
	};

	const handleSubmit = () => {
		// validate final form here
		if (!validateForm()) {
			return;
		}
		setSubmitting(true);

		// handle api req
		setTimeout(() => {
			setSubmitting(false);
			setFormInput({
				name: "",
				email: "",
				number: "",
				info: "",
				nameError: "",
				emailError: "",
				numberError: "",
			});
			setTimeGuest({
				time: "",
				guest: 0,
				timeError: "",
				guestError: "",
			});
			onChange(new Date());
			setStep(1);

			toast.success(
				"Successfully submitted your details " + formInput.name
			);
		}, 2000);
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
						handleSubmit={handleSubmit}
						submitting={submitting}
					>
						<div className={styles.infoAction}>
							{step !== 1 && step <= 3 && !submitting && (
								<button
									data-type="button"
									data-variant="clear"
									onClick={() => {
										if (step != 1)
											setStep((prev) => prev - 1);
									}}
									disabled={submitting}
								>
									Prev
								</button>
							)}
							<button
								data-type="button"
								data-variant="primary"
								disabled={submitting}
							>
								{submitting ? "Submitting..." : "Submit"}
							</button>
						</div>
					</Finalform>
				);
		}
	};

	const validateTimeAndGuest = () => {
		if (timeGuest.time.length === 0) {
			setTimeGuest((prev) => {
				return {
					...prev,
					timeError: "You need to select time to proceed.",
				};
			});
			return false;
		}

		if (timeGuest.guest <= 0) {
			setTimeGuest((prev) => {
				return {
					...prev,
					guestError: "You need to select guest to proceed.",
				};
			});
			return false;
		}

		setTimeGuest((prev) => {
			return {
				...prev,
				guestError: "",
				timeError: "",
			};
		});

		return true;
	};

	const handleStep = () => {
		if (step == 1 && day) {
			setStep(2);
			return;
		}

		if (step == 2) {
			// validate time and guest
			if (!validateTimeAndGuest()) {
				return;
			}
			setStep(3);
			return;
		}
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

				{step != 3 && (
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
				)}
			</div>

			<ToastContainer />
		</div>
	);
};

export default Reserve;
