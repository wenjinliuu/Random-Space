export async function handler(event) {
  const code = event.queryStringParameters.code;

  const res = await fetch(
    `https://www.mxnzp.com/api/lottery/common/latest?code=${code}&app_id=cbthljjczrusjrlk&app_secret=zvBO6dYoMEW4Ws5xrRgCdJaW0GPyE43y`
  );

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
