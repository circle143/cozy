type ValidateEmail = (email: string) => boolean;

type ValidateName = (fullName: string) => boolean;

type ValidateNumber = (number: string) => boolean;

export const validateEmail: ValidateEmail = (email) => {
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	return emailRegex.test(email);
};

export const validateName: ValidateName = (fullName) => {
	// Regular expression to allow alphabetic characters, spaces, hyphens, and apostrophes
	const pattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
	return pattern.test(fullName) && fullName.length >= 3;
};

export const validateNumber: ValidateNumber = (number) => {
	const numberRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
	return numberRegex.test(number);
};
