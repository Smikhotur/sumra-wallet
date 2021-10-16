export const END_POINTS = {
  SERVER: 'https://api.sumra.net/',
  SEND_CODE: 'auth/v1/send-code',
  VALIDATE: 'auth/v1/validate',
  REGISTRATION: 'auth/v1/registration',
  AUTHENTIFICATION: 'token/auth/v1/meet/authenticate',
};

export const sendCodeApi = async (data) => {
  const response = await fetch('https://api.sumra.net/auth/v1/send-code', {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const fetchValidateName = async (name) => {
  const response = await fetch(
    `https://api.sumra.net/auth/v1/validate?username=${name}`
  );

  return response.status;
};

export const fetchRegistrationData = async (data) => {
  const response = await fetch(`https://api.sumra.net/auth/v1/registration`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
