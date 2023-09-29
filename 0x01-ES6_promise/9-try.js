// Try/catch/finally

export default function guardrail(mathfunction) {
  const array = [];

  try {
    array.push(mathfunction());
  } catch (err) {
    array.push(err.toString());
  } finally {
    array.push('Guardrail was processed');
  }

  return array;
}
