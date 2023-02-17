const verifyEmail = (req, res, context) => {
  return res(context.status(200), context.delay(1000));
};
const submitData = (req, res, context) => {
  return res(context.status(200), context.delay(1000));
};
export const handlers = [
  rest.post('/verifyEmail', verifyEmail),
  rest.post('/submitData', submitData),
];
