import { maxLength, minLength, email, required } from "@vuelidate/validators"

const phoneMask = (value) => {
 const regex = /^[0-9+]+$/;
 return regex.test(value);
};

const phone = {
 required,
 phoneMask,
 minLength: minLength(8),
 maxLength: maxLength(20),
};

const password = {
 required,
 minLength: minLength(8),
 maxLength: maxLength(20),
};

const email_state = {
 required,
 email,
 minLength: minLength(6),
 maxLength: maxLength(40),
}

const fName = {
 required,
 minLength: minLength(1),
 maxLength: maxLength(32),
}

const companyName = {
 required,
 minLength: minLength(1),
 maxLength: maxLength(32),
}

const lName = {
 required,
 minLength: minLength(1),
 maxLength: maxLength(32),
}

const message = {
 required,
 minLength: minLength(3),
 maxLength: maxLength(1500),
}

const telegram = {
 minLength: minLength(1),
 maxLength: maxLength(15),
}

const linkedin = {
 minLength: minLength(1),
 maxLength: maxLength(15),
}

export default {
 password: {value: password},
 phone: {value: phone},
 email: {value: email_state},
 fName: {value: fName},
 lName: {value: lName},
 companyName: {value: companyName},
 message: {value: message},
 telegram: {value: telegram},
 linkedin: {value: linkedin}
}
